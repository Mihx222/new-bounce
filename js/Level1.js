enemyBird = function(index,game,x,y){
    this.bird = game.add.sprite(x,y,'bird');
    this.bird.anchor.setTo(0.5,0.5);
    this.bird.name = index.toString();
    game.physics.enable(this.bird,Phaser.Physics.ARCADE);
    this.bird.body.immovalble = true;
    this.bird.body.collideWorldBounds = true;
    this.bird.body.allowGravity = false; 
    this.bird.scale.setTo(1.5,1.5);


    this.birdTween = game.add.tween(this.bird).to({
        y:this.bird.y+250 
    },2000,'Linear',true,0,150,true);
}

enemySpider = function(index,game,x,y){
    this.bird = game.add.sprite(x,y,'spider');
    this.bird.anchor.setTo(0.5,0.5);
    this.bird.name = index.toString();
    game.physics.enable(this.bird,Phaser.Physics.ARCADE);
    this.bird.body.immovalble = true;
    this.bird.body.collideWorldBounds = true;
    this.bird.body.allowGravity = false; 

    this.birdTween = game.add.tween(this.bird).to({
        x:this.bird.x+250 
    },2000,'Linear',true,0,100,true);
}

Game.Level1 = function(game) {};

var map;
var layer;

var player;
var playerSpawnX = 100;
var playerSpawnY = 800;
var playerVelocityX = 350;
var playerVelocityY = 500;
var playerName;

var crystals; 
var count = 0;  
var speedPowerUp;
var sizePowerUp;
var endDoor;

var controls = {};
var jumpTimer = 0;
var timerDelay = 750;

var timer;
var enemy0;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemy8;
var enemy7;
var enemy9;
var enemy10;
var enemy11;
var enemy12;
var enemy13;
var enemy14;
var enemy15;



Game.Level1.prototype = {
    preload:function(game){
        this.load.spritesheet('star', 'assets/star.png');
        this.load.spritesheet('sizePowerUpStarSprite','assets/sizePowerUpstar.png');
        this.load.spritesheet('speedPowerUpStarSprite','assets/speedPowerUpstar.png');
        this.load.spritesheet('endDoorSprite','assets/endDoor.png');
        this.load.image('bird','assets/bird_enemy.png');
        this.load.image('spider','assets/spider_enemy.png');

    },

    create:function(game) {
        // Prompt and set player name. Default is 'Player'
        playerName = prompt('Please enter your name: ');
        if (playerName === null || playerName === "") {
            this.playerName = "Player";
        }

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
        map.setTileIndexCallback(71, this.resetPlayer, this);
        
        player = this.add.sprite(playerSpawnX, playerSpawnY, 'small_ball');
        player.anchor.setTo(0.5, 0.5);
        // player.animations.add('jump', [2], 1, true);
        this.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;
        player.body.bounce.setTo(0.4);

        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W)
     }
        //create colectible stars
        map.createFromObjects('crystals',50,'star',0,true,false,crystals);
        //repeat to respawn powerUps 20 times each 25 seconds 
        game.time.events.repeat(Phaser.Timer.SECOND * 25,20,this.respawnSizePowerUp, this);
        game.time.events.repeat(Phaser.Timer.SECOND * 25,20,this.respawnSpeedPowerUp, this);

       enemy0 = new enemyBird(0,game,player.x+300,player.y-200);
       enemy1 = new enemyBird(0,game,player.x+2600,player.y-200);
       enemy2 = new enemyBird(0,game,player.x+2300,player.y-200);
       enemy3 = new enemyBird(0,game,player.x+5000,player.y+50);
       enemy4 = new enemyBird(0,game,player.x+5250,player.y+50);
       enemy5 = new enemyBird(0,game,player.x+7400,player.y-40);
       enemy6 = new enemyBird(0,game,player.x+7600,player.y-40);
       enemy7 = new enemyBird(0,game,player.x+5000,player.y-560);
       enemy8 = new enemyBird(0,game,player.x+5250,player.y-560);
       enemy9 = new enemySpider(0,game,player.x+700,player.y+80);
       enemy10 = new enemySpider(0,game,player.x+7500,player.y-560);
       enemy11 = new enemySpider(0,game,player.x+8000,player.y-560);
       enemy12 = new enemySpider(0,game,player.x+9000,player.y-560);
       enemy13 = new enemySpider(0,game,player.x+9500,player.y-560);
       enemy14 = new enemySpider(0,game,player.x+10000,player.y-560);
       enemy15 = new enemySpider(0,game,player.x+7000,player.y-560);


    },

    update:function(game) {
        this.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
         // make all elemets colide with the the ground layer
        this.physics.arcade.collide(player, layer);
        this.physics.arcade.collide(crystals, layer);
        this.physics.arcade.collide(speedPowerUp, layer);
        this.physics.arcade.collide(sizePowerUp, layer);
        this.physics.arcade.collide(endDoor, layer);

        //if the player colected 50 stars spawn the exit door
        if(count == 50) {
            map.createFromObjects('endPoint',90,'endDoorSprite',0,true,false,endDoor);
        }

        // enable collision for power ups and stars srites4
        this.physics.arcade.overlap(player, crystals,this.collectCrystal,false,null, this);
        this.physics.arcade.overlap(player, speedPowerUp,this.collectSpeedStar,false,null, this);
        this.physics.arcade.overlap(player, sizePowerUp,this.collectSizeStar,false,null, this);
        this.physics.arcade.overlap(player, enemy0.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy1.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy2.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy3.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy4.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy5.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy6.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy7.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy8.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy9.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy10.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy11.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy12.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy13.bird,this.resetPlayer1,false,null, this);
        this.physics.arcade.overlap(player, enemy14.bird,this.resetPlayer1,false,null, this);

        this.physics.arcade.overlap(player, endDoor, () => { 
            game.state.start('EndScreen',false,false,playerName,count);
            // Save data to the database
            this.persistScore(this.playerName, count);
        }, false, null, this);
        
       // if(this.checkOverlap(player,enemy1.bird)) this.resetPlayer;

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

    resetPlayer:function(game) {
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
        playerVelocityX += 50;
        playerVelocityY += 50;
        timerDelay -= 100;
        
    },
    collectSizeStar:function(game,sizePowerUpStar){
        sizePowerUpStar.kill();
        player.loadTexture('big_ball');
        player.body.setSize(50, 45);
        playerVelocityX = 250;
        playerVelocityY = 600;
        timerDelay = 400;
        
    },

    respawnSizePowerUp:function(game){
        map.createFromObjects('sizePowerUp',53,'sizePowerUpStarSprite',0,true,false,sizePowerUp);
    },
    respawnSpeedPowerUp:function(game){
        map.createFromObjects('speedPowerUp',51,'speedPowerUpStarSprite',0,true,false,speedPowerUp);
    },

    persistScore:function(user, score) {
        var url = 'db/persistScore.php';
        var params = 'user=' + user + '&score=' + score;

        // Create and send AJAX request
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send(params);
    },

    checkOverlap:function(spriteA,spriteB){
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA,boundsB);
    },

    resetPlayer1:function(){
        player.loadTexture('small_ball');
        player.body.setSize(30, 27);
        player.reset(playerSpawnX, playerSpawnY);

        playerVelocityX = 350;
        playerVelocityY = 450;
        timerDelay = 300;
    }
    
}