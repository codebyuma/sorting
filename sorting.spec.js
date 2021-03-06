describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
});

describe('Bubble Sort', function(){
    it('handles an array of one element', function(){
        expect( bubbleSort([6]) ).toEqual( [6] );
    });
});

describe('Bubble Sort', function(){
    it('handles an array with two values', function(){
        expect( bubbleSort([10,8]) ).toEqual( [8,10] );
    });
});

describe('Bubble Sort', function(){
    it('handles an array with four values', function(){
        expect( bubbleSort([1,5,3,2]) ).toEqual( [1,2,3,5] );
    });
});

describe('Bubble Sort', function(){
    it('handles an odd number of values in the array', function(){
        expect( bubbleSort([99, 88, 100]) ).toEqual( [88, 99, 100] );
    });
});

describe('Bubble Sort', function(){
    it('handles an array with 8 values', function(){
        expect( bubbleSort([6,5,3,1,8,7,2,4]) ).toEqual( [1,2,3,4,5,6,7,8] );
    });
});

describe('Bubble Sort', function(){
    it('handles a sorted array', function(){
        expect( bubbleSort([1,2,3]) ).toEqual( [1,2,3] );
    });
});

describe('Bubble Sort', function(){
    it('handles an array with two of the same value', function(){
        expect( bubbleSort([1,2,1]) ).toEqual( [1,1,2] );
    });
});

describe('Bubble Sort', function(){
    it('swaps expected number of times', function(){
        var arr = [4,6,5,1];
        spyOn(window, 'swap').andCallThrough(); // andCallThrough ensures that the original swap that we're replacing with a spy with will still be run
        bubbleSort(arr);
        var numSwaps = swap.callCount;
        expect(numSwaps).toEqual(4);
    });
});
describe('Bubble Sort', function(){
    it('compares expected number of times', function(){
        
    });
});
describe('Bubble Sort', function(){
    it('sorts in place', function(){
        
    });
});

/*
what a spy does:

// without callThrough
function spyOn (obj, methodName){
    function spiedMethod(){ // function that we're treating like an object by adding this callcount property on it
        spiedMethod.callCount = spiedMethod.callCount || 0; // either use what you already have or use zero. every time the function is run, it will change
        spiedMethod.callCount++;
    }
    obj[methodName] = spiedMethod; // window['swap'] = spiedMethod;
}

swap(); // will run the swap in bubblesort
spyOn(window, 'swap');
swap(); // will run spiedMethod above because it was replaced in the above line
swap.callCount = 1;

// with call through
function spyOn (obj, methodName){
    var original = obj[methodName];
    function spiedMethod(){ // function that we're treating like an object by adding this callcount property on it
        spiedMethod.callCount = spiedMethod.callCount || 0; // either use what you already have or use zero. every time the function is run, it will change
        spiedMethod.callCount++;
        return original.apply(this, arguments); // will invoke the original and chains along any arguments 
    }
    obj[methodName] = spiedMethod; // window['swap'] = spiedMethod;
}

*/


/*work with your partner to create test cases for single items 
and multiple items. As an exercise, you should also keep track of 
how many comparisons and swaps are done for each bubble sort*/


describe ('Merge sort', function (){

    describe('halve', function (){

        if ('given one array, returns two arrays', function (){
            expect(halve([])).toEqual([[],[]]);

        });

        if ('given one array, returns two arrays', function (){
            expect(halve([[5,10]])).toEqual([[5],[10]]);
            
        });
        if ('given one array, returns two arrays', function (){
            expect(halve([[4,10,20]])).toEqual([[4],[10, 20]]);
        });


    });

    describe('merge', function (){

        if ('given two arrays, returns an array', function (){

            /* grab all tests from github after...*/
        })


    });




});



describe('Merge', function(){
    it('is able to merge two sorted arrays in order', function(){
        expect( merge([1,2,3], [4,5,6]) ).toEqual( [1,2,3,4,5,6] );
    });
});

describe('Merge', function(){
    it('is able to merge two sorted arrays with different ranges', function(){
        expect( merge([1,2,8], [3,5,6]) ).toEqual( [1,2,3,5,6,8] );
    });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,8,3,5,6]) ).toEqual( [[1,2,8], [3,5,6]] );
  });
});

describe('Merge Sort', function(){
    it('is able to sort an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
});

describe('Merge Sort', function(){
    it('is able to sort a single value array', function(){
        expect( mergeSort([6]) ).toEqual( [6] );
    });
});

describe('Merge Sort', function(){
    it('is able to sort two values in an array', function(){
        expect( mergeSort([88,1]) ).toEqual( [1,88] );
    });
});

describe('Merge Sort', function(){
    it('is able to sort two values in an array', function(){
        expect( mergeSort([88,1,3,2]) ).toEqual( [1,2,3,88] );
    });
});

describe('Merge Sort', function(){
    it('is able to merge two arrays', function(){
        expect( mergeSort([2,3,4,8,1,10]) ).toEqual( [,1,2,3,4,8,10] );
    });
});