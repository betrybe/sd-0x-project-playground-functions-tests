const challenges = require('../src/challenges');

describe('Codifique e Decodifique', () => {
  it('Ao receber uma string a função encode deve codificá-la', () => {
    expect(challenges.encode('hello').toEqual('h2ll4'));
    expect(challenges.encode('How are you today?').toEqual('H4w 1r2 y45 t4d1y?'));
    expect(challenges.encode('This is an encoding test.').toEqual('Th3s 3s 1n 2nc4d3ng t2st.'));
    expect(challenges.encode('go Trybe!').toEqual('g4 Tryb2!'));
  });

  it('Ao receber uma string codificada a função decode deve decodigicá-la', () => {
    expect(challenges.decode('h2ll4').toEqual('hello'));
    expect(challenges.decode('H4w 1r2 y45 t4d1y?').toEqual('How are you today?'));
    expect(challenges.decode('Th3s 3s 1n 2nc4d3ng t2st.').toEqual('This is an encoding test.'));
    expect(challenges.decode('g4 Tryb2!').toEqual('go Trybe!'));
  });
});
