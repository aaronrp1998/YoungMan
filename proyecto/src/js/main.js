var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('background', 'images/background.png');
    game.load.image('mainCharacter', 'images/megaman.png');
    game.load.image('bala', 'images/bala.png');

}

var sprite;

function create() {

    //  To make the sprite move we need to enable Arcade Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    background = game.add.sprite(0, -10, 'background');
    mainCharacter = game.add.sprite(game.world.centerX, 410, 'mainCharacter');
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
    else if (game.input.keyboard.isDown(87))
    {
        bala = game.add.sprite(mainCharacter.x-60 , mainCharacter.y+4, 'bala');
    } 
    else
    {
      mainCharacter.body.velocity.set(0);
    }

}

function render () {

	game.debug.inputInfo(32, 32);

}