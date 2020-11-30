// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
    it('by surrounding the left-hand variable with `{}`', () => {
      ////////they forgot the curly brackets around x:1
      const {x} = {x: 1};
      assert.equal(x, 1);
    });
    describe('nested', () => {
      it('multiple objects', () => {
        const magic = {first: 23, second: 42};
        ////////changed from square to curly
        const {magic: {second}} = {magic};
        assert.equal(second, 42);
      });
      it('object and array', () => {
        ///forgot the coma
        const {z:[,x]} = {z: [23, 42]};
        assert.equal(x, 42);
      });
      it('array and object', () => {
        ///////had to add []aroung {lang}
        const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
        assert.equal(lang, 'ES6');
      });
    });
    describe('interesting', () => {
      it('missing refs become undefined', () => {
        ///changed the y to the z
        const {z} = {x: 1, y: 2};
        assert.equal(z, void 0);
      });
      it('destructure from builtins (string)', () => {
        ////added '' around 1
        const {substr} = '1';
        assert.equal(substr, String.prototype.substr);
      });
    });})