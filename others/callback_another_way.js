globalThis.setTimeout(function(){
    console.log(`It has been 5 secs`);
},5000);

//another way to callback the function
globalThis.setTimeout(()=> console.log("it has been 5 secs"), 5000);
