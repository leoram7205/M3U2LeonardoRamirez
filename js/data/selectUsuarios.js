import { usuarios } from "./usuarios.js";

let selectHTML = document.getElementById('responsibleTask');

const obtenerUsuarios =  (id_usuario)=>{
    return new Promise((resolve, reject)=>{
            let usuario = usuarios[id_usuario]
            usuario ? resolve(usuario) : reject('')
        });
}

const presentarUsuarios = async () => {
    let dropdown = [];
    for (let i = 0; i < usuarios.length; i++) {
        dropdown[i] = await obtenerUsuarios(i);
        let optionHTML = `<option value="${dropdown[i].id}">${dropdown[i].user}</option>`;
        selectHTML.innerHTML += optionHTML
    }
}
presentarUsuarios()

export default obtenerUsuarios