function isAnagram(a,b){
  let x = a.toLowerCase().split('').sort().join('').trim();
  let y = b.toLowerCase().split('').sort().join('').trim();
  if(x === y){
    return true;
  }
  return false;
}

isAnagram('sfsf adsffa','a fssfsfadF')
