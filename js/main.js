let addTaskBtn = document.getElementById("addTaskBtnId");
let list = document.getElementById("list");
let noItem = document.getElementById("no-item");
let addTaskConatiner = document.querySelector(".addTaskConatiner");
let closeSign = document.getElementById("closeSignId");
let taskInput = document.getElementById("taskInput");
let addNowBtn = document.getElementById("addNowBtnId");
let closeBtn = document.getElementById("closeBtnId");
let alertMessage = document.getElementById("alert-message");



/*Show and Hide add task conatiner by (addTask button - closeSign icon - close button)*/
let showAndHideAddTaskContainer = () => {
    addTaskConatiner.classList.toggle("none");
}
addTaskBtn.addEventListener("click", showAndHideAddTaskContainer);
closeSign.addEventListener("click", showAndHideAddTaskContainer);
closeBtn.addEventListener("click", showAndHideAddTaskContainer);


/*Add a new task to your tasks list*/
let addTaskToYourList = () => {
    taskData = taskInput.value;
    if (taskData.trim() == "" || taskData.length > 20 || taskData.length < 3) {
        alertMessage.classList.remove("none");
    } else {
        noItem.classList.add("none");
        const newTask = `<div class=" p-2 rounded-lg mx-3 my-3  text-center task">
        <p class="d-inline">${taskData}</p>
        <i class="fas fa-trash-alt float-right mt-1 delete"></i></div>`;
        list.innerHTML += newTask;
        showAndHideAddTaskContainer();
        taskInput.value = "";
        alertMessage.classList.add("none");
    }
}
addNowBtn.addEventListener("click", addTaskToYourList);


/*remove  task from your tasks list*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();

        console.log(list.childElementCount);
        if (list.childElementCount == 0) {
            noItem.classList.remove("none");
        }
    }
});

/*check  task from your tasks list*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("task")) {
        e.target.classList.toggle("checked");
    }
});