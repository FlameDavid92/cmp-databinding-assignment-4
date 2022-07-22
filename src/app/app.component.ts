import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  @ViewChild('oddsDiv', { static: true }) oddsDiv: ElementRef;
  @ViewChild('evensDiv', { static: true }) evensDiv: ElementRef;

  onCounterEvent(num: number) {
    let element;
    if (num % 2 === 0) {
      this.evens.push(num);
      element = this.evensDiv.nativeElement;
    } else {
      this.odds.push(num);
      element = this.oddsDiv.nativeElement;
    }
    element.scrollTop = element.scrollHeight;
  }

  onResetEvent() {
    this.odds = [];
    this.evens = [];
  }
}
