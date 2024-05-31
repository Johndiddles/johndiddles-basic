const submitBtn = document.getElementById("submit");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const clearInputs = () => {
  userName.value = "";
  email.value = "";
  message.value = "";
};

function formHandler(e) {
  const form = document.getElementById("form");
  e.preventDefault();

  if (form.checkValidity()) {
    fetch("https://johndiddles-server.onrender.com/api/v1/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          Toastify({
            text: `Your message was delivered successfully`,
            duration: 5000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #2c2e39, #6f4f42)",
            },
            onClick: function () {},
          }).showToast();
          clearInputs();
        }
      })
      .catch((error) => console.error({ error }));

    return;
  } else {
    form.reportValidity();
  }
}
