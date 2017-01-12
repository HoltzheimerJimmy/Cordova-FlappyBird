var score = new Score();

document.addEventListener('deviceready', function () {
    if (localStorage.getItem("hi-score") == null) {
        localStorage.setItem("hi-score", 0);
    }
    $("#actual-score").html('Score : 0');
    $("#hi-score").html('Hi-Score :' + localStorage.getItem("hi-score"));
    
});
function Score() {
    this.actual =0 ;
    this.hi = localStorage.getItem("hi-score");
};

function setNewScore() {
    score.actual += 0.5;
    $("#actual-score").html('Score :' + score.actual);
    if (score.actual > score.hi) {
        score.hi = score.actual;
        localStorage.setItem("hi-score", score.hi);
        $("#hi-score").html('Hi-Score :' + localStorage.getItem("hi-score"));
    };
};
