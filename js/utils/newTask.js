import createTask from "../api/consumo.js";

const form = document.querySelector('#formNewTask')
const API_URL = "https://my-json-server.typicode.com/leoram7205/M3U2LeonardoRamirez"

form?.addEventListener('submit', (eve)=>{
    eve.preventDefault();
    const formData = eve.target;

    const data = {
        title: formData.titleTask.value,
        person: formData.responsibleTask.value,
        deadline: formData.deadLineTask.value,
        created: '26/07/2022',
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