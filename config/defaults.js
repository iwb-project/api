// default configuration

var definitions = require('./definitions');

var defaults = {
	app: {
		name: definitions.name, 
		version: definitions.version, 
		repository: definitions.repository.url, 
		license: definitions.license, 
		dependencies: definitions.dependencies
	}, 
	http: {
		address: "",
		port: 8080
	}, 
	https: {
		address: "", 
		port: 8443
	}
};

module.exports = defaults;