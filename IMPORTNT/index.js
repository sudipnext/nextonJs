const inputEl = document.querySelector("input");
let saveBtn = document.getElementById("save-btn");
let saveTab = document.getElementById("save-tab");
let delBtn = document.getElementById("del-btn");
let ulEl = document.getElementById("fields");
let arr = [];
let linksFromLocal = JSON.parse(localStorage.getItem("mylinks"));
//default rendering all the links from local storage
if (linksFromLocal) {
  arr = linksFromLocal;
  renderer(arr);
}
//for saving each links
saveBtn.addEventListener("click", () => {
  arr.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("mylinks", JSON.stringify(arr));
  renderer(arr);
});

//for deleting the links
delBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  arr = [];
  renderer(arr);
});

//for saving the link we get in the tab
saveTab.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    arr.push(tabs[0].url);
    localStorage.setItem('mylinks', JSON.stringify(arr))
    renderer(arr)
  });
});

//for rendering the lists
function renderer(anArray) {
  let lists = "";
  for (let i in anArray) {
    lists += `<li><a href="${arr}" target="_blank">${anArray[i]}</a></li>`;
  }
  ulEl.innerHTML = lists;
}
