function Pipe() {
    this.speed = -150;
    this.x = 360;//640
    this.y = 350;//200
    this.inverse = false;
};

Pipe.prototype.getNewPosition = function () {
    this.x = this.x + this.speed * 0.02;
    if (this.x < -100) {
        this.x = 360;//640
        this.getNewY();
        setNewScore();
    };
};
Pipe.prototype.getNewY = function () {
    var nb = Math.floor((Math.random() * 100)); //génère un nombre entier entre 0 et 100
    this.y +=  nb;
    if (this.inverse) {
        this.y -= 500;//780
    }
};