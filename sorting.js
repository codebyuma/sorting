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

/* solution & comments 

function swap (arr, indexA, indexB){  // create own function and then spy on it in the test, to tell how many times it was called.
	var oldElem = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = oldElem;
};

function bubbleSort (arr){
	//var sorted = [];

	var swapHappenedLastTime = true;

	while (swapHappenedLastTime){
		wapHappenedLastTime = false;
		for (var i = 0; i<arr.length-1; i++){
			if (arr[i]>arr[i+1]){
				swap(arr, i, i+1);
				swapHappenedLastTime = true;
			
			}
		}
	}
	return arr;
}



*/




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

/*

function merge (left, right){

	var merged = [];
	
	//for (var i =0; i<left.length; i++){
	//	if (left[i]<right[i])
	//		merged.push(left[i], right[i]);
	//	else
	//		merged.push(right[i], left[i]);
	//}

	var leftIndex = 0;
	var rightIndex = 0;

	while (leftIndex<left.length || rightIndex < right.length){
		if (left[leftIndex]<right[rightIndex] || right[rightIndex] === undefined){
			merged.push(left[leftIndex]);
			leftIndex++;
		} else{
			merged.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return merged;
}

OR:

var merged = [];
while (left.length && right.length){

	if (left[0]<right[0])
		merged.push(left.shift());
	else
		merged.push(right.shift());

}

return merged.concat(left).concat(right);


*/

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

/*

function halve (arr){
	var left = [], right = [];
	//for (var i = 0; i<arr.length/2; i++){
	//	left.push(arr[i]);
	//}
	//for (var =arr.length/2; i<arr.length; i++){
   //		right.push(arr[i]);
	//}

	var middle = arr.length/2;
	left = arr.slice(0, middle);
	right = arr.slice(middle);

	return [left, right];

}


*/



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

/*

function mergeSort(unsorted){

	if (unsorted.length<2){
		return unsorted;
	}
	
	var halves = halve(unsorted); // split into two halves
	var left = halves[0];
	var right = halves[1];

	var sortedLeft = mergeSort(left); // run mergeSort on each
	var sortedRight = mergeSort(right);

	return merge(sortedLeft, sortedRight); // return the merged halves
}


*/



