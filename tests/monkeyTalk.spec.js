const challenges = require('../src/challenges');

describe('MonkeyTalk', () => {
  it('Ao receber uma frase a função deve transformar as palavras da frase em Ook ou em Eek e então retorna a frase com as palavras substituídas.', () => {
    expect(challenges.monkeyTalk('Hello World at Trybe')).toEqual('Ook ook eek ook.');
    expect(challenges.monkeyTalk('I monkey')).toEqual('Eek ook.');
    expect(challenges.monkeyTalk('go Trybe')).toEqual('Ook ook.');
    expect(challenges.monkeyTalk('Xablau')).toEqual('Ook.');
    expect(challenges.monkeyTalk('Foguete não tem ré')).toEqual('Ook ook ook ook.');
    expect(challenges.monkeyTalk('Que a força esteja com você')).toEqual('Ook eek ook eek ook ook.');
  });
});
