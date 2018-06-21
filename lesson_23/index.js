const localStorage_todo = JSON.parse(localStorage.getItem('localStorage_todo')) || [];
const add_button = document.getElementById('button');
add_button.addEventListener('click', addTask);
const p= document.createElement('p');

function addTask() {
  this.input = document.getElementById('todo-input');
  if (this.input.value.replace(/\s/g,"") == "" ){
      p.className = "notice";
      p.innerHTML = "<strong>this field is empty!</strong> you must correct  data";
      document.getElementById('invalid').appendChild(p);
    }else{
        p.innerHTML="";
        localStorage_todo.push({
        value: this.input.value,
    })
    }
  localStorage.setItem('localStorage_todo', JSON.stringify(localStorage_todo));
  listTask();
  this.input.value = "";
  this.input.placeholder = "add task";
}

function listTask() {
  this.list = "";
  for (let i = 0; i < localStorage_todo.length; i++) {
      this.list += "<li>";
      this.list += "<span class="+ (localStorage_todo[i].done ? "done" : "free") +">";
      this.list += localStorage_todo[i].value;
      this.list += "</span>";
      this.list += "<button  class='check_task' onclick='ifDone("+ i +")'>"
      + (localStorage_todo[i].task_done? "\u2713" : "+") +"</button> ";
      this.list += "<button class='delete_task' onclick='deleteTask("+ i +")'>delete</button></li>";  
    }
  document.querySelector("#list-items").innerHTML = list;
}

function deleteTask(i) {
    console.log(i);
    localStorage_todo.splice(i, 1);
    localStorage.setItem('localStorage_todo', JSON.stringify(localStorage_todo))
    listTask();
}

function ifDone(i) {
    localStorage_todo[i].done = !localStorage_todo[i].done;
    localStorage_todo[i].task_done = !localStorage_todo[i].task_done;
    localStorage.setItem('localStorage_todo', JSON.stringify(localStorage_todo));
    listTask();
}

listTask();
