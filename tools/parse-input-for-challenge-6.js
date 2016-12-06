const fs = require('fs');

fs.readFile('challenge_6_data.txt', function(error, data) {
	if (error) throw error;
	var rows = data.toString().split('\r\n');

	var outputString = '';
	rows.forEach(function(row) {
		outputString = outputString + '[';
		var first = true;
		row.trim().split('').forEach(function(token) {
			if (first) {
				outputString = outputString + '\'' + token + '\'';
				first = false;
			} else {
				outputString = outputString + ',\'' + token + '\'';
			}
		});
		outputString = outputString + '],';
	});
	fs.writeFile('challenge_6_data_output.txt', outputString, function() {
		if (error) throw error;
	});
});