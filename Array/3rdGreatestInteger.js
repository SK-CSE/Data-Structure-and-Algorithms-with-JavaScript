const b = [12, 13, 1, 10, 34, 16];

function tge(a){
  var f = a[0]; 
  var s = Number.MIN_SAFE_INTEGER;
  var t = Number.MIN_SAFE_INTEGER;
  for(let i = 1; i< a.length; i++){
    if(a[i]>f){
      f = a[i];
      s = f;
      t = s;
    }else if(a[i] > s){
      s = a[i];
      t = s;
    }else if(a[i] > t){
      t = a[i];
    }
  }
  console.log(f,s,t)
}
tge(b);
