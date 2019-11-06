function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var start = 0
    var end = 0
    var result = []
    for (var i = 0; i < arrPenumpang.length; i++) {
            var object = {
                penumpang : arrPenumpang[i][0],
                naikDari : arrPenumpang[i][1],
                tujuan : arrPenumpang[i][2],
                bayar : 0,
            }
            for (var x = 0; x < rute.length; x++) {
                    if (rute[x] === arrPenumpang[i][1]) {
                        start = x;
                    }
                    if (rute[x] === arrPenumpang[i][2]) {
                        end = x;
                    }

                
            }
    
            object["bayar"] = ((end - start) * 2000)
            result.push(object)
            
    
  }
  
  return result
}  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]