

var extract = function(input) {
	
	var argv = require('minimist')(process.argv.slice(2));
	var obj = JSON.parse(input)
	
	if(!argv['package'] || !argv['location']) {
		console.error("use like: add-dependency-to-package package.json --package <package-name> --location <location path>");
		return input
	}
	
	if(!obj.dependencies) {
		obj.dependencies = {}
	}
	
	obj.dependencies[argv['package']] = argv['location']
	return JSON.stringify(obj, null, "\t")
	
}

module.exports = extract