

Game.Level1 = function(game) {};

var map;
var layer;
var player;
var playerSpawnX = 100;
var playerSpawnY = 800;
var playerVelocityX = 250;
var playerVelocityY = 600;
var crystals; 
var count = 0;  
var speedPowerUp;
var sizePowerUp;
var endDoor;

var controls = {};
var jumpTimer = 0;
var timerDelay = 750;

Game.Level1.prototype = {
    preload:function(game){
        this.load.spritesheet('star', 'assets/star.png');
        this.load.spritesheet('sizePowerUpStar','assets/sizePowerUpstar.png');
        this.load.spritesheet('speedPowerUpStar','assets/speedPowerUpstar.png');
        this.load.spritesheet('endDoorSprite','assets/endDoor.png');

    },

    create:function(game) {
        this.stage.backgroundColor = '#3A5963';
        this.physics.arcade.gravity.y = 1200;

        // enble colectable stars
        crystals = game.add.group();
        crystals.enableBody = true;
        this.physics.arcade.enable(crystals);

        //enable  speed power ups
       speedPowerUp = game.add.group();
       speedPowerUp.enableBody = true;
       this.physics.arcade.enable(speedPowerUp);

         //enable  speed power ups
        sizePowerUp = game.add.group();
        sizePowerUp.enableBody = true;
        this.physics.arcade.enable(sizePowerUp);

        //enable endPoint
        endDoor = game.add.group();
        endDoor.enableBody = true;
        this.physics.arcade.enable(endDoor);
  

        // Fix for player falling through tiles when moving too fast
        this.game.physics.arcade.TILE_BIAS *= 2;

        this.game.scaleMode = Phaser.ScaleManager.RESIZE;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

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

        map.createFromObjects('crystals',50,'star',0,true,false,crystals);
        map.createFromObjects('speedPowerUp',51,'speedPowerUpStar',0,true,false,speedPowerUp);
        map.createFromObjects('sizePowerUp',53,'sizePowerUpStar',0,true,false,sizePowerUp);
    },

    update:function(game) {
        this.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
        this.physics.arcade.collide(player, layer);
        this.physics.arcade.collide(crystals, layer);
        // make power up colide with the the ground layer
        this.physics.arcade.collide(speedPowerUp, layer);
        this.physics.arcade.collide(sizePowerUp, layer);
        this.physics.arcade.collide(endDoor, layer);

        if(count == 6)  map.createFromObjects('endPoint',90,'endDoorSprite',0,true,false,endDoor);

        // enable phisycs for power ups  and stars srites
        this.physics.arcade.overlap(player, crystals,this.collectCrystal,false,null, this);
        this.physics.arcade.overlap(player, speedPowerUp,this.collectSpeedStar,false,null, this);
        this.physics.arcade.overlap(player, sizePowerUp,this.collectSizeStar,false,null, this);
        this.physics.arcade.overlap(player, endDoor,function(){ game.state.start('EndScreen');},false,null, this);
    

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
        timerDelay = 300;
    },

    collectCrystal:function(game,star){
            star.kill();
            count+=1;
            console.log(count);
           
    },

    collectSpeedStar:function(game,speedPowerUpStar){
        speedPowerUpStar.kill();
        playerVelocityX += 100;
        playerVelocityY += 100;
        timerDelay -= 100;
        
    },
    collectSizeStar:function(game,sizePowerUpStar){
        sizePowerUpStar.kill();
        player.loadTexture('big_ball');
        player.body.setSize(50, 45);
        playerVelocityX = 250;
        playerVelocityY = 600;
        timerDelay = 400;
        
    }
}