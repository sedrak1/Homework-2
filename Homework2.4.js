function sort(num1, num2, num3){
	let arr = [num1, num2, num3];
	for(let i = 0; i < 2; i++){
		if(arr[i] > arr[i + 1]){
			arr[i] = arr[i] + arr[i + 1];
			arr[i + 1] = arr[i] - arr[i + 1];
			arr[i] = arr[i] - arr[i + 1];
		}
		if(arr[0] > arr[1]){
			arr[0] = arr[0] + arr[1];
			arr[1] = arr[0] - arr[1];
			arr[1] = arr[0] - arr[1];
		}
	}
	console.log(arr);
}