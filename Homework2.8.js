function difference(number){
	let arr = [];
	while(number > 0){
		arr[number.toString().length - 1] = number % 10;
		number = (number - number % 10) / 10;
	}
	let max = arr[0];
	let min = arr[0];
	for( let i = 1; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
	for( let i = 1; i < arr.length; i++){
		if(min > arr[i]){
			min = arr[i];
		}
	}
	console.log(max - min);
}