// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!
///4 out of 1
describe('Classes can inherit from another using `extends`', () => {
    describe('the default super class is `Object`', () => {
      it('a `class A` is an instance of `Object`', () => {
        class A {}
        /////change line 8 from let to class and added brackets
        assert.equal(new A() instanceof Object, true);
      });
      it('when B extends A, B is also instance of `Object`', () => {
        class A {}
        //////add in line 15 after B extends A
        class B extends A {}
        assert.equal(new B() instanceof A, true);
        assert.equal(new B() instanceof Object, true);
      });
      
  
    it('class can extend `null`, not an instance of Object', () => {
        class NullClass extends null {}
        
        let nullInstance = new NullClass();
        assert.equal(nullInstance instanceof Object, false);
      });
      
    });
    
    
    describe('instance of', () => {
      it('when B inherits from A, `new B()` is also an instance of A', () => {
        class A {}
        //////changed line 30 from let A; to class A {}
        class B extends A {}
        assert.equal(new B() instanceof A, true);
      });
      it('extend over multiple levels', () => {
        class A {}
        //////////added line 38 which created a class
        class B extends A{}
        class C extends B {}
        assert.equal(new C() instanceof A, true);
      });
    });
  });