require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const axios = require('axios')

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true },));
app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views', 'views');

const server = http.createServer(app);
const port = process.env.PORT || 7001;
server.listen(port, _ => console.log('Example app listening on port :' + port));


app.get('/', async (req, res) => {
    res.render("index");
})

app.get('/dr/:doctor', async (req, res) => {
    console.log(req.params.doctor);
    let url = "https://api.cliniva.com.bd/api/v1/doctor/profile/" + req.params.doctor + "/web"
    axios.get(url)
        .then(async function (response) {
            if (response.data) {
                res.render("doctor", {
                    doctor: response.data.data,
                    params : req.params.doctor
                });
            }
        })
        // .catch(function (error) {
        //     console.log(error);
        // })
})

app.get('/pay/:id', async (req, res) => {
    console.log(req.params.id);
    res.render("pay", {
        params : req.params.id
    });
})