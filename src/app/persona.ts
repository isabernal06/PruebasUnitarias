import { stringify } from 'querystring';

export class Persona {

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public weight: number,
    public height: number,
  ) { }

  calcIMC() {
    const resultado = Math.round((this.weight) / ((this.height) * (this.height)));
    if (resultado < 0) {
      return 'no found';
    } else if (resultado >= 0 && resultado <= 17) {
      return 'down';
    } else if (resultado >= 18 && resultado <= 24) {
      return 'normal';
    } else if (resultado >= 25 && resultado <= 26) {
      return 'overweight';
    } else if (resultado >= 26 && resultado <= 29) {
      return 'overweight level 1';
    } else if (resultado >= 29 && resultado <= 39) {
      return 'overweight level 2';
    } else if (resultado >= 40) {
      return 'overweight level 3';
    }
  }

}
