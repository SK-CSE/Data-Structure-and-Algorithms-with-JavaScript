function minJump2ReachEnd(arr){
  if(arr.length <= 1){
    return 0;
  }

  if(arr[0] === 0){
    return -1;
  }

  let maxReach = arr[0];
  let step = arr[0];
  let jump = 1;

  for (let i = 1; i < arr.length; i++){
    if(i === arr.length - 1){
      return jump;
    }

    maxReach = Math.max(maxReach, i + arr[i]);
    step--;

    if(step === 0){
      jump++;
      if(i >= maxReach){
        return -1;
      }
      step = maxReach - 1;
    }
  }
}

let r = minJump2ReachEnd([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]);
console.log(r);
