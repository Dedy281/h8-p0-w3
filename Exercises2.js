function balikString (kata) {
    var print = '';
    for (i = (kata.length-1); i >= 0; i--){
        print = print + kata[i]
    }
    return print;
}

console.log(balikString('Hello world!'));