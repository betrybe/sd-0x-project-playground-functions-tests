const { fizzBuzz } = require('../src/challenges');

describe('FizzBuzz', () => {
  it("caso o parâmetro seja [2, 15, 7, 9, 45], o retorno deve ser ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']", () => {
    expect(fizzBuzz([2, 15, 7, 9, 45])).toBe(['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']);
  });
  it("caso o parâmetro seja [7, 9], o retorno deve ser ['bug!', 'fizz']", () => {
    expect(fizzBuzz([7, 9])).toBe(['bug!', 'fizz']);
  });
  it("caso o parâmetro seja [9, 25], o retorno deve ser ['fizz', 'buzz']", () => {
    expect(fizzBuzz([9, 25])).toBe(['fizz', 'buzz']);
  });
});
