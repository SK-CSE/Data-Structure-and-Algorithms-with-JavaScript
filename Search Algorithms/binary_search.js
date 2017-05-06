// Recursive implementation of Binary Search

function binarySearch (arr, first, last, x){
  if(last>=first){

    var mid = Math.floor((first + last)/2, 10);

    if(arr[mid] == x)
      return mid;
    if(arr[mid] > x)

      return binarySearch(arr,first,mid-1,x);
      return binarySearch(arr,mid+1,last,x)
  }
  return -1

}

var a = [1,2,3,4,5,6,7];
var x = process.argv[2];

var index = binarySearch(a, 0, a.lenght-1, x);

(index == -1)?console.log(`${x} not present`):console.log(`${x} found at index ${index}`);

/*if(index !== -1)
console.log(`${x} found at index ${index}`);
else
console.log(`${x} not present`);*/

// **************************************************************

// Iterative implementation of Binary Search

function binarySearch(arr, x) {
    var first = 0,
        last = arr.length - 1,
        mid,
        element;
    while (first <= last) {
        mid = Math.floor((first + last) / 2, 10);
        element = arr[mid];
        if (element < x) {
            first = mid + 1;
        } else if (element > x) {
            last = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

var a = [1,2,3,4,5,6,7];
var x = process.argv[2];

var index = binarySearch(a,x);

(index == -1)?console.log(`${x} not present`):console.log(`${x} found at index ${index}`);

/*if(index !== -1)
console.log(`${x} found at index ${index}`);
else
console.log(`${x} not present`);*/