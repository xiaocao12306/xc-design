const { resolve } = require('path');
const path = require('path')
module.exports = function override (config, env) {
  //do stuff with the webpack config...
	config.entry = {
		alert: path.resolve(__dirname, '../src/components/Alert'),
		button:path.resolve(__dirname,'../src/components/Button')
	}
	config.output = {
		path: resolve('lib'),
		filename: '[name]/index.js',
		library: 'xc-ui',
		libraryTarget:'umd'
	}
  return config;
}