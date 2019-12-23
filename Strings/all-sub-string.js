
function getAllSubstrings(str) {
  let i, j, result = [];

  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
          result.push(str.slice(i, j));
      }
  }
  return result;
}

var str = "some";
console.log(getAllSubstrings(str)); // [ 's', 'so', 'som', 'some', 'o', 'om', 'ome', 'm', 'me', 'e' ]
