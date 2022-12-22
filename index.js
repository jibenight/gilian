// spec for O2switch
if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
let folder = '/dist';
let error404 = true;

app.use(express.static(path.join(__dirname, folder)));
//render index.html page
app.get('/', (request, response) => {
  response.render('index.html');
});

if (typeof PhusionPassenger !== 'undefined') {
  app.listen('passenger');
} else {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}
