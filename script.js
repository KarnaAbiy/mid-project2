var score = 0;
function clicker(){
    score += 1;
    document.getElementById("score").innerHTML = score;

    // Change image 
    switch(score) {
        return Math.floor(Math.random() * 2);
    }         
}