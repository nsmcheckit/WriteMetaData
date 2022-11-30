const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    //frame: false,
    useContentSize: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation:false //  把这一项加上错误就会消失
     }
  });
  
  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
