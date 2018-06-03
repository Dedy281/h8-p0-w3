function angkaPalindrome(num){
    
    for(var i = 0; i < num; i++){
    num++;

    var angka = String(num);

    var print = '';
    for(var j = (angka.length-1); j >= 0; j--){
        print = print + angka[j];
    }
    if (print === angka){
        return num;
    }
}
}


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(112)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001