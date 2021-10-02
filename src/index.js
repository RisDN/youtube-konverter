const { app, BrowserWindow, Notification } = require('electron')
const path = require('path')

let mainAblak, betoltoKepernyo
app.on('ready', () => {
    mainAblak = new BrowserWindow({
        width: 850,
        height: 500,
        show: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    //mainAblak.webContents.openDevTools()
    mainAblak.setIcon(path.join(__dirname, 'src/ikon.ico'))
    mainAblak.loadFile(path.join(__dirname, 'index.html'));
    mainAblak.removeMenu(true)

    betoltoKepernyo = new BrowserWindow({
        width: 450,
        height: 410,
        frame: false,
        resizable: false
    })
    betoltoKepernyo.setIcon(path.join(__dirname, 'src/ikon.ico'))
    betoltoKepernyo.removeMenu(true)
    betoltoKepernyo.loadFile(path.join(__dirname, 'betolto.html'));

    setTimeout(function() {
        betoltoKepernyo.close()
        mainAblak.show()
    }, 3500)
    app.setAppUserModelId('YouTube Konverter')
});

app.on('window-all-closed', () => {
    app.quit()
})