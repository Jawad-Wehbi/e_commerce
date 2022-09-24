const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
    const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    })
}
app.whenReady().then(()=> {
    createWindow();
});

app.on('window-all-closed', ()=> {
    if (process.platform !== 'darwin') app.quit()
    })