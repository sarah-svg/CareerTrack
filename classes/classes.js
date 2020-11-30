// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class creation', () => {
    it('is as simple as `class XXX {}`', function() {
      // let TestClass; changed let to a class and added the curly braces
        class TestClass {}
      const instance = new TestClass();
      assert.equal(typeof instance, 'object');
    });
    it('a class is block scoped', () => {
      // class Inside {} did not need this line
      {class Inside {}}
      assert.equal(typeof Inside, 'undefined');
    });
    
    ////added this.id = id inside the brackets on line 22
    it('the `constructor` is a special method', function() {
      class User {
        constructor(id) {
        this.id = id;
      }
    }
      const user = new User(42);
      assert.equal(user.id, 42);
    });
    
    /////added writesTests(){ return false;} inside the class User
    it('defining a method by writing it inside the class body', function() {
      class User {
              writesTests() {
          return false;
        }
      }
      const notATester = new User();
      assert.equal(notATester.writesTests(), false);
    });
    //////////added a return for false on isLazy cause user didnt not write a test using !
    it('multiple methods need no commas (opposed to object notation)', function() {
      class User {
        wroteATest() { this.everWroteATest = true; }
        isLazy() { return !this.everWroteATest }
      }
      const tester = new User();
      assert.equal(tester.isLazy(), true);
      tester.wroteATest();
      assert.equal(tester.isLazy(), false);
    });
    ////added the clss onn line 52
    it('anonymous class', () => {
      const classType = typeof class {};
      assert.equal(classType, 'function');
    });
  });