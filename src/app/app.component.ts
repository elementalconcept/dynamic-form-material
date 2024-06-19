import { Component } from '@angular/core';

import { DynamicFormComponentStatus, DynamicFormComponentValue } from '@elemental-concept/dynamic-form';
import { materialComponentMap } from '@elemental-concept/dynamic-form-material';

import { materialConfig, MaterialFormValue, materialValue } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  materialConfig = materialConfig;
  materialValue = materialValue;
  materialComponentMap = materialComponentMap;
  materialStatus: string;
  materialFormValue = {};

  onMaterialChanges = (data: DynamicFormComponentStatus<MaterialFormValue>) => this.materialStatus = data.status;

  onMaterialValueChanges = (data: DynamicFormComponentValue<MaterialFormValue>) => this.materialFormValue = data.value;
}
