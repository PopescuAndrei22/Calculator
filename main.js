const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow(){
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        minWidth: 500,
        minHeight: 500,
        maxWidth: 1920,
        maxHeight: 1080,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
          }
    });

    win.loadFile('src/index.html');
}

app.whenReady().then(() => {
    createWindow();
  
    ipcMain.handle('sum', async (event, num1, num2) => {
      return num1 + num2;
    });
  
 });
  
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
})
