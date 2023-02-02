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

    .card img {
      width: 100%;
      height: auto;
      border-radius: 1rem;
    }

    .code {
      background-color: rgba(0, 0, 0, 0.5);
      padding: .5rem 0;
      color: whitesmoke;
      border-radius: 1rem;
    }

    .card-body p a {
      color: #2e2f2f;
      transition: all .3s;
    }

    .card-body p a:hover {
      text-decoration: none;
      opacity: .8;
    }

    .input-form {
      margin: 1rem 0;
    }

    .input-form input {
      text-align: center;
      padding: .5rem;
      margin: .5rem 0;
      border: 2px solid transparent;
      border-radius: 1rem;
      background-color: #2e2f2f;
      color: white;
      transition: all .3s;
    }

    .input-form input:focus {
      outline: none;
      border: 2px solid #ff6f61;
    }

    .input-form button {
      padding: 1rem;
      background-color: #ff6f61;
      color: whitesmoke;
      margin-top: 1rem;
      border-radius: 1rem;
      border: 0;
      transition: all .3s;
    }

    .input-form button:hover {
      transform: scale(1.3);
      cursor: pointer;
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
        <form class="input-form" method="GET" action="/generate">
          <input type="text" name="url" placeholder="Enter your URL" /> <br>
          <input type="text" name="desp" placeholder="Enter your description" /> <br>
          <button type="submit">
            Generate
          </button>
        </form>
      </div>
    </div>
  </div>`
}

module.exports = {
  style,
  index
}