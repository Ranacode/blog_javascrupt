const express = require('express');
const app = express();
const path = require('path');

let port = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname,'/')));

app.set('views', __dirname + '/lib/views')
app.set('view-engine', 'jade');


app.get('/public', function(request, response) {
  response.render('index');
})

app.listen(port, function() {
  console.log(`Server listening on port ${port}`)
})
