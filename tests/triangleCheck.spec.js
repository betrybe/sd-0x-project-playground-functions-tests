const challenges = require('../src/challenges');

describe('Condição de existência de um triângulo', () => {
  it('Caso a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois retorne false', () => {
    expect(challenges.triangleCheck(16, 9, 2)).toEqual(false);
    expect(challenges.triangleCheck(10, 3, 4)).toEqual(false);
    expect(challenges.triangleCheck(6, 2, 2)).toEqual(false);
  });

  it('Caso a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas retorne false', () => {
    expect(challenges.triangleCheck(10, 13, 2)).toEqual(false);
    expect(challenges.triangleCheck(12, 17, 4)).toEqual(false);
    expect(challenges.triangleCheck(5, 10, 3)).toEqual(false);
  });

  it('Caso a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas retorne true', () => {
    expect(challenges.triangleCheck(10, 14, 8)).toEqual(true);
    expect(challenges.triangleCheck(2, 3, 4)).toEqual(true);
    expect(challenges.triangleCheck(16, 20, 30)).toEqual(true);
  });
});
