import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, UntypedFormGroup } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { map, startWith } from 'rxjs/operators';

import { DynamicFormElement, DynamicFormPassThroughControl } from '@elemental-concept/dynamic-form';

import { TranslationFactory } from '../../factories';

import { inputModeMap, MaterialInputMeta } from '../../types';

@UntilDestroy()
@Directive()
export class CommonInputDirective implements DynamicFormPassThroughControl<MaterialInputMeta, any> {
  readonly type = 'passthrough';

  formGroup: UntypedFormGroup;

  config: DynamicFormElement<MaterialInputMeta, any>;

  visible = true;

  inputMode = 'text';

  inputType = 'text';

  required = false;

  errors: string[] = [];

  textTransformer?: (message: string) => string;

  protected control!: AbstractControl;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  set dynamicFormElement(element: DynamicFormElement<MaterialInputMeta, any>) {
    this.config = { ...element };

    this.renderer.addClass(this.elementRef.nativeElement, `df-form-field-${element.id}`);

    if (this.config.errors === undefined) {
      this.config.errors = {};
    }

    if (this.config.type in inputModeMap) {
      this.inputMode = inputModeMap[this.config.type];
    }

    this.inputType = this.config.type === 'password' ? 'password' : 'text';

    this.required = element.validators instanceof Array
      ? element.validators.find(validator => validator.type === 'required' || validator.type === 'requiredTrue')
        !== undefined
      : false;
  }

  set formControl(control: AbstractControl) {
    this.control = control;

    this.control.statusChanges
      .pipe(
        startWith(this.control.status),
        untilDestroyed(this),
        map(status =>
          status === 'INVALID' && !this.control.pristine
            ? Object.keys(this.control.errors ?? [])
            : []
        )
      )
      .subscribe(errors => this.errors = errors);
  }

  showControl = () => {
    this.visible = true;

    if (this.config?.meta?.disableOnHide) {
      // this to prevent infinite loop on status change
      if (this.control.disabled) {
        this.control.enable({ emitEvent: false, onlySelf: false });
      }
    }
  };

  hideControl = () => {
    this.visible = false;

    if (this.config?.meta?.disableOnHide) {
      // this to prevent infinite loop on status change
      if (this.control.enabled) {
        this.control.disable({ emitEvent: false, onlySelf: false });
      }
    }
  };

  transform = (key: string | undefined): string => TranslationFactory.textTransformer(key, this.textTransformer);
}
