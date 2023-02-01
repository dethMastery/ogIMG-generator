// Module Call
let canvas = require('canvas')
const { loadImage, registerFont } = canvas;
let Konva = require('konva/cmj').default

// Static Variable
let w = 1280
let h = 720

async function canvasBoard(req, res) {
  // Setting up stage
  const stage = new Konva.Stage({
    container: undefined,
    width: w,
    height: h,
  });

  // Base Layer
  let base = new Konva.Layer()
  let baseBG = new Konva.Rect({
    x: 10,
    y: 10,
    width: w - 20,
    height: h - 20,
    fill: '#' + req.query.bg,
    stroke: 'whitesmoke',
    strokeWidth: 0,
    cornerRadius: 10
  })
  base.add(baseBG)

  // Destroy stage (Avoid RAM Leak)
  base.destroy()
  stage.destroy()

  // Set IMG Buffer
  var img = Buffer.from(stage.toDataURL().slice(22), 'base64');

  // Sending to show
  res.setHeader('content-type', "image/png")
  res.send(img)
}

module.exports = {
  canvasBoard
}