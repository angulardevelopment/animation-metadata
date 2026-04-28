import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  move,
  mergeWith
} from '@angular-devkit/schematics';

import { strings } from '@angular-devkit/core';

export function component(options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = apply(url('./files'), [
      template({
        ...strings,
        ...options
      }),
      move(`${options.path}/${strings.dasherize(options.name)}`)
    ]);

    return mergeWith(sourceTemplates);
  };
}