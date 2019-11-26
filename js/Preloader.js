Game.Preloader = function(game) {
    this.preloadBar = null;
};

Game.Preloader.prototype = {
    preload:function() {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);

        // LOAD ALL ASSETS
        this.load.tilemap('map', 'assets/tilemaps/map.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');

        this.load.spritesheet('small_ball', 'assets/small_ball.png');
        this.load.spritesheet('big_ball', 'assets/big_ball.png');
    },

    create:function() {
        this.state.start('Level1');
    }
}