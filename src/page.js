let { html } = require('./api/htmlBase')
let { style, index } = require('./source/pageSource')
let { canvasBoard } = require('./api/canvasGenerate')

function pageRun (app, root) {
  app.get('/', (req, res) => {
    res.send(html(index.title, index.body, style))
  })

  app.get('/generate', (req, res) => {
    let body = `<div style="margin: 5rem 0; justify-content: center; text-align: center;">
    <div class="card" style="min-width: 20rem; max-width: 50rem; margin: 0 auto;">
      <h1>Preview</h1>
      <img src="./api/canvas/?url=${req.query.url}&desp=${req.query.desp}" alt="preview">
      <h2>
        Link && Usage
      </h2>
      <h3>
        Link
      </h3>
      <p>
        ${req.protocol + '://' + req.get('host') + '/' + `/api/canvas/?url=${req.query.url}&desp=${req.query.desp.replaceAll(' ', '+')}`}
      </p>
      <h3>
        Usage
      </h3>
      <p>
        Just place this line of code in the 'Head' tag in HTML
      </p>
      <p class="code">
        &lt;meta property="og:image" content="${req.protocol + '://' + req.get('host') + '/' + `/api/canvas/?url=${req.query.url}&desp=${req.query.desp.replaceAll(' ', '+')}`}" /&gt;
      </p>
    </div>
  </div>`
    res.send(html(index.title, body, style))
  })

  app.get('/api/canvas', (req, res) => {
    canvasBoard(req, res)
  })
}

module.exports = {
  pageRun
}