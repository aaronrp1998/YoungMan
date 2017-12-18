var Main = Main || {};
Main = {
  preload: function() {
    YoungMan.load.image('mainCharacter', 'images/Megaman.png');
    YoungMan.load.tilemap('tilemap', 'images/super_mario.json', null, Phaser.Tilemap.TILED_JSOM);
    YoungMan.load.image('tileset', 'images/super_mario.json');
  },


  create: function() {
    YoungMan.stage.backgroundColor= '#00CC00';
    mainCharacter = YoungMan.add.sprite(YoungMan.world.centerX, 410, 'mainCharacter');
    YoungMan.physics.startSystem(Phaser.Physics.ARCADE);
    YoungMan.physics.arcade.enable(mainCharacter);
    map = YoungMan.add.tilemap('tilemap');
    map.addTilesetImage("tileset", "tilemap");
    layer = map.createLayer(0);
    layer.resizeWorld
  },

  update: function() {
    if (YoungMan.input.keyboard.isDown(39))
        YoungMan.physics.arcade.moveToXY(mainCharacter, 700, mainCharacter.position.y, 200);
    else if (YoungMan.input.keyboard.isDown(37))
        YoungMan.physics.arcade.moveToXY(mainCharacter, 30, mainCharacter.position.y, 200);
  }
};
