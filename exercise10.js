function changeMe(arr) {
    // you can only write your code here!
    if (arr.length === 0) {
        return '""'
    } else {
        var umur = 0
        for (var i = 0; i < arr.length; i++) {
                var hasil = i+1 + '.' + arr[i][0] + ' ' + arr[i][1] + ":"
                if (arr[i][3] !== undefined) {
                    umur = 2019 - arr[i][3]
                } else { 
                    umur = 'Invalid Birth Year'
                }
                var result = {
                    firstName : arr[i][0],
                    lastName : arr[i][1],
                    gender : arr[i][2],
                    age : umur,
                }
                console.log(hasil, result)
      }
    }
}
  // TEST CASES
 changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  console.log(changeMe([])); // ""