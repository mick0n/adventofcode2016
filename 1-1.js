var directions = 'R4, R4, L1, R3, L5, R2, R5, R1, L4, R3, L5, R2, L3, L4, L3, R1, R5, R1, L3, L1, R3, L1, R2, R2, L2, R5, L3, L4, R4, R4, R2, L4, L1, R5, L1, L4, R4, L1, R1, L2, R5, L2, L3, R2, R1, L194, R2, L4, R49, R1, R3, L5, L4, L1, R4, R2, R1, L5, R3, L5, L4, R4, R4, L2, L3, R78, L5, R4, R191, R4, R3, R1, L2, R1, R3, L1, R3, R4, R2, L2, R1, R4, L5, R2, L2, L4, L2, R1, R2, L3, R5, R2, L3, L3, R3, L1, L1, R5, L4, L4, L2, R5, R1, R4, L3, L5, L4, R5, L4, R5, R4, L3, L2, L5, R4, R3, L3, R1, L5, R5, R1, L3, R2, L5, R5, L3, R1, R4, L5, R4, R2, R3, L4, L5, R3, R4, L5, L5, R4, L4, L4, R1, R5, R3, L1, L4, L3, L4, R1, L5, L1, R2, R2, R4, R4, L5, R4, R1, L1, L1, L3, L5, L2, R4, L3, L5, L4, L1, R3'.split(', ');

var d = 0; //0N, 1E, 2S, 3W
var x = 0, y = 0;

for (var i = 0; i < directions.length; i++) {
	var direction = directions[i].substr(0, 1);
	var distance = directions[i].substr(1, directions[i].length);

	if (direction === 'L') {
		d = d === 0 ? 3 : d - 1;
	} else if (direction === 'R') {
		d = d === 3 ? 0 : d + 1;
	}

	switch(d) {
	case 0: y -= parseInt(distance); break;
	case 1: x += parseInt(distance); break;
	case 2: y += parseInt(distance); break;
	case 3: x -= parseInt(distance); break;
	}

	console.log('Moving ' + directions[i] + ' to ' + x + 'x' + y);
}

var dist = Math.abs(x) + Math.abs(y);
console.log(dist);