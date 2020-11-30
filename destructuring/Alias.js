// 15: destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Assign object property values to new variables while destructuring', () => {
    describe('for simple objects', function() {
      it('use a colon after the property name, like so `propertyName: newName`', () => {
        
        ///had newname changed it to y
        const {x: y} = {x: 1};
        assert.equal(y, 1);
      });
      it('assign a new name and give it a default value using `= <default value>`', () => {
        //had y=2 when calling y =42
        const {x: y=42} = {y: 23};
        assert.equal(y, 42);
      });
    });
    describe('for function parameter names', function() {
      it('do it the same way, with a colon behind it', () => {
        ///////changed from x to x: y
        const fn = ({x: y}) => {
          assert.equal(y, 1);
        };
        fn({x: 1});
      });
      it('giving it a default value is possible too, like above', () => {
        /////// changed the z to a y in line 29
        const fn = ({x: y=3}) => {
          assert.equal(y, 3);
        };
        fn({});
      });
    });
  });
  