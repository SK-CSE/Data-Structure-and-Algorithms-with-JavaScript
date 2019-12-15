function printSpiralMatrix(arr){

      let starting_row_idx = 0;
      let ending_row_idx = arr.length;
      let starting_col_idx = 0;
      let ending_col_idx = arr[0].length;

      while(starting_row_idx < ending_row_idx && starting_col_idx < ending_col_idx){
        // Print the first row from the remaining rows
        for (let i = starting_col_idx; i< ending_col_idx; i++){
          console.log(arr[starting_row_idx][i])
        } 
        starting_row_idx++;
        // Print the last column from the remaining columns
        for(let i = starting_row_idx; i < ending_row_idx; i++){
          console.log(arr[i][ending_col_idx - 1]);
        }
        ending_col_idx--;
        // Print the last row from the remaining rows
        if(starting_row_idx < ending_row_idx){
          for (let i = ending_col_idx - 1; i >= starting_col_idx; i--){
            console.log(arr[ending_row_idx - 1][i]);
          }
        }
        ending_row_idx--;
        // Print the first column from the remaining columns
        if(starting_col_idx < ending_col_idx){
          for(let i = ending_row_idx - 1; i > starting_col_idx; i--){
            console.log(arr[i][starting_col_idx])
          }
        }
        starting_col_idx++;
      } 
}

const arr = [
              [ 1, 2, 3, 4, 5, 6 ], 
              [ 7, 8, 9, 10, 11, 12 ], 
              [ 13, 14, 15, 16, 17, 18 ] 
            ];

 printSpiralMatrix(arr);   //1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11
