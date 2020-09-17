/* External modules */
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

/* Internal modules */
const db = require('./models');

/* Instanced modules */
const app = express();

/* Configuration */
const PORT = 3000;

/* Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('method-override'));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
})

/* Routes */
app.use('/', (req, res) => {
  res.render('index.ejs');
})

app.listen(PORT, () => {
  console.log(`Listening for client requests at http://localhost:${PORT}`);
})