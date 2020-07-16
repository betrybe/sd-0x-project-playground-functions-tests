const challenges = require('../src/challenges');

describe('Equação de segundo grau', () => {
  it('Caso delta seja negativo, retorne a string "não existem resultados reais para essa equação"', () => {
    expect(challenges.quadEquation(2, 3, 4)).toEqual('não existem resultados reais para essa equação');
  });

  it('Caso delta seja igual a 0, retorne somente um resultado', () => {
    expect(challenges.quadEquation(1, -2, 1)).toEqual(1);
  });

  it('Caso delta seja maior que 0, retorne um array com os dois resultados', () => {
    expect(challenges.quadEquation(1, -1, -2)).toEqual([2, -1]);
  });
});
