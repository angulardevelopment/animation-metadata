import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyframesDemoComponent } from './keyframes-demo/keyframes-demo.component';
import { ReuseAnimationComponent } from './reuse-animation/reuse-animation.component';
import { AnimationEffectComponent } from './animation-effect/animation-effect.component';
import { ListComponent } from './list/list.component';
import { StateComponent } from './state/state.component';
import { ParentChildAnimationComponent } from './parent-child-animation/parent-child-animation.component';

const routes: Routes = [{
  path:' Keyframes',
  component: KeyframesDemoComponent
}, {
  path:'reuse',
  component: ReuseAnimationComponent
}, {
  path:'animationEffect',
  component: AnimationEffectComponent
}, {
  path:'list',
  component: ListComponent
},{
  path:'state',
  component: StateComponent
},
{
  path:'parentChildAnimation',
  component: ParentChildAnimationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
