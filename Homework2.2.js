function digitNum(digit, number){
	let result = 'No';
	let arr = [];
	while(number > 0){
		arr[number.toString().length - 1] = number % 10;
		number = (number - number % 10) / 10;
	}
	for(let i = 0; i < arr.length; i++){
		if(digit === arr[i]){
			result = 'Yes';
			break;
		} 
	} 
	console.log(result);
}