const render = (html) => {
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
      <link href="assets/app.css" rel="stylesheet" type="text/css"></link>
    </head>
    <body>
      <div class="container" id="app">${html}</div>
      <!-- JS -->
      <script src="assets/app.js" type="text/javascript"></script>
      <script src="assets/vendor.js" type="text/javascript"></script>
    </body>
    </html>
  `);
};

export default render;
