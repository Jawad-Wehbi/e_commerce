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
    });

// Adding Seller Modal
    var modal = document.getElementById("addingSeller");

    var btn = document.getElementById("add");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    



    