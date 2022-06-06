const convertTimeToTimerFormat = (minutes: number, seconds: number): string => {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

class TickingDownClock {
  TIMER_SPEED = 1000;
  seconds: number;
  minutes: number;
  isRunning: boolean;
  isEnd = false;

  constructor(seconds: number, minutes: number, isRunning = false) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.isRunning = isRunning;
  }

  update(): [number, number] {
    const myInterval = setInterval(() => {
      if (!this.isRunning){
        clearInterval(myInterval);
        return;
      }
      if (this.seconds > 0) {
        this.seconds = this.seconds - 1;
      } else if (this.seconds === 0) {
        if (this.minutes === 0 || this.isEnd) {
          clearInterval(myInterval);
          return;
        } else {
          this.minutes = this.minutes - 1;
          this.seconds = 59;
        }
      }
    }, this.TIMER_SPEED);

    return [this.minutes, this.seconds];
  }

  start() {
    this.isRunning = true;
    this.isEnd = false;
  }

  pause() {
    this.isRunning = false;
  }

  stop() {
    this.isEnd = true;
    this.isRunning = false;
  }
}

export {
  convertTimeToTimerFormat,
  TickingDownClock
}