import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule, NativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import {
  CheckboxInputComponent,
  DatepickerInputComponent,
  DescriptionComponent,
  MultiSelectInputComponent,
  RadioInputComponent,
  SelectInputComponent,
  StringInputComponent,
  TextInputComponent
} from './components';

@NgModule({
  declarations: [
    CheckboxInputComponent,
    DatepickerInputComponent,
    DescriptionComponent,
    MultiSelectInputComponent,
    RadioInputComponent,
    SelectInputComponent,
    StringInputComponent,
    TextInputComponent
  ],
  exports: [
    CheckboxInputComponent,
    DatepickerInputComponent,
    DescriptionComponent,
    MultiSelectInputComponent,
    RadioInputComponent,
    SelectInputComponent,
    StringInputComponent,
    TextInputComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,

    NativeDateModule,

    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
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
  ]
})
export class DynamicFormMaterialModule {
}
