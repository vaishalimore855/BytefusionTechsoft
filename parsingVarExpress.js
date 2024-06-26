/**********************************Parsing variables using Express.js******************* */

const express = require('express');
const app = express();

app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const queryParameters = req.query;

  res.send(`Product ID: ${productId}, Query Parameters: ${JSON.stringify(queryParameters)}`);
});

app.listen(3000);
/*************************************************************************************** */
