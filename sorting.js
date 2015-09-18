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
    var midPoint = (wholeArray.length)/2; // what about odd numbers? 
    var firstHalf = wholeArray.slice(0, midPoint);
    var secondHalf = wholeArray.slice(midPoint);

    return [firstHalf, secondHalf];
}

function mergeSort(array) {

    /* your code here */

}
