const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));









app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });