let exp = require('express')

let {middlewareRun} = require('./src/middleware')
let {pageRun} = require('./src/page')
let {portRun} = require('./src/port')

let app = exp()

middlewareRun(app, exp, __dirname)
pageRun(app, __dirname)
portRun(app, 1980)