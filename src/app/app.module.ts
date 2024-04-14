import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationEffectComponent } from './animation-effect/animation-effect.component';
import { FormsModule } from '@angular/forms';
import { StateComponent } from './state/state.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationEffectComponent,
    StateComponent
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
