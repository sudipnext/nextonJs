import React from "react";
import memesData from "../../memesData";

export default function Meme() {
  let varr = [];
  let memeimg = memesData.data.memes.map((x) => {
    varr.push(x.url);
  });
  let randomImgGenerator = () => {
    console.log(varr[Math.floor(Math.random() * varr.length)]);
  };
  return (
    <div className="forms">
      <div class="inputs">
        <input type="text"></input>
        <input type="text"></input>
      </div>
      <button onClick={randomImgGenerator}>Get a new meme image</button>
    </div>
  );
}
