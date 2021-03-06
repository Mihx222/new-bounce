<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="user-scalable=no,  initial-scale=1,  maximum-scale=1,  width=device-width" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="js/phaser2.13.3.min.js"></script>
    <script src="js/Boot.js"></script>
    <script src="js/Preloader.js"></script>
    <script src="js/Level1.js"></script>
    <script src="js/MainMenu.js"></script>
    <script src="js/EndScreen.js"></script>

    <title>Bounce</title>

    <!-- Black background and 0 margin for the canvas -->
    <style type="text/css">
        body { margin: 0; background-color: black; }
    </style>

    <?php require 'db/connect.php' ?>
</head>

<body>
    <script type="text/javascript">
        window.onload = function() {
            var game = new Phaser.Game(800, 600, Phaser.CANVAS, '');

            game.state.add('Boot', Game.Boot);
            game.state.add('Preloader', Game.Preloader);
            game.state.add('MainMenu', Game.MainMenu);
            game.state.add('Level1', Game.Level1);
            game.state.add('EndScreen',Game.EndScreen);

            game.state.start('Boot');
        }
    </script>
</body>
</html>