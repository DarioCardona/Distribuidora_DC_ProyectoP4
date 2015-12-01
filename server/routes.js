var loginController = require('./controllers/loginController');
var usuarioController = require('./controllers/usuarioController');



exports.endpoints = [{method: 'GET', path: '/{param*}', config: loginController.login},
					 {method: 'GET', path: '/v1/usuarios', config: usuarioController.getusuario},
           {method: 'POST', path: '/usuario', config: usuarioController.createusuario}];
