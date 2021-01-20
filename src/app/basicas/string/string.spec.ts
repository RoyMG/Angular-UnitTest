// describe('Pruebas de strings');
// it("Debe regresar un string")

import { mensaje } from './string';

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Rodrigo');

    expect(typeof resp).toBe('string');
  });
  it('Debe de regresar un saludo con el nombre enviado', () => {
    const nombre = 'Rodrigo';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});
