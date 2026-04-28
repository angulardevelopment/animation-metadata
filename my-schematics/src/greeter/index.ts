import { apply, branchAndMerge, chain, MergeStrategy, mergeWith, move, Rule, SchematicContext, SchematicsException, template, Tree, url } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function greeter(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
        let name = _options.name;
        if(tree.exists('hello.js')){
            tree.delete('hello.js');
        }
        tree.create('hello.js', `console.log('Hello ${name}')`);
    return tree;
  };
}

export function setupOptions(host: Tree, options: scssScaffoldOptions): Tree {
  const workspace = getWorkspace(host);
  const workspaceConfig = host.read('angular.json');

  if (!workspaceConfig) {
    throw new SchematicsException("Not an Angular CLI workspace"); 
  }

  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];
  }


      // Rename original SCSS file
    if (host.exists('src/styles.scss')) {
      host.rename('src/styles.scss', 'src/original-styles.scss');
    }
  return host;
}

export function ngAdd(options: scssScaffoldOptions): Rule {
  return (host: Tree, _context: SchematicContext) => {
    setupOptions(host, options);
    updateCLIConfig(options, host);

    // Rename original SCSS file code goes here

    // Add SCSS folders and files code goes here
 // Add SCSS folders and files
    const templateSource = apply(url('./files'), [
      template({}),
      move('src')
    ]);
    const rule = chain([
      branchAndMerge(chain([
        mergeWith(templateSource, MergeStrategy.Default)
 ,     ]))
    ]);

    return rule(host, _context);
  }
}