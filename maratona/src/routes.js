const express = require("express");
const routes = express.Router();
const profileController = require('./controllers/profileController');
const jobController = require('./controllers/jobController')
const desboardController = require('./controllers/desboardController')

// Rotas de configuração da aplicação

routes.get('/', desboardController.index)
routes.get('/job', jobController.ligar)
routes.post('/job', jobController.create )
routes.get('/job/:id',jobController.show)
routes.post('/job/:id', jobController.updat)
routes.post('/job/delete/:id', jobController.delete)
routes.get('/profile', profileController.index)
routes.post('/profile', profileController.updat)


module.exports = routes;