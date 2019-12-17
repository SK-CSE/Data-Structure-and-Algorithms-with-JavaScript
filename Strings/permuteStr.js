 function permute(str) {
  let ret = [];

  // permutation for one or two characters string is easy:
  // 'a'  -> ['a']
  // 'ab' -> ['ab', 'ba']
  if (str.length === 1) return [str];
  if (str.length === 2) return [str, str[1]+str[0]];

  // otherwise combine each character with a permutation
  // of a subset of the string. e.g. 'abc':
  //
  // 'a' + permutation of 'bc'
  // 'b' + permutation of 'ac'
  // 'c' + permutation of 'ab'
  str.split('').forEach(function (chr, idx, arr) {
    var temp = arr.slice(); // "clone" arr
    temp.splice(idx, 1); // remove element from that index
    console.log('*',temp) // remaining element in array
    permute(temp.join('')).forEach(function (perm) {
      ret.push(chr  + perm);
    });
  });

  return ret;
}
permute('abc')
