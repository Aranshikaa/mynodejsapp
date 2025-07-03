const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Serve static files from the 'public' directory
//app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve a specific HTML file
app.get('/aranshika', (req, res) => {
  app.use(express.static(path.join(__dirname, 'public')));
  res.sendFile((path.join(__dirname, 'public','index.html')));
});
app.get('/', (req, res) => {
  res.write("Hello how are you. I am fine thank u");
  res.end();
});
app.listen(port)
/*
app.listen(8000, () => {
  //console.log(`Server listening at http://localhost:${port}`);
});
*/
