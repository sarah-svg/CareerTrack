// 19: rest - with-destructuring
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Rest parameters with destructuring', () => {
    it('must be last', () => {
      //took out last after ..all
      const [...all] = [1, 2, 3, 4];
      assert.deepEqual(all, [1, 2, 3, 4]);
    });
    it('assign rest of an array to a variable', () => {
      //added the varieble s
      const [s, ...all] = [1, 2, 3, 4];
      assert.deepEqual(all, [2, 3, 4]);
    });
    // the following are actually using `spread` ... oops, to be fixed #TODO
    it('concat differently', () => {
      const theEnd = [3, 4];
      /////took off the [] that as aroung theEnd
      const allInOne = [1, 2, ...theEnd];
      assert.deepEqual(allInOne, [1, 2, 3, 4]);
    });
    it('`apply` made simple, even for constructors', () => {
      const theDate = [2015, 1, 1];
      //////added ... in line 26
      const date = new Date(...theDate);
      assert.deepEqual(date, new Date(2015, 1, 1));
    });
  });