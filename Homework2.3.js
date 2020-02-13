function reverse(number){
	let arr = [];
	let first;
	if(number === 0){
		console.log(number);
	}
	while(number > 0){
		arr[number.toString().length - 1] = number % 10;
		number = (number - number % 10) / 10;
	}
	first = arr[0];
	arr[0] = arr[arr.length - 1];
	arr[arr.length - 1] = first;
	console.log(arr.join(''));
}