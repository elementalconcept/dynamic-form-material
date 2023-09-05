# Material Components For Dynamic Form

**MatSelectModule import in AppModule!**

This is a set of wrappers for Material input components for
[Dynamic Form](https://github.com/elementalconcept/dynamic-form/) library. Angular
v11+ and Material For Angular v11+ is required. Provided input types are:

- `checkbox`
- `simpleDatepicker`
- `email`
- `multiselect`
- `number`
- `password`
- `radio`
- `select`
- `string`
- `tel`
- `text`
- `url`
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
@NgModule({
  imports: [
    DynamicFormModule,
    DynamicFormMaterialModule
  ]
})
class FormPageModule {
}
```

If you are planning to use datepickers, then you'll need to add more configs into the providers

```typescript
@NgModule({
  imports: [
    MatSelectModule
  ],
  providers: [
    ...

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
