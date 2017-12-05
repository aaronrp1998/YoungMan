var Boot = Boot || {};

Boot = {
  preload: function() {
    clicBoton: '',
    YoungMan.load.image('pantallaInicialFondo', 'images/pantallaInicialFondo.jpg');
    YoungMan.load.image('pantallaInicialBotones', 'sprites/pantallaInicialBotones.png');
    YoungMan.load.audio('pantallaInicialMusica', 'audio/pantallaInicialMusica.mp3');
    YoungMan.load.audio('pantallaInicialClic', 'audio/pantallaInicialClic.mp3');
  },
  create: function() {
    YoungMan.add.sprite(0, 0, 'pantallaInicialFondo');
    var musica = YoungMan.add.audio('pantallaInicialMusica');
    musica.play('', 0, 0.5, true);
    this.clicBoton = YoungMan.add.audio('pantallaInicialClic');
    YoungMan.add.button(960, 540, 'pantallaInicialBotones', this.iniciar, this);
  },
  iniciar: function(){
    console.log('Inicia videojuego');
  }
}
