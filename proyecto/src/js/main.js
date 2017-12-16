var Main = Main || {};

Main = {
  preload: function() {
    YoungMan.load.image('background', 'images/background.jpg');
    YoungMan.load.image('mainCharacter', 'images/Megaman.png');
    //YoungMan.load.tilemap('tilemap', 'images/tilemap.json', null, Phaser.Tilemap.TILED_JSOM);
    //YoungMan.load.image('patron1Tilemap', 'images/52547184-muro-de-piedra-textura-de-fondo-Foto-de-archivo');
    //YoungMan.load.image('patron2Tilemap', 'images/New Piskel.png')
  },

  create: function() {
    background = YoungMan.add.sprite(0, -10, 'background');
    mainCharacter = YoungMan.add.sprite(YoungMan.world.centerX, 410, 'mainCharacter');
    YoungMan.physics.startSystem(Phaser.Physics.ARCADE);
    YoungMan.physics.arcade.enable('mainCharacter');
    //map = YoungMan.add.tilemap('tilemap');
    //map.addTilesetImage("patron1", "patron1Tilemap");
    //map.addTilesetImage("patron2", "patron2Tilemap");
  },

  update: function() {
    if (YoungMan.input.keyboard.isDown(39))
        YoungMan.physics.arcade.moveToXY(mainCharacter, 700, mainCharacter.position.y, 200);
    else if (YoungMan.input.keyboard.isDown(37))
        YoungMan.physics.arcade.moveToXY(mainCharacter, 30, mainCharacter.position.y, 200);
  }
};
