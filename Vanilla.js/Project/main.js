var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);

//listening delete event
itemList.addEventListener('click', removeItem);

//fileter
filter.addEventListener('keyup', filterItems);
function addItem(e){
    e.preventDefault();
    //getInput Value
    var newItem = document.getElementById('item').value

    //create new li element
    var li = document.createElement('li');
    //adding Class
    li.className = 'list-group-item'
    //add text node with input value
    li.appendChild(document.createTextNode(newItem))
    var deleteBtn = document.createElement('button')
    deleteBtn.className ="btn btn-danger btn-sm float-right delete";
    //adding text node
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you Sure? ")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }