import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationEffectComponent } from './animation-effect/animation-effect.component';
import { FormsModule } from '@angular/forms';
import { StateComponent } from './state/state.component';
import { ListComponent } from './list/list.component';
import { KeyframesDemoComponent } from './keyframes-demo/keyframes-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationEffectComponent,
    StateComponent,
    ListComponent,
    KeyframesDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
