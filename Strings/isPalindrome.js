function isPalin(str){
  let i = 0;
  let l = str.length - 1;
  while(l > i){
    if(str[i++] !== str[l--]){
      return false;
    }
  }
  return true;
}

isPalin('101')
