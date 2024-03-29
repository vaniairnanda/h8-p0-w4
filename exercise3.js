function cariMedian(arr) {
    // you can only write your code here!
    var med = 0; 
    var avg = 0
    if (arr.length % 2 !== 0) {
        med = Math.round(arr.length/2);
        return arr[med-1]
    } else {
        med = Math.round(arr.length/2);
        avg = (arr[med] + arr[med-1]) / 2
        return avg
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5