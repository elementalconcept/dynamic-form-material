import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgxDynamicFormModule } from '@elemental-concept/ngx-dynamic-form';

import { SelectInputComponent } from './select-input.component';

describe('SelectInputComponent', () => {
  let component: SelectInputComponent;
  let fixture: ComponentFixture<SelectInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInputComponent ],
      imports: [
        NgxDynamicFormModule
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInputComponent);
    component = fixture.componentInstance;
    component.config = {
      id: 'select',
      label: 'select',
      type: 'select'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
