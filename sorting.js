function bubbleSort(array) {

    /* your code here */
    /* loop over elements
    swap anything out of order
    repeat until no swaps */

    var swapCount=1;
    var result = array;
    var left, right;

    if (array.length===0 || array.length === 1){
    	return result;
    } 

    while (swapCount>0){
	    for (var i=0; i<result.length-1; i++){
	    	left = result[i];
	    	right = result[i+1];

	    	if (right < left){
	    		result[i] = right;
	    		result[i+1] = left;
	    		swapCount++;
	    	}
	    }
	    if (swapCount===1)
	    	swapCount=0;
	    else
	    	swapCount=1;
	}

    return result;

}


function merge (array1, array2){
	var result = [];
	var lengthy;

	while(array1.length>0 && array2.length>0){
		if (array1[0]<array2[0]){
			result.push(array1[0]);
			array1.shift();	
		}
		else{
			result.push(array2[0]);
			array2.shift();
		}
	}
	if (array1.length>0){
		result = result.concat(array1);
	} else if (array2.length>0){
		result = result.concat(array2);
	}

	//console.log(result);
	return result;

}

function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    if (wholeArray.length == 1){
    	return wholeArray;
    }
    if (wholeArray === undefined){
    	return 0;
    }
    var midPoint = (wholeArray.length)/2; // what about odd numbers? if there is a value when you mod, check which one is larger and add to it
    var firstHalf = wholeArray.slice(0, midPoint);
    var secondHalf = wholeArray.slice(midPoint); // should take the remaining odd number?
    /*console.log("left " + firstHalf);
    console.log("right " + secondHalf);
    console.log([firstHalf, secondHalf]);*/
    return [firstHalf, secondHalf];
}

function mergeSort(array) {


   
    if (array.length == 1 || array.length == 0)
    	return array;

    if (array === undefined)
    	return [];

    //var a = split([1,2]);
    //console.log(a[0][0]);
    //console.log(a[0].length);
    /*console.log("input array " + array); 
    var result = split(array);
    console.log("Result after first split: " + result);
    console.log("Result 0: " + result[0]);
    console.log("Result 1: " + result[1]);
    var a = split(result[0])
     var b = split(result[1])
    console.log("split a 0: " + a[0]);
    console.log("split a 1: " + a[1]);
    console.log("split b 0: " + b[0]);
    console.log("split b 1: " + b[1]);
    result.push(a);
    result.shift();
    console.log("new result: " + result);*/

    var tempArray = split(array);
    var finalArray = [];

    if (tempArray[0].length===1){
    	for (var i=1; i<tempArray.length; i++){
    		var temp = merge(tempArray[i-1], tempArray[i]);
    		finalArray[i-1] = temp[0];
    		finalArray[i] = temp[1];
    	}
    } else if (tempArray[0].length===2){
    	// split until single digits
    	// then run merge
    	 
	 	var newArray = split(tempArray[0]);
	 	newArray = newArray.concat(split(tempArray[1]));
	    console.log("newArray: " + newArray);


    	for (var i=1; i<newArray.length; i++){
    		console.log("i-1 " + tempArray[i-1]);
    		console.log("i " + tempArray[i]);
    	    var temp = merge(tempArray[i-1], tempArray[i]);
    		finalArray[i-1] = temp[0];
    		finalArray[i] = temp[1];
    	}
    	/* 
    	for (var i=1; i<tempArray.length; i++){
    		console.log("i-1 " + tempArray[i-1]);
    		console.log("i " + tempArray[i]);
    	    var temp = merge(tempArray[i-1], tempArray[i]);
    		finalArray[i-1] = temp[0];
    		finalArray[i] = temp[1];
    	}*/

    }



   /* while (result[0].length>1){
    	for (var i=0; i<result.length; i++){
    		result.push(split(result[i]));
    		result.shift;
    	}
    } */

    return finalArray;

}
