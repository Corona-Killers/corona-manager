const express = require('express');
const index = express.Router();

index.use('/patients', require('./patients'));

index.use('/hospitals', require('./hospitals'));

index.use('/cities', require('./cities'));

index.use('/medicine', require('./medicine'));

index.use('/symptoms', require('./symptoms'))

module.exports = index;
