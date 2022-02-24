const submitBtn = document.getElementById("submit");
function formHandler(e) {
  const form = document.getElementById("form");
  e.preventDefault();
  form.checkValidity() ? alert("submitted") : form.reportValidity();
  window.location.href = "/index.html";
}
