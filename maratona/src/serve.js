const express = require("express");
const serve = express();
const routes = require('./routes.js');
const path = require("path")

// usar template engine
serve.set('view engine', 'ejs')
serve.set('views', path.join(__dirname, 'views'))



// habilitar arquivos estaticos
serve.use(express.static("public"))
// usar req.body
serve.use(express.urlencoded({extended:true}))
serve.use(routes);

serve.listen(3030)
console.log("rodando")