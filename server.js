const express = require('express');
const path = require('path');
const forceSSL = require('force-ssl-heroku');
const app = express();
app.use(forceSSL);
app.use(express.static(__dirname + '/dist/portfolio-site'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/portfolio-site/index.html'));});
app.listen(process.env.PORT || 8080);
