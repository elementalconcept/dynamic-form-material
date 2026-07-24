import { Component } from '@angular/core';

import { CommonInputDirective } from '../../directives';

@Component({
  selector: 'df-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: [ './text-input.component.scss' ],
  standalone: false
})
export class TextInputComponent extends CommonInputDirective {
}
