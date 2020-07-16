const challenges = require('../src/challenges');

describe('Analisando as datas', () => {
  it('Se não possível, em nenhuma ordem, formar uma data, deve-se retornar "números inválidos"', () => {
    expect(challenges.dateCheck(13, 24, 42)).toEqual('números inválidos');
    expect(challenges.dateCheck(45, 64, 21)).toEqual('números inválidos');
    expect(challenges.dateCheck(13, 14, 51)).toEqual('números inválidos');
  });

  it('Se os valores passados formarem diversas datas, deve-se retornar a string "múltiplas datas"', () => {
    expect(challenges.dateCheck(10, 12, 99)).toEqual('múltiplas datas');
    expect(challenges.dateCheck(5, 8, 20)).toEqual('múltiplas datas');
    expect(challenges.dateCheck(12, 6, 10)).toEqual('múltiplas datas');
  });

  it('Se os números podem formar apenas uma data, deve-se retornar uma string no formato "DD/MM/AA"', () => {
    expect(challenges.dateCheck(65, 12, 30)).toEqual('30/12/65');
    expect(challenges.dateCheck(39, 24, 7)).toEqual('24/7/39A');
    expect(challenges.dateCheck(6, 13, 81)).toEqual('13/6/81');
  });
});
