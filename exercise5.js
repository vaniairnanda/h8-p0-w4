function ubahHuruf(kata) {
    // you can only write your code here!

        var hasil = '';
        var karakter = 0;
    
        for (var i = 0; i < kata.length; i++) {
            karakter = (kata[i].charCodeAt()) + 1;
            hasil += String.fromCharCode(karakter);
        }
        return hasil;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu