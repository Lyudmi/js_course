let add_button = document.getElementById('add_button');
add_button.addEventListener('click', addTask);
displayTask();


//add  element with the task  when clicking on button

function addTask() {
    let value_task = document.getElementById('value_task').value;
    if(value_task){
        let todos = getlocalStorage();
        document.getElementById('value_task').value = '';
        document.getElementById('value_task').placeholder="add new task";
        todos.push(value_task);
        localStorage.setItem('value_task', JSON.stringify(todos));
        
        displayTask();
        return false;
    }
    
}
//create element with the task  when clicking on button
function displayTask() {
    let todos = getlocalStorage();

    let create_ul = '<ul>';
    for(let i=0; i < todos.length; i++) {
        create_ul += '<li id="' + 'checkeds'+ i  + '">' + todos[i] + '<button class="checked" id="' + 'c'+ i  + '">\u2713</button>' + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    create_ul += '</ul>';

    document.getElementById('todos').innerHTML = create_ul;

    var buttons = document.getElementsByClassName('remove');
    var checked = document.getElementsByClassName('checked');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
    for (var j=0; j < checked.length; j++) {
        checked[j].addEventListener('click', checkedTask);
    };
return false;
}

// Create "getlocalStorag" function when 
function getlocalStorage() {
    var todos = [];
    var todos_str = localStorage.getItem('value_task');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    console.log(todos);
    return todos;
}

// Create "remove" function when 
function remove() {
    var id = this.getAttribute('id');
    var todos = getlocalStorage();
    todos.splice(id, 1);
    localStorage.setItem('value_task', JSON.stringify(todos));

    displayTask();

    return false;
}


// Add  "checked"  when clicking on a li item
function checkedTask() {
   
    let idchecked = this.getAttribute('id');
    console.log('this'+ idchecked);
    let li = document.getElementById(idchecked).parentNode ;
    li.className = "chec_li";
    console.log(li );
    var todos = getlocalStorage();
    localStorage.setItem('value_task', JSON.stringify(todos));

    return false;
}

