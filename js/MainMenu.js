Game.MainMenu = function(game) {};

var logo;
var play_button;

Game.MainMenu.prototype = {

    preload:function(game){
        this.load.spritesheet('logo','assets/logo.png');
        this.load.image('playButton','assets/playButton.png');
        this.load.image('background','assets/title_bg.jpg');
    },
    create:function(game){
        // seteaza imaginea cu id'ul 'background' drept fundal
        game.add.tileSprite(0, 0, 1200, 900, 'background');
        logo = this.add.sprite(game.world.centerX,game.world.centerY-200,'logo')
        //pozitioneaza imaginea pentru butoul play, si seteaza rularea unei functii 
         play_button = game.add.button(game.world.centerX,game.world.centerY,'playButton',function(){
        this.game.state.start('Level1');
        })
        play_button.anchor.setTo(0.5,0.5);
        logo.anchor.setTo(0.5,0.5);
         
    },

    update:function(game){
        
        if(play_button.input.pointerOver()) play_button.alpha = 1;
             else
                 play_button.alpha = 0.5; 

        }
        

    }
