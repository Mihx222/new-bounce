Game.EndScreen = function(game){};
var name = 'name';
var score = 0;
var playerNameText;
var playerScoreText;

Game.EndScreen.prototype = {

    init:function(playerName,count){
        name = playerName;
        score = count;
    },
    preload:function(game){
        this.load.image('gameOverImage','assets/gameOverText.png');

    },
    fadePicture:function(game){
        playerNameText = this.add.text(200, 430, 'Name : '+ name, { fontSize: '32px', fill: '#fff' });
        playerScoreText = this.add.text(450, 430, 'Score : '+ score, { fontSize: '32px', fill: '#fff' });
    },


    create:function(game){
        game.add.tileSprite(200, 0, 400, 400, 'gameOverImage');
        game.time.events.add(Phaser.Timer.SECOND * 2,this.fadePicture, this);

    },

    update:function(game){
        
    }
}