const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);

function preload() {
  this.load.image('tile', '/static/assets/tile.png');
}

function create() {
  this.add.text(300, 50, 'Level 1: Memory', { fontSize: '24px', fill: '#fff' });
  this.tiles = [];
  for (let i = 0; i < 4; i++) {
    let tile = this.add.sprite(150 + i * 100, 300, 'tile').setInteractive();
    tile.on('pointerdown', () => console.log(`Tile ${i} clicked`));
    this.tiles.push(tile);
  }
}

function update() {}
