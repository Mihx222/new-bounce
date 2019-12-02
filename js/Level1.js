Game.Level1 = function(game) {};

var map;
var layer;

var player;
var playerSpawnX = 100;
var playerSpawnY = 800;
var playerVelocityX = 250;
var playerVelocityY = 600;

var controls = {};
var jumpTimer = 0;
var timerDelay = 750;

Game.Level1.prototype = {
    create:function() {
        this.stage.backgroundColor = '#3A5963';
        this.physics.arcade.gravity.y = 1200;

        map = this.add.tilemap('map', 64, 64);
        map.addTilesetImage('tileset', 'tiles');

        layer = map.createLayer('ground');
        layer.resizeWorld();

        map.setCollisionBetween(0, 60);

        // Make it so that the player is reset when the tile with indexes 5 and 19 is touched
        // Note that in Tiled, the indexes start counting from 0, Phaser counts from 1.
        map.setTileIndexCallback(5, this.resetPlayer, this);
        map.setTileIndexCallback(19, this.resetPlayer, this);

        player = this.add.sprite(playerSpawnX, playerSpawnY, 'big_ball');
        player.anchor.setTo(0.5, 0.5);
        // player.animations.add('jump', [2], 1, true);
        this.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        player.body.bounce.setTo(0.4);

        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W)
        };
    },

    update:function() {
        this.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
        this.physics.arcade.collide(player, layer);

        // Player controls
        // Pressing A or D executes a jump. Player only moves with jumps
        // Player is also capable of moving midair
        if (controls.right.isDown
            && (player.body.onFloor() || player.body.touching.down)
            && this.time.now > jumpTimer
        ) {
            player.body.velocity.y = -playerVelocityY;
            player.body.velocity.x = playerVelocityX;
            jumpTimer = this.time.now + timerDelay;
        } else if (controls.right.isDown
            && !(player.body.onFloor() || player.body.touching.down)
        ) {
            player.body.velocity.x = playerVelocityX;
        }
        
        if (controls.left.isDown
            && (player.body.onFloor() || player.body.touching.down)
            && this.time.now > jumpTimer
        ) {
            player.body.velocity.y = -playerVelocityY;
            player.body.velocity.x = -playerVelocityX;
            jumpTimer = this.time.now + timerDelay;
        } else if (controls.left.isDown
            && !(player.body.onFloor() || player.body.touching.down)
        ) {
            player.body.velocity.x = -playerVelocityX;
        }
        
        if (!controls.left.isDown && !controls.right.isDown) {
            player.body.velocity.x = 0;
        }
    },

    resetPlayer:function() {
        this.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);

        // Make the ball smaller and faster
        player.loadTexture('small_ball');
        player.body.setSize(30, 27);
        player.reset(playerSpawnX, playerSpawnY);

        playerVelocityX = 350;
        playerVelocityY = 450;
        timerDelay = 500;
    }
}