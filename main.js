const { app, BrowserWindow } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater')
const log = require('electron-log');

log.transports.file.resolvePath = () => path.join('/media/alekseyua/storage/work/ReactElectron/auto-update-app/','logs/main.log')
log.info('Hello, log')
log.warn('Someproblem appears');

let win;
function createWindow () {
  win = new BrowserWindow({
    width: 900,
    height: 600
  });
console.log(__dirname, '/index.js')
  win.loadFile(path.join(__dirname,'/index.html'))
}


app.on('ready', () => {
  createWindow()
  autoUpdater.checkForUpdatesAndNotify()
} )

autoUpdater.on('update-available', () => {
  log.info('update-available')
})

autoUpdater.on('checking-for-update', () => {
  log.info('checking-for-update')
})

autoUpdater.on('update-downloaded', () => {
  log.info('update-downloaded')
})

autoUpdater.on('download-progress', () => {
  log.info('download-progress')
})