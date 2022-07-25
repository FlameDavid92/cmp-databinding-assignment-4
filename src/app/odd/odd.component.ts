import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: '<p>ODD - {{ num }}</p>',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent {
  @Input('number') num: number;
}
