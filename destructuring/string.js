// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      ///added brackets
      let [a, b, c] = 'abc';
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    it('missing characters are undefined', () => {
      ///////////took b out of 'ab' to 'a'
      const [a, c] = 'a';
      assert.equal(c, void 0);
    });
    it('unicode character work too', () => {
      //////////////fixed spacing
      const [space, coffee] = 'a☕';
      assert.equal(coffee, '\u{2615}');
    });
  });
  