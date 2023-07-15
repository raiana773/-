let API = "http://localhost:8000/students";
let student = document.getElementById("student");
let list = document.getElementById("list");
let btnSend = document.getElementById("btn-send");
let surname = document.getElementById("surname");

// student.addEventListener("click", function () {
//   student.style.display = "none";
//   list.style.display = "block";
// });

// list.addEventListener("click", function () {
//   list.style.display = "block";
//   student.style.display = "none";
// });
btnSend.addEventListener("click", send);
async function send() {
  let newClick = {
    students: btnSend.value,
  };
  if (newClick.students.trim() === "") {
    alert("Заполните поле !");
    return;
  }
  await fetch(API, {
    body: JSON.stringify(newClick),
  });
}
surname.addEventListener("click", function () {});
