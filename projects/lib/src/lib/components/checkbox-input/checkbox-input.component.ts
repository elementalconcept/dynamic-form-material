import { Component } from '@angular/core';

import { CommonInputDirective } from '../../directives';

@Component({
  selector: 'df-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent extends CommonInputDirective<boolean> {
  openExternalLink = (event: Event) => event.stopPropagation();
}
