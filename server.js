/* External modules */
const express = require('express');

/* Internal modules */

/* Instanced modules */
const app = express();

/* Configuration */
const PORT = 3000;

/* Middleware */

/* Routes */


app.listen(PORT, () => {
  console.log(`Listening for client requests at http://localhost:${PORT}`);
})