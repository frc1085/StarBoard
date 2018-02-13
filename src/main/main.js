const { app } = require('electron')
const { createWindow } = require('./window')

app.on('ready', launchInfo => {
  app.window = createWindow({})
  app.window.loadURL(`${__dirname}/../render/render.html`)
})
