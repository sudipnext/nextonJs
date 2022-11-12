let passEl = document.getElementById('pass')
let pass1El = document.getElementById('pass1')
let password = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let symbols =[ '!', '@', '#', '&']
function random(){
    let idx = Math.floor(Math.random()*26)
    let randidx = Math.floor(Math.random()*26)
    let randsym = Math.floor(Math.random()*4)
    for(i in password){
        if(i == idx || i == randidx || randidx === idx){
            return password[idx].toUpperCase()
        }
        return password[idx]
    }
}
function randint(){
    return Math.floor(Math.random()*10)
}
function generatePassword(){
    passEl.textContent=""
    pass1El.textContent=""
    for(let i=0; i< 7; i++){
        passEl.textContent+= random()+randint()
        pass1El.textContent+=random()+randint()
    }
    
}