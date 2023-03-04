import { Component } from '@angular/core';

import { CommonInputDirective } from '../../directives';

@Component({
  selector: 'df-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent extends CommonInputDirective {
}
