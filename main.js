// Require Electron and Node.js modules
var electron = require('electron');
var app = electron.app;
var Tray = electron.Tray;
var BrowserWindow = electron.BrowserWindow;

var path = require('path');
var url = require('url');



// Global reference of the window object
var win;
var Tray;


function createWindow() {

   Tray = new Tray(path.join(__dirname, 'app_icons/eggIcon.png'));
    // Create the browser window.
    win = new BrowserWindow({
        
        width: 800,
        height: 800,
        resizable: false,
        titleBarStyle: 'hidden'

    })

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'www/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools.
    //win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', function () {
        win = null
    });
}

// This method will be called when Electron has finished
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});

app.on('activate', function () {

    if (win === null) {
        createWindow();
    }
});
