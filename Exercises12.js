function tentukanDeretGeometri(arr) {
    var deret =[];
    var hasil = 0;
    if(arr[0] < arr[1]){
      for(var i = 0; i < (arr.length-1); i++){
        deret += arr[i+1]/arr[i];
        if(deret.length > 1 && deret[i] === deret[i-1]){
          hasil += 1;
        }
      }
      return hasil === (deret.length-1);
    }
  }

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false