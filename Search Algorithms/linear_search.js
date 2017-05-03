function linearSearch (arr,x){
  for(var i in arr){
    if(arr[i]==x)
      return i
  }
  return -1
}

var a = [1,2,3,4,5,6];
var x = process.argv[2];
var index = linearSearch(a,x);

(index !== -1)?console.log(`${x} found at index ${index}`):console.log(`${x} not present`);

/*if(index !== -1)
console.log(`${x} found at index ${index}`);
else
console.log(`${x} not present`);*/