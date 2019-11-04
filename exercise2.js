function fpb(angka1, angka2) {
    var fpbSatu = []

    if (angka1 > angka2) {
        for (var i = 1; i <= angka1; i++) {
            if ((angka1 % i === 0) && (angka2 % i === 0)) {
                fpbSatu.push(i)
            }
        }
    } else {
        for (var j = 1; j <= angka2; j++) {
            if ((angka1 % j === 0) && (angka2 % j === 0)) {
                fpbSatu.push(j)
            }
        }    
    }
    return fpbSatu[fpbSatu.length-1]
    // you can only write your code here!
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1