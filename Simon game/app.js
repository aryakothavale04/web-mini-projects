let gameSeq=[];
let playerSeq=[];
let color=["red","green","blue","yellow"];

let started=false;
let level=0;

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelUp(){
    playerSeq=[];
    level++;
    let h3=document.querySelector("h3");
    h3.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*4);
    let randomColor=color[random];
    let btn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    flash(btn);
}

document.addEventListener("keypress", function(){
    if (started==false){
        console.log("Game Started...");
        started=true;
        levelUp();
    }
})

function btnPress(){
    if (!started) return;   // ⬅ stop clicks when game over

    flash(this);
    let pressColor = this.getAttribute("id");
    playerSeq.push(pressColor);
    checkAns();
}

let allBtn=document.querySelectorAll(".btn");

for (btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function checkAns(){
    let idx = playerSeq.length - 1;

    if (gameSeq[idx] === playerSeq[idx]) {
        if (gameSeq.length === playerSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";

        setTimeout(function(){
            body.style.backgroundColor = "#121212";
            gameOver();
        }, 300);
    }
}


function gameOver(){
    let h3 = document.querySelector("h3");
    h3.innerText = `Score: ${level - 1} | Game Over! Press any key to restart`;
    reset();
}

function reset(){
    started=false;
    gameSeq=[];
    playerSeq=[];
    level=0;
}