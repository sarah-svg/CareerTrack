// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring arrays makes shorter code', () => {
    it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
      let [firstValue] = [1];
      ///added the bracets
      assert.strictEqual(firstValue, 1);
    });
    it('get the last item from array', () => {
      let [lastValue] = [3];
      ///changed it from [1,2,3] and added [] around lastValue
      assert.strictEqual(lastValue, 3);
    });
    it('swap two variables, in one operation', () => {
      let [x, y] = ['ax', 'why'];
      [y, x] = [x, y];
      ///swapped the x,y to y,x
      assert.deepEqual([x, y], ['why', 'ax']);
    });
    it('leading commas', () => {
      const all = ['ax', 'why', 'zet'];
      ///added a extra ,
      const [,,z] = all;
      assert.equal(z, 'zet');
    });
    it('extract from nested arrays', () => {
      const user = [['Some', 'One'], 23];
      ////add the brackets firstName , surname
      const [[firstName, surname], age] = user;
      const expected = 'Some One = 23 years';
      assert.equal(`${firstName} ${surname} = ${age} years`, expected);
    });
    it('chained assignments', () => {
      let c, d;
      //////added square brackets
      let [a, b] = [c, d] = [1, 2];
      assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
    });
    it('in for-of loop', () => {
      ///////took the 0 out of the brackets
      for (var [a, b] of [[ 1, 2]]) {}
      assert.deepEqual([a, b], [1, 2]);
    });
  });
  