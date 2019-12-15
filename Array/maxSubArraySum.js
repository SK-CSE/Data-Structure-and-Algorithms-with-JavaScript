var a = [1,2,-3,4];

function maxSubArraySum(a) {
    var sum = Number.MIN_SAFE_INTEGER;
    var tempSum = 0;
    var start = 0;
    var end = 0;
    var s = 0;
    for (var i = 0; i < a.length; i++) {
        tempSum += a[i];
        if (sum < tempSum) {
            sum = tempSum;
            start = s;
            end = i;
        }
        if (tempSum < 0) {
            tempSum = 0;
            s = i + 1;
        }
    }

    console.log("Maximum contiguous sum is " + sum);
    console.log("Starting index " + start);
    console.log("Ending index " + end);
}

maxSubArraySum(a);
