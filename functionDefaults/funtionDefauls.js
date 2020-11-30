// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Default parameters make function parameters more flexible', () => {
    it('define it using an assignment to the parameter `function(param=1){}`', function() {
      ////// added =0
      let aNumber = (int = 0) => int;
      assert.equal(aNumber(), 0);
    });
    it('it is used when `undefined` is passed', function() {
      let aNumber = (int = 23) => int;
      ///changed it to undefined from 42 
      const param = undefined;
      assert.equal(aNumber(param), 23);
    });
    it('it is not used when a value is given', function() {
      /////ADDED METHOD = 'GET'
      function xhr( method = 'GET') {
        return method;  
      }
      assert.equal(xhr('POST'), 'POST');
    });
    it('it is evaluated at run time', function() {
      let defaultValue;
      function xhr(method = `value: ${defaultValue}`) {
        return method;  
      }
      ///added a default value of the 42
      defaultValue = 42;
      assert.equal(xhr(), 'value: 42');
    });
  ('it can also be a function', function() {
    ////called the fuction(){} from 0
      let defaultValue = function(){};
      function fn(value = defaultValue()) {
        return value;  
      }
      assert.equal(fn(), 'defaultValue');
    });
  });