import { obtenerRobots } from './arreglos';

describe('Prueba de arreglos', () => {
  it('Debe regresar almenos 3 robots', () => {
    const resp = obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });
  it('Debe de existir Megaman y Ultron', () => {
    const resp = obtenerRobots();
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });
});
