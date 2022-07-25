import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
})
export class GameControlComponent implements OnInit {
  game: {
    started: boolean;
    paused: boolean;
    timeref: number;
    counter: number;
  } = { started: false, paused: false, timeref: NaN, counter: 0 };
  @Output() counterEvent = new EventEmitter<number>();
  @Output() resetEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.game.started = true;
    this.game.paused = false;
    this.game.timeref = setInterval(
      (() => {
        this.game.counter += Math.floor(Math.random() * 10) + 1;
        this.counterEvent.emit(this.game.counter);
      }) as TimerHandler,
      1000
    );
  }

  onPause() {
    clearInterval(this.game.timeref);
    this.game.paused = true;
  }

  onStop() {
    clearInterval(this.game.timeref);
    this.game = { started: false, paused: false, timeref: NaN, counter: 0 };
    this.resetEvent.emit();
  }
}
