const express = require('express');
const path = require('path');
const errorHandlers = require('./utils/errorHandlers');


const pk = express();

pk.use(express.static(__dirname + '/public'));
pk.set('views', path.join(__dirname, 'views'));
pk.set('view engine', 'pug');

pk.use(errorHandlers.notFound);

if (pk.get('env') === 'development') {
  pk.use(errorHandlers.developmentErrors);
}

pk.use(errorHandlers.productionErrors);

module.exports = pk;
