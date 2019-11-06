function checkAB(num) {
    // you can only write your code here!
    var removeSpace = num.split(" ")
    var joinSplit = removeSpace.join('')
    var posisiA = 0
    var posisiB = 0
    var isA = false
    for (var i = 0; i < joinSplit.length; i++) {
        if (joinSplit[i] === 'a') {
            posisiA = i;
            isA = true
        }
        if ((isA === true) && joinSplit[i] === 'b') {
            posisiB = i;
        }
    }
    if (posisiB - posisiA === 3) {
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false