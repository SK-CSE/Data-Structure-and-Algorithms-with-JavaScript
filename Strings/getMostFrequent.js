function getMostFrequent(arr){
  let freq = {};
  for(let item of arr){
    if(!freq[item]){
      freq[item] = 1;
    }else{
      freq[item] += 1; 
    }
  }
  let maxFreq = 0;
  let element = "";
  for(let i in freq){
    if(freq[i] > maxFreq){
      maxFreq = freq[i];
      element = i;
    }
  }
  console.log(`most frequesnt element is ${element} which appears ${maxFreq} times`)
}

getMostFrequent([3,3, 2, 1, 4, 1])
