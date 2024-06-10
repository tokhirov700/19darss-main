const addRoomBtn = document.querySelector("#add-student-btn");
const cancelFormBtn = document.querySelector("#cancel-form-btn");
const addRoomForm = document.querySelector("#add-student-form");
const studentId = document.querySelector("#student-id");
const studentName = document.querySelector("#student-name");
const studentSurname = document.querySelector("#student-surname");
const studentAge = document.querySelector("#student-age");

const showNewRoomForm = () => {
    addRoomForm.classList.add("show")
}

const cancelAddNewForm = () => {
    addRoomForm.classList.remove("show")
}

const createNewForm = (e) => {
    e.preventDefault();
    document.body.innerHTML +=`${studentId.value}, ${studentName.value}, ${studentSurname.value}, ${studentAge.value}`;
}

addRoomBtn.addEventListener("click", showNewRoomForm);
cancelFormBtn.addEventListener("click", cancelAddNewForm);
addRoomForm.addEventListener("submit", createNewForm);
