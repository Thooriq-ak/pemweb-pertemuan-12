const username = "Thooriq";
const password = "123123";

function auth() {
  let userInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;

  if (userInput == username && passwordInput == password) {
    alert("Login Berhasil!");
    form.submit();
  } else {
    alert("Login Failed!");
  }
}
