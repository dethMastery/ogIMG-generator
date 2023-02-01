let style = `
  <link rel="stylesheet" href="https://cdn.katsuragi.cyou/fonts/TH/LINEseed-Regular" />
  <link rel="stylesheet" href="https://dethmastery.github.io/katsuStrap/cdn/katsuStrap.css" />

  <style>
    body, a, div, p, span, h1 {
      font-family: "LINEseed-Regular", sans-serif !important;
    }
    
    #App, .flex {
      height: 100vh !important;
    }

    .card-body p a {
      color: #2e2f2f;
      transition: all .3s;
    }

    .card-body p a:hover {
      text-decoration: none;
      opacity: .8;
    }
  </style>
`

let index = {
  title: 'ogIMG Generator',
  body: `<div class="flex f-middle">
  <div class="card">
    <div class="card-header">
      <h1>ogIMG Generator</h1>
    </div>
    <div class="card-body">
      <p>
        but there nothing here :3
      </p>
      <p>
        if u want to use just using this <a href="./generate">form</a>
      </p>
    </div>
  </div>
</div>`
}

module.exports = {
  style,
  index
}