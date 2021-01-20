import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {
  it('Debe retornar true', () => {
    const resp = usuarioIngresado();
    // expect(resp).toBe(true);
    // expect(resp).not.toBeFalsy();
    expect(resp).toBeTruthy();
  });
});
