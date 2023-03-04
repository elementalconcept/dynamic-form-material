import { Component } from '@angular/core';

import { DynamicFormComponentStatus, DynamicFormComponentValue } from '@elemental-concept/dynamic-form';
import { materialComponentMap } from '@elemental-concept/dynamic-form-material';

import { materialConfig, materialValue } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  materialConfig = materialConfig;
  materialValue = materialValue;
  materialComponentMap = materialComponentMap;
  materialStatus: string;
  materialFormValue = {};

  onMaterialChanges = (data: DynamicFormComponentStatus) => this.materialStatus = data.status;

  onMaterialValueChanges = (data: DynamicFormComponentValue) => this.materialFormValue = data.value;
}
