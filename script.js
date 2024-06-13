let gameseq=[];
let userseq= [];
let btn= ["pink", "blue", "orange", "green"];
let scorearr= [];

let started= false;
let level=0;
let h1= document.querySelector("h1");
let h2= document.querySelector("h2");
let body= document.querySelector("body");
let h3= document.querySelector("h3");

document.addEventListener("keypress", ()=>{
    if(started== false){
        started=true;
        levelup();
    }
});

let flashbtn= (btn)=>{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    }, 150);
}
let userbtn= (btn)=>{
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    }, 150);
}
let levelup= ()=>{
    userseq=[];
    level++;
    h2.innerText= `Level ${level}`;

    let randomIndex= Math.floor(Math.random() * 3);
    let randomColor= btn[randomIndex];
    let randombtn= document.querySelector(`.${randomColor}`);

    gameseq.push(randomColor);
    flashbtn(randombtn);
}

let check= (index)=>{
    if(userseq[index]=== gameseq[index]){
        if(userseq.length== gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h2.innerHTML= `Game over! <b> Your Score was ${level}<br> press any key to start`;
        scorearr.push(level);
        console.log(scorearr);
        let max= -1;
        for(let i=0; i< scorearr.length; i++){
            for(let j=0; j< scorearr.length; j++){
                if(scorearr[i]< scorearr[j]){
                    max= scorearr[j];
                }
            }
        }
        h3.innerText= `Highes Score is ${max}`;

        body.style.backgroundColor= "red";
        h1.style.color="white";
        h2.style.color= "white";
        h3.style.color= "white";

        setTimeout(()=>{
            body.style.backgroundColor= "white";
            h1.style.color="black";
            h2.style.color= "black";
            h3.style.color= "black";
        },1500);

        reset();
    }
}

let reset= ()=>{
    started= false;
    gameseq=[];
    userseq=[];
    level=0;
}
function btnpressed(){
    let button= this;
    userbtn(button);

    userColor= button.getAttribute("id");
    userseq.push(userColor);

    check(userseq.length-1);
}

let btns= document.querySelectorAll(".button");
for(btn1 of btns){
    btn1.addEventListener("click", btnpressed);
}
