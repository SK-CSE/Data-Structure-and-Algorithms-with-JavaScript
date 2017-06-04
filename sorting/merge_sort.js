function merge( arr,  l,  m,  r)
{
    var i, j, k;
    var n1 = m - l + 1;
    var n2 =  r - m;
 
    /* create temp arrays */
    var L = [];
    var R = [];
 
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1+ j];
 
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray
    j = 0; // Initial index of second subarray
    k = l; // Initial index of merged subarray
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    /* Copy the remaining elements of L[], if there
       are any */
    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    /* Copy the remaining elements of R[], if there
       are any */
    while (j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r){
    if (l < r){
        // Same as (l+r)/2, but avoids overflow for
        // large l and h
        var m = Math.floor((l+r)/2);
 
        // Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
 
        merge(arr, l, m, r);
    }
}

// var a = [9, 4, 2, 24, 56, 45, 3, 8];
var a = [12, 11, 13, 5, 15, 6, 7];

mergeSort(a, 0, a.length - 1);
console.log(a);
