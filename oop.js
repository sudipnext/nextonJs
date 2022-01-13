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