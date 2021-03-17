const input = document.querySelector('.todo_input');
const btn = document.querySelector('.todo_button');
const list = document.querySelector('.todo_list');

btn.addEventListener("click", addTask)
list.addEventListener("click", modifyItem)

function addTask(event) 
{
    event.preventDefault();

    const returnList = document.createElement('div');
    returnList.classList.add('task');

    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    newTask.classList.add('item');
    returnList.appendChild(newTask);

    if(input.value === "")
    {
        return null
    }

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('completed_button')
    returnList.appendChild(completedBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete_buton')
    returnList.appendChild(deleteBtn);

    list.appendChild(returnList);
    input.value = ""
}

function modifyItem(e) 
{
    const item = e.target;

    if (item.classList[0] === "delete_buton") 
    {
        const task = item.parentElement;
        task.classList.add("fall")
        task.addEventListener('transitionnd', function () 
        {
            task.remove()
        })
    }

    if (item.classList[0] === "completed_button") 
    {
        const task = item.parentElement;
        task.classList.toggle("completedItem")
    }
}
 
