'use strict';

var PlayScene = {
  create: function () {
    var background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
    background.anchor.setTo(0.5, 0.5);
    var mainCharacter = this.game.add.sprite(this.game.world.centerX, 400, 'mainCharacter');
    
  }
};

module.exports = PlayScene;
