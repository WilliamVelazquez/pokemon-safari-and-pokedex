import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3001;

const app = express();

if (ENV === 'development') {
  console.log('Loading Dev Config...');
  // eslint-disable-next-line global-require
  const webpackConfig = require('../../webpack.dev.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (request, response) => {
  response.send(`
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
    </head>
    <body>
      <div class="container" id="app"></div>
      <!-- JS -->
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
    </html>
  `);
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server running on PORT: http://localhost:${PORT}`);
});
