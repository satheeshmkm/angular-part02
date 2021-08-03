import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicTemplateDrivenFormComponent } from './basic-template-driven-form/basic-template-driven-form.component';
import { BasicReactiveFormComponent } from './basic-reactive-form/basic-reactive-form.component';
import { BasicInputOutputComponent } from './basic-input-output/basic-input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTemplateDrivenFormComponent,
    BasicReactiveFormComponent,
    BasicInputOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
