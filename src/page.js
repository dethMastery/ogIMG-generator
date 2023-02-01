let { html } = require('./api/htmlBase')
let { style, index } = require('./source/pageSource')
let { canvasBoard } = require('./api/canvasGenerate')

function pageRun (app, root) {
  app.get('/', (req, res) => {
    res.send(html(index.title, index.body, style))
  })

  app.get('/canvas', (req, res) => {
    canvasBoard(req, res)
  })
}

module.exports = {
  pageRun
}