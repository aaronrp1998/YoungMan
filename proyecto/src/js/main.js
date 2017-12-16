var Main = Main || {};

Main = {
  function preload() {
    YoungMan.load.image('background', 'images/background.jpg');
    YoungMan.load.image('mainCharacter', 'images/Megaman.png');
    YoungMan.load.tilemap('tilemap', 'images/tilemap.json', null, Phaser.Tilemap.TILED_JSOM);
    YoungMan.load.image('patron1Tilemap', 'images/52547184-muro-de-piedra-textura-de-fondo-Foto-de-archivo');
    YoungMan.load.image('patron2Tilemap', 'images/New Piskel.png')
  }

  function create() {

    //  To make the sprite move we need to enable Arcade Physics
    YoungMan.physics.startSystem(Phaser.Physics.ARCADE);

    background = YoungMan.add.sprite(0, -10, 'background');
    mainCharacter = YoungMan.add.sprite(YoungMan.world.centerX, 410, 'mainCharacter');
    map = YoungMan.add.tilemap('tilemap');
    map.addTilesetImage("patron1", "patron1Tilemap");
    map.addTilesetImage("patron2", "patron2Tilemap");
    //  And enable the Sprite to have a physics body:
    YoungMan.physics.arcade.enable(mainCharacter);

  }

  function update () {

    if (YoungMan.input.keyboard.isDown(39))
    {
        YoungMan.physics.arcade.moveToXY(mainCharacter, 700, mainCharacter.position.y, 200);
    }
    else if (YoungMan.input.keyboard.isDown(37))
    {
        YoungMan.physics.arcade.moveToXY(mainCharacter, 30, mainCharacter.position.y, 200);
    }

  }

  function render () {

	  YoungMan.debug.inputInfo(32, 32);

  }
}
