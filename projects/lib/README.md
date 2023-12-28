# Material Components For Dynamic Form

**MatSelectModule import in AppModule!**

This is a set of wrappers for Material input components for
[Dynamic Form](https://github.com/elementalconcept/dynamic-form/) library. Angular
v13+ and Material For Angular v13+ is required. Provided input types are:

- `string`
- `number`
- `email`
- `tel`
- `url`
- `password`
- `select`
- `multiselect`
- `text`
- `checkbox`
- `radio`
- `_description_`

## Installation

Install the library through NPM:

```shell
$ npm i @elemental-concept/dynamic-form-material
```

Add `MatSelectModule` import and provider `DYNAMIC_FORM_COMPONENT_MAP` to your `AppModule`, then
add `DynamicFormMaterialModule` to your page modules.

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { DYNAMIC_FORM_COMPONENT_MAP } from '@elemental-concept/dynamic-form';
import { materialComponentMap } from '@elemental-concept/dynamic-form-material';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    MatSelectModule
  ],
  providers: [
    { provide: DYNAMIC_FORM_COMPONENT_MAP, useValue: materialComponentMap }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

```typescript
// form-page.module.ts
import { DynamicFormModule } from '@elemental-concept/dynamic-form';
import { DynamicFormMaterialModule } from '@elemental-concept/dynamic-form-material';

@NgModule({
  imports: [
    DynamicFormModule,
    DynamicFormMaterialModule
  ]
})
class FormPageModule {
}
```

## Available Meta Options

These options are based on Material library options, please refer
to [Material documentation](https://material.angular.io/components/categories) for more details.

```typescript
interface MaterialInputMeta {
  appearance?: MatFormFieldAppearance;
  floatLabel?: FloatLabelType;
  hintLabel?: string;
  labelPosition?: 'after' | 'before';
  cssClass?: string;
  color?: ThemePalette;
  suffix?: SuffixMeta;
  htmlDescription?: string;
  hideRequiredMarker?: boolean;
}

interface SuffixMeta {
  type: SuffixType;
}

enum SuffixType {
  label = 'label',
  password = 'password'
}
```
