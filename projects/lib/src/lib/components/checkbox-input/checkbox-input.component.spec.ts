import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgxDynamicFormModule } from '@elemental-concept/ngx-dynamic-form';

import { CheckboxInputComponent } from './checkbox-input.component';

describe('CheckboxInputComponent', () => {
  let component: CheckboxInputComponent;
  let fixture: ComponentFixture<CheckboxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxInputComponent ],
      imports: [
        NgxDynamicFormModule
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxInputComponent);
    component = fixture.componentInstance;
    component.config = {
      id: 'checkout',
      label: 'checkout',
      type: 'checkout'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
