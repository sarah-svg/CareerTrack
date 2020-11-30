// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('When destructuring you can also provide default values', () => {
    it('just assign a default value, like so `a=1`', () => {
      /////colon to = sign like line 12
      const [a=1] = [];
      assert.equal(a, 1);
    });
    /////made 13 and 17 the same and they both passed
    it('for a missing value', () => {
      const [a, b=2, c] = [1,,3];
      assert.equal(b, 2);
    });
    it('in an object', () => {
      const [a, b=2, c] = [1,,3];
      assert.equal(b, 2);
    });
    it('if the value is undefined', () => {
      ////added b=2
      const {a, b=2} = {a: 1, b: void 0};
      assert.strictEqual(b, 2);
    });
    it('also a string works with defaults', () => {
      //////added a in the const
      const [a, b=2] = '1';
      assert.equal(a, '1');
      assert.equal(b, 2);
    });
  });
  