// nodemon package can auto restart the server after every save
const { format} = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date() , 'yyyyMMdd\tHH:mm:ss'))

console.log(uuid())