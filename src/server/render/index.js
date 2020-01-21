import getManifest from '../getManifest';
require('dotenv').config();

let files;

if (process.env.NODE_ENV === 'production') {
  files = getManifest();
} else {
  files = {
    'app.css': 'assets/app.css',
    'app.js': 'assets/app.js',
    'vendors.js': 'assets/vendors.js',
  };
}

const render = (html, preloadedState) => {
  return (`
    <!--@Author William E. Velázquez A. - info@williamvelazquez.com-->
    <!DOCTYPE html>
    <html lang="es-MX">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Content-Security-Policy" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Pokémon Pokédex and Safari Simulation. Gotta Catch 'Em All!" />
      <meta name="keywords" content="WilliamVelazquez, William, React" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <!-- CSS -->
      <link href="${files['app.css']}" rel="stylesheet" type="text/css"></link>
    </head>
    <body>
      <div class="container" id="app">${html}</div>
      <!-- JS -->
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="${files['app.js']}" type="text/javascript"></script>
      <script src="${files['vendors.js']}" type="text/javascript"></script>
    </body>
    </html>
  `);
};

export default render;
