const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => { //we first listen like this
  console.log(`data revived user ${name} with id:${id}`); 
});
customEmitter.on('response', ()=>{   
    console.log(`some other logic here!`)
})
customEmitter.emit("response", 'john', 34);        //we are emitting the response
