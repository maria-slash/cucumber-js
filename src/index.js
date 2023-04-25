const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// defining the Express app
const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// defining an endpoint to return all ads
app.get('/name/:name', (req, res) => {
  res.status("200")
  res.json({
    title: `Hello, ${req.params.name} (again)!`
  });
});

app.post('/', (req, res) => {
  res.status("200")
  res.json({
    title: `Hello, ${req.body.title} (again)!`
  });
});

// starting the server
app.listen(4001, () => {
  console.log('listening on port 4001');
});