function mengelompokkanAngka(arr) {
    // defenisikan rHasil sebagai array yang menyimpan 3 array
    var rHasil = [[],[],[]];
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0) {
          rHasil[2].push(arr[i]);
          continue;
        }
        if (arr[i] % 2 !== 0) {
          rHasil[1].push(arr[i]);
          continue;
        }
        if (arr[i] % 2 === 0) {
          rHasil[0].push(arr[i]);
          continue;
        }
    }
    return rHasil;
  }
  
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]