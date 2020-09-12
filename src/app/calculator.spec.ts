import { Calcular } from './calcular';

describe('Test calcular', () => {

  let calcular;

  // Arrange
  beforeEach(() => {
    calcular = new Calcular();
  });

  describe('Test multiplicar', () => {
    it('Debería retornar 9', () => {
      // Act
      const resultado = calcular.multiplicar(3, 3);
      // Assert
      expect(resultado).toEqual(9);
    });

    it('Debería retornar 4', () => {
      // Act
      const resultado = calcular.multiplicar(2, 2);
      // Assert
      expect(resultado).toEqual(4);
    });
  });

  describe('Test dividir', () => {
    it('Debería retornar 6', () => {
      // Act
      const resultado = calcular.divide(12, 2);
      // Assert
      expect(resultado).toEqual(6);
    });

    it('Debería retornar 12', () => {
      // Act y Assert
      expect(calcular.divide(24, 2)).toEqual(12);
    });

    it('Debería retornar null', () => {
      // Act y Assert
      expect(calcular.divide(19, 0)).toBeNull();
    });
  });


  describe('Otras validaciones especiales', () => {
    it('Deberían retornar true', () => {
      const name = 'Isabel';
      let name2;
      expect(name).toBeDefined();
      expect(name2).toBeUndefined();

      expect(1 + 2 === 3).toBeTruthy();
      expect(1 + 1 === 3).toBeFalse();

      expect(5).toBeLessThan(10);
      expect(20).toBeGreaterThan(10);

      expect('12345678').toMatch(/123/);

      expect(['manzana', 'fresa', 'mora', 'uva']).toContain('uva');
    });

  });

});
