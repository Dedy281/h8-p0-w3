function groupAnimals(animals) {
    var hasil = [[]];
    var kelompok = 0;
    animals.sort();
    hasil[0].push(animals[0])
    
    for (var i = 1; i < animals.length; i++) {
      if (animals[i][0] === hasil[kelompok][0][0]) {
        hasil[kelompok].push(animals[i])
      } else {
        kelompok++;
        hasil[kelompok] = [animals[i]];
      }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]