const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameVal = document.getElementById("name").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const messageVal = document.getElementById("message").value.trim();

  if (nameVal === "" || emailVal === "" || messageVal === "") {
    formMsg.textContent = "Please fill all fields.";
    formMsg.className = "error";
    return;
  }

  formMsg.textContent = "Thanks " + nameVal + ", your message is received.";
  formMsg.className = "success";
  form.reset();
});
