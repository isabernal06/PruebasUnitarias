import { Persona } from './persona';

describe('Calculo de indice de masa corporal (IMC)', () => {

  let persona;

  beforeEach(() => {
    persona = new Persona(
      'Isabel',
      'Bernal',
      23,
      40,
      1.65
    );
  });

  describe('Data del testing', () => {
    it('Atributos', () => {
      expect(persona.name).toEqual('Isabel');
      expect(persona.lastName).toEqual('Bernal');
      expect(persona.age).toEqual(23);
      expect(persona.weight).toEqual(40);
      expect(persona.height).toEqual(1.65);
    });
  });

  describe('Indice de masa corporal', () => {
    it('Debería retornar Down', () => {
      persona.weight = 40;
      expect(persona.calcIMC()).toEqual('down');
    });

    it('Debería retornar Normal', () => {
      persona.weight = 58;
      expect(persona.calcIMC()).toEqual('normal');
    });

    it('Debería retornar Overweight', () => {
      persona.weight = 68;
      expect(persona.calcIMC()).toEqual('overweight');
    });

    it('Debería retornar Overweight level 1', () => {
      persona.weight = 75;
      expect(persona.calcIMC()).toEqual('overweight level 1');
    });

    it('Debería retornar Overweight level 2', () => {
      persona.weight = 90;
      expect(persona.calcIMC()).toEqual('overweight level 2');
    });

    it('Debería retornar Overweight level 3', () => {
      persona.weight = 120;
      expect(persona.calcIMC()).toEqual('overweight level 3');
    });

    it('Debería retornar: no found', () => {
      persona.weight = -48;
      expect(persona.calcIMC()).toEqual('no found');
    });
  });




});
