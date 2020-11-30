////////basics

// 9: object-literals - basics



/////////passed looked at syntax changed the x on line 8 to a y
describe('The object literal allows for new shorthands', () => {
    const x = 1;
    const y = 2;
    describe('with variables', () => {
      it('the short version for `{x: x}` is {x}', () => {
        const short = {y};
        // const short = {x};
        assert.deepEqual(short, {y: y});
      });
//////////z was not defined
it('works with multiple variables too', () => {
    const short = {x, y};
    assert.deepEqual(short,  {x, y});
    // assert.deepEqual(short,  {x, y:z});
  });
});
    })

////////short was calling the wrong variable
describe('with methods', () => {
    const func = () => func;
    it('using the name only uses it as key', () => {
      const short = {func:func};
    //   const short = {func:func};
      assert.deepEqual(short, {func: func});
    });
///////forgot to call otherKey with const short
    it('a different key must be given explicitly, just like before ES6', () => {
        const short = {otherKey: func};
        ////const short = {func};
        assert.deepEqual(short, {otherKey: func});
      });
       //////////////assert line syntax was wrote wrong
      it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
        const short = {
          inlineFunc(){
            return 'I am inline';
          }
        };
        // assert.deepEqual(short.inlineFunc(), 'I am inline');
        assert.deepEqual(short, {inlineFunc: 'I am inline'});
      });
    });

/////////////////////////////////////////////////
// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Object literal properties may be computed values', () => {
    it('a computed property `x` needs to be surrounded by `[]`', () => {
      const propertyName = 'x';
      const obj = {[propertyName]: 1};
          // const obj = {propertyName: 1};
          ////added brackets to propertyName
      assert.equal(obj.x, 1);
    });
    it('can also get a function assigned', () => {
      const key = 'func';
      // const obj = {[key]: 'seven'};///forgot to return
      const obj = {[key]() { return 'seven'}};
      assert.equal(obj.func(), 'seven');
    });
    
  
     it('the key may also be the result of a function call', () => {
      const getName = () => 'propertyName';
    // //   const obj = {[getName]() {return 'seven'}};//forgot brackets to close out the function call
       const obj = {[[getName()]]() {return 'seven'}};
       assert.equal(obj.propertyName(), 'seven');
     });
    
    
  
      it('the key can also be constructed by an expression', () => {
      const what = 'Name';
      // const what = 'Key'; changed to Name
      const obj = {['property' + what]: null};
        // assert('propertyName' in obj); called true int the assert
      assert.equal('propertyName' in obj, true);
    });
    
    
    it('accessor keys can be computed names too', () => {
      const obj = {
        get ['key']() {return 1},
        // set ['key'](_) {return 1},
        /////syntax error along with needed to use a get function
      };
      assert.equal(obj.key, 1);
    });
  });