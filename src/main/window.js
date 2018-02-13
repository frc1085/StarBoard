const { BrowserWindow } = require('electron')

module.exports.createWindow = params => new BrowserWindow({
  frame: params.frame || false,
  fullscreen: params.full || true,
  backgroundColor: params.col || '#110A60'
})
