function urutkanAbjad(str) {
    // you can only write your code here!
    var arrBaru = [];
    var result = '';
    for (var i = 0; i < str.length; i++) {
        arrBaru.push(str[i])
    }
    arrBaru.sort()
    var arrGabung = [[]]
    for (var i = 0; i < arrBaru.length; i++) {
       result += arrBaru[i].toString()
       
    }
    return result
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'