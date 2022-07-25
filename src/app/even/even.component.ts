import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  template: '<p>EVEN - {{ num }}</p>',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent {
  @Input('number') num: number;
}
