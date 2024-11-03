import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationEffectComponent } from './animation-effect/animation-effect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateComponent } from './state/state.component';
import { ListComponent } from './list/list.component';
import { KeyframesDemoComponent } from './keyframes-demo/keyframes-demo.component';
import { ReuseAnimationComponent } from './reuse-animation/reuse-animation.component';
import { ParentChildAnimationComponent } from './parent-child-animation/parent-child-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationEffectComponent,
    StateComponent,
    ListComponent,
    KeyframesDemoComponent,
    ReuseAnimationComponent,
    ParentChildAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
