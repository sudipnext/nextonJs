function NBAPlayer(name, team, pos){
    this.name = name;
    this.team = team;
    this.pos = pos;
}
const curry = new NBAPlayer("Sudip ", "next", "first");
NBAPlayer.prototype.sayhello = function(){
    console.log(`HELLO ${this.name}`);
}
curry.__proto__
curry.sayhello();
/*
After calling this sayhello function on the object curry .
it will look through 
the function NBAPlayer whether it has or not 
then it comes to the curry.__proto__ and 
looks for NBAPlayer.prototype and find out the defin
ation of the sayhello function


we can also define throught the function directly on 
the NBAPlayer but this will create again wehen we 
call for every single player. so following the 
programming rules we don't do that here following 
the DRY= do not repeat
*/