import { Jugador } from './clases';

describe('Pruebas de clase', () => {
  let jugador = new Jugador();

  beforeAll(() => {
    //   console.log("beforeAll")
  });
  beforeEach(() => {
    //   console.log("beforeEach")
    // jugador.hp = 100;
    jugador = new Jugador();
  });
  afterAll(() => {
    //   console.log("afterAll")
  });
  afterEach(() => {
    //   console.log("afterEach")
  });
  it('Debe retornar 80 de hp si recibe 20 de danho', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanho(20);
    expect(resp).toBe(80);
  });
  it('Debe retornar 50 de hp si recibe 50 de danho', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanho(50);
    expect(resp).toBe(50);
  });
  it('Debe retornar 0 de hp si recibe 100 de danho o mas', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanho(100);
    expect(resp).toBe(0);
  });
});
