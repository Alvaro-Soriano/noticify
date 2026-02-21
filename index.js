const express= require('express');
const app = express();
const path = require('path');
const port = 2000;
const cors = require('cors');

app.use(cors());
app.use('/css', express.static('frontend/css'));
app.use('/js', express.static('frontend/js'));
app.use('/flags', express.static('frontend/images/flags'));

app.get('/getcountries', (req, res)=>{
	res.sendFile(path.join(__dirname, "static", 'countries.json'));
});


app.get('/',(req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "html", 'index.html'));
});

app.listen(port);
