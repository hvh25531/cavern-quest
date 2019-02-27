import colors from 'colors.css';

export default {

  key: 'end',

  plugins: [ 'InputPlugin' ],

  create: function () {
    this.add.image(400, 300, 'fire');

    this.add.image(400, 150, 'bomb')
      .setScale(5);

    this.add.text(400, 300, 'Game Over\n\n← menu  ', {
      align: 'center',
      fill: colors.white,
      fontFamily: 'sans-serif',
      fontSize: 48,
      fontWeight: 'bold'
    })
      .setOrigin(0.5, 0);

    this.input.on('pointerdown', function () {
      this.scene
        .sleep('ui')
        .switch('menu');
    }, this);
  }

};
