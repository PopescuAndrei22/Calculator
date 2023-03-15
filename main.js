const { app, BrowserWindow } = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 500,
        height: 500,
    });

    win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
})