function cariModus(arr) {
    // you can only write your code here!
    var temp = '';
    var arrBaru = [];
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i];
        for (var j= 0; j <= arrBaru.length; j++)
        if (!arrBaru[j]) {
            arrBaru[j] = []
            arrBaru[j].push(temp)
            break
        } else if (temp === arrBaru[j][0]) {
            arrBaru[j].push(temp)
            break
        }
    } 
    for (var a = 0; a < arrBaru.length; a++) {
        for (var b = a+1; b < arrBaru.length; b++) {
            if (arrBaru[b].length < arrBaru[a].length) {
                var urut = arrBaru[b]
                arrBaru[b] = arrBaru[a]
                arrBaru[a] = urut;
            }
        }
    }
    if(arrBaru[0][0] === arrBaru[0][1] || arrBaru[arrBaru.length-1].length <= 1) {
        return -1
    } else {
        return arrBaru[arrBaru.length-1][1]
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1