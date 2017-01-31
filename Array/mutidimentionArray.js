// JavaScript arrays are only one-dimensional, but you can create multidimensional arrays by creating arrays of arrays.
Array.matrix = function(numrows, numcols, initial) {
   var arr = [];
   for (var i = 0; i < numrows; ++i) {
      var columns = [];
      for (var j = 0; j < numcols; ++j) {
         columns[j] = initial;
      }
      arr[i] = columns;
   }
   return arr;
}
var nums = Array.matrix(6,6,0);
console.log(nums[1][1]); // displays 0
console.log(nums);  /*[ [ 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0 ] ] */