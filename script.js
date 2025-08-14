
document.querySelector('#push').onclick = () => {

    // Adding validation for emply input field
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Please enter a task")
    }

    //If user types any task
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id"taskname">
                    ${document.querySelector('#newTask input').value}
                </span>
                  <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
            </div>
          
            
        `
        
    }
}

