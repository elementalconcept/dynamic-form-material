import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { DynamicFormDescriptionControl, DynamicFormElement } from '@elemental-concept/dynamic-form';

import { TranslationFactory } from '../../factories';

import { MaterialInputMeta } from '../../types';

@Component({
  selector: 'df-description',
  templateUrl: './description.component.html',
  styleUrls: [ './description.component.scss' ]
})
export class DescriptionComponent implements DynamicFormDescriptionControl<MaterialInputMeta, string> {
  readonly type = 'description';

  formControl: AbstractControl; // not used, but needed when compiling

  dynamicFormElement: DynamicFormElement<MaterialInputMeta, string>;

  visible = true;

  textTransformer?: (message: string) => string;

  showControl = () => this.visible = true;

  hideControl = () => this.visible = false;

  transform = (key: string | undefined): string => TranslationFactory.textTransformer(key, this.textTransformer);
}
