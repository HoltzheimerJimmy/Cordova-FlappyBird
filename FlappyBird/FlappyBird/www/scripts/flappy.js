function Flappy() {
    this.speed = 0;
    this.x = 100;
    this.y = 300;//150
};
Flappy.prototype.ascend = function () {
    this.speed = -200;// -100 plus petit saut , -250 plus grand saut
};
Flappy.prototype.position = function () {
    this.y = this.y + this.speed * 0.02;
};
Flappy.prototype.getNewSpeed = function () {
    this.speed = this.speed + 500 * 0.02;
};