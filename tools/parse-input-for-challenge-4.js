const fs = require('fs');

fs.readFile('challenge_4_data.txt', function(error, data) {
	if (error) throw error;
	var rows = data.toString().split('\r\n');

	var outputString = '';
	rows.forEach(function(row) {
		outputString = outputString + '\'' + row.trim() + '\',';
	});
	fs.writeFile('challenge_4_data.txt', outputString, function() {
		if (error) throw error;
	});
});