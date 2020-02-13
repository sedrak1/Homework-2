function sign (num1, num2, num3){
	if(num1 === 0 || num2 === 0 || num3 === 0){
		console.log('Unsigned')
	} else if(num1 < 0 && num2 > 0 && num3 > 0){
		console.log('-')
	 } else if(num1 > 0 && num2 < 0 && num3 > 0){
		console.log('-')
	  } else if(num1 > 0 && num2 > 0 && num3 < 0){
		 console.log('-')
	   } else if(num1 < 0 && num2 < 0 && num3 < 0){
		  console.log('-')
	    } else {
			console.log('+')
		 }
}