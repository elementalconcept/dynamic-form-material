import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormModule } from '@elemental-concept/dynamic-form';

import { DatepickerInputComponent } from './datepicker-input.component';

describe('RadioInputComponent', () => {
  let component: DatepickerInputComponent;
  let fixture: ComponentFixture<DatepickerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerInputComponent],
      imports: [
        DynamicFormModule
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerInputComponent);
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
