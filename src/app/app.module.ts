import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DYNAMIC_FORM_COMPONENT_MAP, DynamicFormModule } from '@elemental-concept/dynamic-form';
import { DynamicFormMaterialModule, materialComponentMap } from '@elemental-concept/dynamic-form-material';

import { AppComponent } from './app.component';

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        deps: [HttpClient],
        useFactory: httpLoaderFactory
      }
    }),

    DynamicFormModule,
    DynamicFormMaterialModule,

    MatButtonModule
  ],
  providers: [
    // Dynamic Form mapping object using Dynamic Form Material map
    { provide: DYNAMIC_FORM_COMPONENT_MAP, useValue: materialComponentMap },

    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
