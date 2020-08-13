const {ipcRenderer} = require('electron');

let closeBtn=document.getElementById('closeBtn')

closeBtn.addEventListener('click',()=>{
    const reply=ipcRenderer.sendSync('mensajito','Hola que tal?')
    console.log(reply)
    reply=null
})