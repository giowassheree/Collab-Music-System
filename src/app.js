//app.js

const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});

console.log("App is set up and ready to go!");

