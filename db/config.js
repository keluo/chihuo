var config = require('./config.json')  
    , env = process.env.NODE_ENV || 'development';
    console.log(process.env.NODE_ENV);
  
  
var envConfig = config.environment[env], i;  
  
for (i in envConfig) {  
    config[i] = envConfig[i];  
}  
  
module.exports = config;