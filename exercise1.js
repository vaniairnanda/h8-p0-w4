function angkaPrima(angka) {
  // you can only write your code here
  if (angka <= 1) {
      return 'Invalid number'
  } else if (angka === 3 ) {
      return true
  } else {
    for (var i = 3; i < angka; i++) {
        if (angka % i === 0) {
            return false
            break
        } 
            return true
        
    }
  }
  
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false