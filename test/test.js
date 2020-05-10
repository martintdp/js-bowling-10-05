var assert = require('assert');
var Game = require('../src/Game.js');

describe('Game', function() {
  describe('Creates an instance', function() {
    it('Instantiates', function() {
      let bowlingGame = new Game();
      assert.ok(bowlingGame instanceof Game);
    });
  });
});

