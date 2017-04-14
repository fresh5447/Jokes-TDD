// chai expect http://chaijs.com/api/bdd/
// jokes api http://api.icndb.com/jokes/random/100
var chai = require('chai');
var expect = require('chai').expect;
var Mather = require('../mather');
var colors = require('colors');

xdescribe('/Basic Math Tester'.zebra.magenta, function(){

  var m = new Mather();

  it('The constructor has been imported'.green, function(){
    expect(m).to.not.be.undefined
  })

  it('sum method can add 2 + 2'.green, function(){
    expect(m.sum(2,2)).to.be.eql(4)
  })

  it('sum method can add 4 + 2'.green, function(){
    expect(m.sum(4,2)).to.be.eql(6)
  })

  it('multiply 4 * 4 returns 16'.green, function(){
    expect(m.multiply(4,4)).to.be.eql(16)
  })

  it('will get sum of two numbers, then square them!'.green, function(){
    expect(m.square(4,4)).to.be.eql(64)
  })

});
