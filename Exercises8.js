function pasanganTerbesar(num){
    var angka = num.toString().split('');
    var print = [];
    for(var i = 0; i < angka.length-1; i++){
       print[i] = Number(angka[i] + angka[i+1]);
    }
    var display = print[0];
    for(var j = 1; j < print.length; j++){
        if(print[j] > display){
            display = print[j];
        }
    }
    return display;
}    
        
    

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99