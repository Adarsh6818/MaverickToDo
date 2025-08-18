document.querySelector("#push").onclick = () => {
  // Adding validation for emply input field
  if (document.querySelector("#newTask input").value.length == 0) {
    alert("Please enter a task");
  }

  //If user types any task
  else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id"taskname">
                    ${document.querySelector("#newTask input").value}
                
                </span>
                  <button class="delete">
               
                <i class="far fa-trash-alt"></i>
            </button>
            </div>
          `;
    console.log("Adarsh");

    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    let tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#newTask input").value = "";
  }
};
