import { NumberValueAccessor } from '@angular/forms';

export class Jugador {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  recibeDanho(danho: number) {
    if (danho >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danho;
    }
    return this.hp;
  }
}
