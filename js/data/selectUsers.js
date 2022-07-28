import { users } from "./users.js";

let selectHTML = document.getElementById('responsibleTask');

const getUsers =  (id_user)=>{
    return new Promise((resolve, reject)=>{
            let user = users[id_user]
            user ? resolve(user) : reject('')
        });
}

const showUsers = async () => {
    let dropdown = [];
    for (let i = 0; i < users.length; i++) {
        dropdown[i] = await getUsers(i);
        let optionHTML = `<option value="${dropdown[i].id}">${dropdown[i].user}</option>`;
        selectHTML.innerHTML += optionHTML
    }
}
showUsers()

export default getUsers