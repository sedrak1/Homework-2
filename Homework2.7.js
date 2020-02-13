function area(figure, height, base){
	if(height * base === 0 || height < 0 || base < 0){
		console.log('Please enter only positives');
	} else if(figure === 'triangle'){
		console.log(`Square of the triangle is ${height * base / 2}`);
	} else if(figure === 'rectangle'){
		console.log(`Square of the rectangle is ${height * base}`);
	} else{
		console.log(`incorrect input`);
	}
}