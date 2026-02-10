const express= require('express');
const app = express();
const path = require('path');
const port = 2000;

app.use('/css', express.static('frontend/css'));
app.use('/js', express.static('frontend/js'));


app.get('/',(req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "html", 'index.html'));
});
app.get('/freesearch',(req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "html", 'freesearch.html'));
});
app.get('/map',(req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "html", 'map.html'));
});
app.get('/stats',(req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "html", 'stats.html'));
});
app.get('/config',(req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "html", 'config.html'));
});

app.listen(port);
