const {app, BrowserWindow}=require('electron')

let win

const crearVentana=()=>{
    //Crea la ventana del navegador
    win=new BrowserWindow({
        width:1280,
        height:768,
        minWidth:960,
        minHeight:768,
        center:true,
        //El browserWindow crea una ventana vacia, con el comando show esa ventana no se va a abrir. Solo se abre el win na ves se halla cargado
        show:false,
        //Elimina el menu por defecto
        frame:false
    })

    //Carga el index.html de la app
    win.loadFile('./index.html')

    //
    win.on('closed',()=>{
        win=null
    })

    win.once('ready-to-show',()=>{
        win.show()
    })
}
app.on('ready',crearVentana)