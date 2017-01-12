function onDeviceReady() {
    function customScaleThisScreen() {
        var contentWidth = document.body.scrollWidth, 
            windowWidth = window.innerWidth, 
            newScale = windowWidth / contentWidth;
        document.body.style.zoom = newScale;
    };

    //initialisation des positions de flappy et des pipes
    var flappy = new Flappy();
    var pipe1 = new Pipe();
    var pipe2 = new Pipe();
    var pipe3 = new Pipe();
    var pipe4 = new Pipe();
    var begin = false;

    pipe2.inverse = true;
    pipe4.inverse = true;
    pipe1.getNewY();
    pipe2.getNewY();
    pipe3.getNewY();
    pipe4.getNewY();

    //écrart des pipes 2 et 4 par rapport aux 1 et 2 (360 /2)+50 si paysage (640/2)+50 = 370 ou ajouter pipes
    pipe3.x += 230;
    pipe4.x += 230;

    var timer;

    function gameOver() {
        clearInterval(timer);
        begin = false;
        $("#game-over").toggle();
    };

    function start() {
        //Flappy sort de l'écran en portrait
        if (flappy.y < 0 || flappy.y > 640 ) {
            gameOver();
        };
        // collision avec les pipes en portrait
        if (pipe1.x > 0 && pipe1.x < 150 || pipe2.x > 0 && pipe2.x < 150) {
            if ($("#flappy").overlaps($("#pipe1")).hits.length > 0 || $("#flappy").overlaps($("#pipe2")).hits.length > 0) {
                gameOver();
            };
        };
        if (pipe3.x > 0 && pipe3.x < 150 || pipe4.x > 0 && pipe4.x < 150) {
            if ($("#flappy").overlaps($("#pipe3")).hits.length > 0 || $("#flappy").overlaps($("#pipe4")).hits.length > 0) {
                gameOver();
            };
        };

        //Déplacement du Flappy en hauteur et changement de rotation
        flappy.getNewSpeed();
        flappy.position();
        $("#flappy").css({ top: flappy.y });
        $("#flappy").css({ "transform": "rotate(" + flappy.speed / 15 + "deg)" });

        //Déplacement des pipes vers la gauche
        pipe1.getNewPosition();
        $("#pipe1").css({ top: pipe1.y });
        $("#pipe1").css({ left: pipe1.x });

        pipe2.getNewPosition();
        $("#pipe2").css({ top: pipe2.y });
        $("#pipe2").css({ left: pipe2.x });

        pipe3.getNewPosition();
        $("#pipe3").css({ top: pipe3.y });
        $("#pipe3").css({ left: pipe3.x });

        pipe4.getNewPosition();
        $("#pipe4").css({ top: pipe4.y });
        $("#pipe4").css({ left: pipe4.x });

    };

    var lastClickTime = 0;
    //bind au lieu de click
    $('body').bind('touchstart touchend', function(e){
        var current = new Date().getTime();
        var delta = current - lastClickTime;
        if (delta < 200) {
            // This happens because of a bug, so we ignore it.
        } else {
            //flappy monte
            flappy.ascend();
            //si c'est le début on lance l'interval
            if (!begin) {
                timer = setInterval(start, 20);
                begin = true;
            }
        }
        window.lastClickTime = current;     
        
    });

    $('#game-over').bind('touchstart touchend', function (e) {
        location.reload(true);
    });
    
};
document.addEventListener('deviceready', onDeviceReady, false);