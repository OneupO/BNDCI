//Panel
const {ipcRenderer} = require('electron')
const maxResBtn = document.getElementById("maxResBtn")
const ipc = ipcRenderer

//Turn app
minimizeBtn.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})

//Restore app
maxResBtn.addEventListener('click', ()=>{
    ipc.send('maximizeRestoreApp')
})

//Close app 
closeBtn.addEventListener('click', ()=>{
    ipc.send('closeApp')
})
