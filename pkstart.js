const pk = require('./pk');

require('dotenv').config({path: 'variables.env'});

pk.set('port', process.env.PORT);

const server = pk.listen(pk.get('port'), () => {
  console.warn(`projectk is running on ${server.address().port}`);
})
