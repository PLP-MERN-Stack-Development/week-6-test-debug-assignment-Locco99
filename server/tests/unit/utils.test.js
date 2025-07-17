const { add } = require('../../src/utils');

describe('add utility', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
}); 