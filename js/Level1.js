Game.Level1 = function(game) {};

var map;
var layer;

var player;
var controls = {};
var playerSpeed = 250;
var jumpTimer = 0;

Game.Level1.prototype = {
    create:function() {
        this.stage.backgroundColor = '#3A5963';
        this.physics.arcade.gravity.y = 1200;

        map = this.add.tilemap('map', 64, 64);
        map.addTilesetImage('tileset', 'tiles');

        layer = map.createLayer('ground');
        layer.resizeWorld();

        map.setCollisionBetween(0, 60);

        player = this.add.sprite(100, 460, 'big_ball');
        player.anchor.setTo(0.5, 0.5);
        // player.animations.add('idle', [0, 1], 1, true);
        // player.animations.add('jump', [2], 1, true);
        // player.animations.add('run', [3, 4, 5, 6, 7, 8], 7, true);
        this.physics.arcade.enable(player);
        this.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
        player.body.collideWorldBounds = true;

        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W)
        };
    },

    update:function() {
        this.physics.arcade.collide(player, layer);

        if (controls.right.isDown &&
            (player.body.onFloor() || player.body.touching.down) &&
            this.time.now > jumpTimer) {
                player.body.velocity.y = -600;
                player.body.velocity.x = playerSpeed;
                jumpTimer = this.time.now + 750;
        } else if (controls.left.isDown &&
            (player.body.onFloor() || player.body.touching.down) &&
            this.time.now > jumpTimer) {
                player.body.velocity.y = -600;
                player.body.velocity.x = -playerSpeed;
                jumpTimer = this.time.now + 750;
        } else if (!controls.left.isDown && !controls.right.isDown) {
            player.body.velocity.x = 0;
        }
    }
}