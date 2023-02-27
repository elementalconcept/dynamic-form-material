import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgxDynamicFormModule } from '@elemental-concept/ngx-dynamic-form';

import { RadioInputComponent } from './radio-input.component';

describe('RadioInputComponent', () => {
  let component: RadioInputComponent;
  let fixture: ComponentFixture<RadioInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioInputComponent ],
      imports: [
        NgxDynamicFormModule
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioInputComponent);
    component = fixture.componentInstance;
    component.config = {
      id: 'radio',
      label: 'radio',
      type: 'radio'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
