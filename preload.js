const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  sum: (num1, num2) => {
    return ipcRenderer.invoke('sum', num1, num2);
  }
});