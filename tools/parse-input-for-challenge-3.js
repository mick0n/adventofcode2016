const fs = require('fs');

fs.readFile('challenge_3_data.txt', function(error, data) {
	if (error) throw error;
	var rows = data.toString().split('\r\n');

	var outputString = '';
	rows.forEach(function(row) {
		row = row.trim().replace(/\s+/g, '-').split('-').join(',');
		outputString += '[' + row + '],';
	});
	console.log(outputString);
});