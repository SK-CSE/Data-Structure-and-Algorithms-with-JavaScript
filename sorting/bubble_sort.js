function bubbleSort(arr){
  var n = arr.length;
  for(let i = 0; i< n-1; i++){
    for(let j = 0; j < n-i-1; j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
};

var a = [9, 4,2, 24,56,45,3,8];
bubbleSort(a);
console.log(a);