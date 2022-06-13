let container = document.getElementById("container");
let list = document.getElementById("list");
let btnSend = document.getElementById("btn-send");
let surname = document.getElementById("surname");

container.addEventListener("click", function () {
  container.style.display = "none";
  list.style.display = "block";
});

list.addEventListener("click", function () {
  list.style.display = "block";
  container.style.display = "none";
});
btnSend.addEventListener("click", send);
function send() {}
surname.addEventListener("click", function () {});
