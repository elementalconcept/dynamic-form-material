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

import { DYNAMIC_FORM_COMPONENT_MAP, DynamicFormComponent } from '@elemental-concept/dynamic-form';
import { DynamicFormMaterialModule, materialComponentMap } from '@elemental-concept/dynamic-form-material';

import { AppComponent } from './app.component';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

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
        deps: [ HttpClient ],
        useFactory: httpLoaderFactory
      }
    }),

    DynamicFormMaterialModule,

    MatButtonModule,
    DynamicFormComponent
  ],
  providers: [
    // Dynamic Form mapping object using Dynamic Form Material map
    { provide: DYNAMIC_FORM_COMPONENT_MAP, useValue: materialComponentMap },

    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },

    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },

    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: [ 'l', 'LL' ]
        },
        display: {
          dateInput: 'L',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY'
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
