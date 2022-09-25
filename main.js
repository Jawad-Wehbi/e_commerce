const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
    const mainWindow = new BrowserWindow({
    width: 1440,
    height: 1024,
    })

    mainWindow.loadFile("sellers_list.html")
}
app.whenReady().then(()=> {
    createWindow();
});

app.on('window-all-closed', ()=> {
    if (process.platform !== 'darwin') app.quit()
    })

    