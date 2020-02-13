function quadEq(a, b, c){
	const d = Math.pow(b, 2) - 4 * a * c;
	if(a === 0){
		console.log('Enter valid constans');
	} else if(d === 0){
		console.log(`Solution is ${-b / (2 * a)}`)
	} else if(d < 0){
		console.log(`Solution does not exists`)
	} else {
		console.log(`Solutions are ${(-b - Math.sqrt(d)) / (2 * a)} and ${(-b + Math.sqrt(d)) / (2 * a)}`)
	}
}