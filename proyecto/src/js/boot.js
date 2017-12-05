var Boot = Boot || {};

Boot = {
  preload: function() {
    clicBoton: '',
    YoungMan.load.image('pantallaInicialFondo', 'images/fondoPantallaInicial.jpg');
    YoungMan.load.spritesheet('pantallaInicialBotones', 'sprites/botonesPantallaInicial.png', 201, 71.666666666);
    YoungMan.load.audio('pantallaInicialMusica', audio/pantallaInicialMusica);
    YoungMan.load.audio('pantallaInicialClic', audio/pantallaInicialClic);
  },
  create: function() {
    YoungMan.add.sprite(0, 0, 'pantallaInicialFondo');
    var musica = YoungMan.add.audio('pantallaInicialMusica');
    musica.play('', 0, 0.5, true);
    this.clicBoton = YoungMan.add.audio('pantallaInicialClic');
    YoungMan.add.button(960, 540, 'pantallaInicialBotones', this.iniciar, this, 2, 1, 0);
  },
  iniciar: function(){
    clicBoton.play();
    console.log('Inicia videojuego');
  }
}
