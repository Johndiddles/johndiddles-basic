const submitBtn = document.getElementById("submit");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const clearInputs = () => {
  console.log(userName.value);
  console.log(email.value);
  console.log(message.value);

  userName.value = "";
  email.value = "";
  message.value = "";
};

function formHandler(e) {
  const form = document.getElementById("form");
  e.preventDefault();
  if (form.checkValidity()) {
    alert("Thanks for reaching out!");
    clearInputs();
    return;
  } else {
    form.reportValidity();
  }
}
