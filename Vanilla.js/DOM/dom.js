// console.dir(document)
// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title)
// document.title = "Item";
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])

// document.all[10].textContent = "Hello"; // generally not used cause the indexing can be changed when we add new elements

// console.log(document.forms[0])
//images
// console.log(document.images);

//selecting methods

//GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);
// console.log(headerTitle.innerText)
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "GOODbye"
//The difference betn the innertext and textcontent is that one uses style and another just omits it. Innertext follows the style.

// headerTitle.innerHTML = " <h3>Hello</h3>";
// headerTitle.style.borderBottom = "solid 3px #000";
// header.style.borderBottom = "solid 10px red"

//GETELEMENTSBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1])
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.background = "yellow";

// // items.style.background = "light-grey";
// for(let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = "grey";
// }

//Get elements byTagName//

////It's just a similar aproach as above but acessing it as it's tag name

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1])
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.background = "yellow";

// // items.style.background = "light-grey";
// for(let i=0; i<li.length; i++){
//     li[i].style.backgroundColor = "grey";
// }

////QUERYSELECTOR ////
// var header = document.querySelector('#main-header');
// header.style.borderBottom = "solid 4px #ccc";
// var input = document.querySelector('input');
// input.value = "Hello-World"
//INPUT VALUE HELLO-WORLD WILL BE AUTOMATICALLY INPUTTED

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"
//BUTTON CHANGES TO SEND

// var item = document.querySelector('.list-group-item');
// item.style.color = "red";

// in default it will select the first item

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "blue";

// if we say last-child it will select the last one

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = "green";

//acessing the n'th child

////QuerySelectall////
// var titles = document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var odd = document.querySelectorAll('li:nth-child(even)');

// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#f4f4f4';
// }

//Traversing the parentElement
// var itemList = document.querySelector('#items');
// //parentnode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = 'purple';
// itemList.parentNode.parentNode.style.backgroundColor = 'blue';
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = 'red';

// parentElement
// itemList.parentElement.style.backgroundColor = 'purple';
// itemList.parentElement.parentElement.style.backgroundColor = 'blue';
// itemList.parentElement.parentElement.parentElement.style.backgroundColor = 'red';

// parent node and parent element are two things used to primarly select the parent element of the particular class or id we can do this to grab the parent when we don't know the name or we just want to do this real quick!

// clidenode
//generally don't use childnode use children instead
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'

//first-child
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = "SayHello"
// console.log(itemList.lastChild)
// itemList.lastElementChild.textContent = "Hello4"

//siblings
// console.log(itemList.nextElementSibling)

//previouSibling

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = "blue";

//createElement
// var newDiv = document.createElement('div');
// newDiv.clasName = "Hello";
// newDiv.id = "hello1"
// newDiv.setAttribute('title', 'hellodiv')
// //create text node
// var newDivText = document.createTextNode("Hello, World");
// //add text to div
// newDiv.appendChild(newDivText)
// console.log(newDiv)

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// container.insertBefore(newDiv, h1)
// newDiv.style.fontSize = '30px'

//Event Listening

// var button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e){
// console.log("Button Clicked")
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = 'red'
// console.log(e)
// console.log(e.target.id)
// console.log(e.target.className)
// console.log(e.target)
// console.log(e.target.classList)
// var output = document.getElementById('output');
// output.innerHTML = '<h3>' + e.target.id+'</h3>';

// console.log(e.type);
// console.log(e.clientX)
// console.log(e.clientY)
// console.log(e.offsetY)
// console.log(e.offsetX)
//     console.log(e.altKey);
//     console.log(e.shiftKey);
//     console.log(e.ctrlKey);
// }
var button = document.getElementById("button");
var box = document.getElementById("box");

// button.addEventListener("dblclick", runEvent);
// button.addEventListener("click", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var select = document.querySelector('select');
// itemInput.addEventListener('keypress', runEvent)
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)
// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)

// itemInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)
form.addEventListener('submit', runEvent)

function runEvent(e) {
    e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);
//   document.getElementById('output').innerHTML='<h3>'+ e.target.value +'</h3>';
  console.log(e.target.value)

  //   output.innerHTML = `<h3>MouseX: ${e.offsetX} MouseY: ${e.offsetY}</h3>`
  // `${e.offsetX}`, `${e.offsetY+e.offsetX}`, `${e.offsetY}`
  // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+e.offsetX+", "+e.offsetY+")"
}
