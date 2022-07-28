const btnHead = document.getElementById('btnNewTask')
const seccAside = document.getElementById('modalNewTask')
const btnCancel = document.getElementById('btnCancelNewTask')

btnHead.addEventListener('click',()=>{
    seccAside.classList.add('active')
})

btnCancel.addEventListener('click', ()=>{
  seccAside.classList.remove('active')
})
