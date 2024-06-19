import { DynamicFormComponentMap } from '@elemental-concept/dynamic-form';

import { MaterialInputMeta } from './types';

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

export const materialComponentMap: DynamicFormComponentMap<MaterialInputMeta, any> = {
  string: StringInputComponent,
  number: StringInputComponent,
  email: StringInputComponent,
  tel: StringInputComponent,
  url: StringInputComponent,
  password: StringInputComponent,
  select: SelectInputComponent,
  multiselect: MultiSelectInputComponent,
  text: TextInputComponent,
  checkbox: CheckboxInputComponent,
  radio: RadioInputComponent,
  simpleDatepicker: DatepickerInputComponent,
  _description_: DescriptionComponent
};
