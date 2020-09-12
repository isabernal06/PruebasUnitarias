export class Calcular {

  multiplicar(numeroA: number, numeroB: number): number {
    return numeroA * numeroB;
  }

  divide(numeroA: number, numeroB: number): number {
    if (numeroB === 0) {  // Refactorización
      return null;
    }
    return numeroA / numeroB;
  }
}
