const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const userList = document.querySelector("#users")


myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(nameInput.value)
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add("error")
        msg.innerHTML = "Please Input all the Fields"
        setTimeout(()=>{
            msg.remove()
        }, 3000)
    }else{
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
        userList.appendChild(li);

        //clear fields
        nameInput.value = "";
        emailInput.value = "";
    }
})