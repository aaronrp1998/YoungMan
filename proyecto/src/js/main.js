var Main = Main || {};

Main = {
  function preload() {
    game.load.baseURL = 'https://aaronrp1998.github.io/YoungMan/proyecto/src/'
    game.load.crossOrigin = 'anonymus';
    game.load.image('background', 'images/background.jpg');
    game.load.image('mainCharacter', 'images/Megaman.png');
    game.load.tilemap('tilemap', 'images/tilemap.json', null, Phaser.Tilemap.TILED_JSOM);
    game.load.image('patron1Tilemap', 'images/52547184-muro-de-piedra-textura-de-fondo-Foto-de-archivo');
    game.load.image('patron2Tilemap', 'images/New Piskel.png')
  }

  function create() {

    //  To make the sprite move we need to enable Arcade Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.sprite(0, -10, 'background');
    mainCharacter = game.add.sprite(game.world.centerX, 410, 'mainCharacter');
    map = game.add.tilemap('tilemap');
    map.addTilesetImage("patron1", "patron1Tilemap");
    map.addTilesetImage("patron2", "patron2Tilemap");
    //  And enable the Sprite to have a physics body:
    game.physics.arcade.enable(mainCharacter);

  }

  function update () {

    if (game.input.keyboard.isDown(39))
    {
        game.physics.arcade.moveToXY(mainCharacter, 700, mainCharacter.position.y, 200);
    }
    else if (game.input.keyboard.isDown(37))
    {
        game.physics.arcade.moveToXY(mainCharacter, 30, mainCharacter.position.y, 200);
    }

  }

  function render () {

	  game.debug.inputInfo(32, 32);

  }
}
