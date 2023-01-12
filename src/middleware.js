let cors = require('cors')

let corsSettings = {
  origin: '*',
  optionsSuccessStatus: 200
}

function middlewareRun(app, exp, root) {
  app.use(cors(corsSettings))
  app.use(exp.static('static'))
}

module.exports = {
  middlewareRun
}