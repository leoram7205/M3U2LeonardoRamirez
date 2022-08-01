import createTask from "../api/request.js";

const form = document.querySelector('#formNewTask')
const API_URL = "https://my-json-server.typicode.com/leoram7205/M3U2LeonardoRamirez"

form.addEventListener('submit', (eve)=>{
    eve.preventDefault();
    const formData = eve.target;
    const fechaCreated = new Date();
    const fechaDeadLine = new Date(formData.deadLineTask.value)

    const data = {
        title: formData.titleTask.value,
        person: formData.responsibleTask.value,
        details: formData.detailsTask.value,
        deadline: fechaDeadLine.toLocaleDateString(),
        created: fechaCreated.toLocaleDateString(),
        state: 'to-do'
    }
    console.log('%cnewTask.js line:14 data', 'color: #007acc;', data);

    axios.post(`${API_URL}/tasks`, data)
    .then((res) => {
        createTask(res.data);
        formData.reset();
    })
    .catch((err) => console.error(err));
});