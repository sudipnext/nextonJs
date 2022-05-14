form.addEventListner("submit", () => {
  const register = {
    email: email.value,
    password: password.value,
  };
  fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(register),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if ((data.status = "error")) {
        sucess.style.display = "none";
        error.style.display = "block";
        error.innerText = data.error;
      }else{
        sucess.style.display = "block";
        error.style.display = "none";
        sucess.innerText = data.sucess;
      }
    }) ;
});
