import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
})
export class GameControlComponent implements OnInit {
  timerRef: number = -1;
  counter: number = 0;
  @Output() counterEvent = new EventEmitter<number>();
  @Output() resetEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.timerRef = setInterval(
      (() => {
        this.counter += Math.floor(Math.random() * 10) + 1;
        this.counterEvent.emit(this.counter);
      }) as TimerHandler,
      1000
    );
  }

  onPause() {
    clearInterval(this.timerRef);
    this.timerRef = 0;
  }

  onStop() {
    clearInterval(this.timerRef);
    this.timerRef = -1;
    this.counter = 0;
    this.resetEvent.emit();
  }
}
