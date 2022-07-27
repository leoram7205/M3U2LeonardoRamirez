import obtenerUsuarios from "../data/selectUsuarios.js";

const API_URL = "https://my-json-server.typicode.com/leoram7205/M3U2LeonardoRamirez"

axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

// Filtramos toda la información que recibimos de la API y la mapeamos
const showAllTasks = (data) => {
  data.map((task) => createTask(task));
};

const createTask = (task) => {
    let newTask = document.createElement("article");
    newTask.classList.add("card-task");
  
    let taskTitle = document.createElement("h3");
    taskTitle.classList.add("card-task__title");
    taskTitle.innerText = task.title;
  
    let taskResponsible = document.createElement("p");
    taskResponsible.classList.add("card_task__responsible");
    let usuarios = obtenerUsuarios(task.person);
    let usuario = usuarios.then((usuarios)=>{
        console.log(usuarios.user)
        taskResponsible.innerHTML = `<span class="card_task__responsible--tag-creator">Responsable:</span> ${usuarios.user}`;
    })
    
    // let taskDetails = document.createElement("p");
    // taskDetails.classList.add("card-task__details");
    // taskDetails.innerHTML = `<span class="card-task__details--task-details">Descripción:</span> ${task.details} `;
  
    let taskDate = document.createElement("p");
    taskDate.classList.add("card-task__date");
    taskDate.innerHTML = `<span class="card-task__date--tag-date">Plazo:</span>${task.deadline}`;
  
    let taskCreate = document.createElement("p")
    taskCreate.classList.add("card-task__date")
    taskCreate.innerHTML = `<span class="card-task__date--tag-date">Creación:</span> ${task.created}`;
    
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskResponsible);
    // newTask.appendChild(taskDetails);
    newTask.appendChild(taskDate);
    newTask.appendChild(taskCreate)
  
    let columnToDo = document.querySelector("#todoTasks");
    let columnInProgress = document.querySelector("#progressTasks");
    let columnDone = document.querySelector("#doneTasks");
  
    // Preguntamos dependiendo el state que trae nuestra API es igual a to-do lo ubique en esa columna
    if (task.state === "to-do") {
      columnToDo?.appendChild(newTask);
    }
    if (task.state === "in-progress") {
      columnInProgress?.appendChild(newTask);
    }
    if (task.state === "done") {
      columnDone?.appendChild(newTask);
    }
  };

  export default createTask