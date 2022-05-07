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
var itemList = document.querySelector('#items');
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

