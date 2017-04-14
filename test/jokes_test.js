// chai expect http://chaijs.com/api/bdd/
// jokes api http://api.icndb.com/jokes/random/100
var chai = require('chai');
var expect = require('chai').expect;
var Joker = require('../jokes');
var colors = require('colors');

describe('/Joker constructor'.zebra.magenta, function(){

  var j = new Joker();

  it('joker constructor exists'.green, function(){
    expect(j).to.not.be.undefined
  })

  xit('joker all returns an array'.green, function(){
    expect(j.all()).to.be.a('array');
  })

  xit('item in array should have property joke'.green, function(){
    expect(j.all()[0]).to.have.property('joke');
  })

  xit('item in array should not have property categories'.green, function(){
    expect(j.all()[0]).to.not.have.property('categories');
  })

  xit('can get random joke'.green, function(){
    expect(j.random().length).to.be.at.least(0);
  })

  xit('random joke is a string'.green, function(){
    expect(j.random()).to.be.a('string');
  })

  xit('can get joke by id'.green, function(){
    expect(j.getJoke(378)).to.have.property('joke').to.equal('There are no such things as tornados. Chuck Norris just hates trailer parks.');
  })

  xit('get another joke by id'.green, function(){
    expect(j.getJoke(350)).to.have.property('joke').to.equal('Chuck Norris starts everyday with a protein shake made from Carnation Instant Breakfast, one dozen eggs, pure Colombian cocaine, and rattlesnake venom. He injects it directly into his neck with a syringe.');
  })

});
