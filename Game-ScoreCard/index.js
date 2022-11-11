let teamScore1= document.getElementById("score-one")
let teamScore2 = document.getElementById("score-two")
let reset = document.getElementById("reset")
let count1=0
let count2=0
function add(){
    count1+=1
    teamScore1.textContent=count1
}
function add2(){
    count1+=2
    teamScore1.textContent=count1
}
function add3(){
    count1+=3
    teamScore1.textContent=count1
}
function addd(){
    count2+=1
    teamScore2.textContent=count2
}
function adddd(){
    count2+=2
    teamScore2.textContent=count2
}
function addddd(){
    count2+=3
    teamScore2.textContent=count2
}
function resett(){
    teamScore2.textContent = 0
    count2=0
}