const {remote,ipcRenderer} = require('electron')
 

const btnClose=document.getElementById('closeBtn'),
    btnMinimize=document.getElementById('minimizeBtn')

btnClose.addEventListener('click',async ()=>{
    // let win=remote.getCurrentWindow()
    // win.close()
    const renderer=await ipcRenderer.invoke('cerrar-ventana')
    console.log(renderer)
})

btnMinimize.addEventListener('click',()=>{
   console.log('minimized')
   let win=remote.getCurrentWindow()
   win.minimize()
})