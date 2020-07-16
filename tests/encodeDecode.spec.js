const challenges = require('../src/challenges');

describe('Codifique e Decodifique', () => {
  it('Caso delta seja negativo, retorne a string "não existem resultados reais para essa equação"', () => {
    expect(challenges.encode('hello').toEqual('h2ll4'));
    expect(challenges.encode('How are you today?').toEqual('H4w 1r2 y45 t4d1y?'));
    expect(challenges.encode('This is an encoding test.').toEqual('Th3s 3s 1n 2nc4d3ng t2st.'));
    expect(challenges.encode('go Trybe!').toEqual('g4 Tryb2'));
  });

  it('Caso delta seja igual a 0, retorne somente um resultado', () => {
    expect(challenges.decode('h2ll4').toEqual('hello'));
    expect(challenges.encode('H4w 1r2 y45 t4d1y?').toEqual('How are you today?'));
    expect(challenges.encode('Th3s 3s 1n 2nc4d3ng t2st.').toEqual('This is an encoding test.'));
    expect(challenges.encode('g4 Tryb2').toEqual('go Trybe!'));
  });
});
