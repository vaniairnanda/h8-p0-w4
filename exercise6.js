function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var result = 0 
    var arrBaru = []
    var digitAngka = 0
    var jumlahDigit = ''
    var pairAngka = []
    for (var i = 1; i <= angka; i++) {
        for (var j = angka; j >= 1; j--)
        if (i * j === angka) {
            arrBaru.push(String(i)+String(j))
        }
    }
    for (var i = 0; i < arrBaru.length; i++) {
        for (var j = i+1; j < arrBaru.length; j++) {
            if (arrBaru[i].length < arrBaru[j].length) {
                var temp = arrBaru[j]
                arrBaru[j] = arrBaru[i]
                arrBaru[i] = temp
            }
        }
    }
    return arrBaru[(arrBaru.length-1)].length

}
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2