var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c1 = Math.floor(Math.random() * 255);
c2 = Math.floor(Math.random() * 255);
c3 = Math.floor(Math.random() * 255);
x = Math.floor(Math.random() * window.innerWidth);
y = Math.floor(Math.random() * window.innerHeight);

console.log(c1, c2, c3);
c.fillStyle = `rgb(${c1}, ${c2}, ${c3}, 0.5)`;
c.fillRect(x, y, 50, 50);
//Drawing a line
c.beginPath()
c.moveTo(50, 100)
c.lineTo(200,300)
c.strokeStyle = "red"
c.stroke()

//arc or circle
c.beginPath();
c.arc(120, 120, 50, 0, Math.PI * 2, true)
c.stroke()