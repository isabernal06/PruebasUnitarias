import { Component } from '@angular/core';
import { Calcular } from './calcular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PruebasUnitarias';

  ngOnInit() {
    // const calcular = new Calcular();
    // const resultado = calcular.multiplicar(3, 3);
    // console.log(resultado === 9);
    // console.log(resultado !== 12);

    // const resultado2 = calcular.divide(6, 2);
    // console.log(resultado2 === 3);
    // console.log(resultado2 !== 34);

    // const resultado3 = calcular.divide(6, 0); //Refactorizar
    // console.log(resultado3 === null);

  }

}
