var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", 
              "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input[1] = "Roman Alamsyah Elsharawy";
  input[2] = "Provinsi Bandar Lampung";
  input[4] = "Pria";
  input[5] = "SMA Internasional Metro";
  console.log(input);

  var date = input[3].split('/');

  var bulan = "";
  switch(Number(date[1])) {
    case 01 :
      bulan = "Januari";
    break;
    case 02 :
      bulan = "Februari";
    break;
    case 03 :
      bulan = "Maret";
    break;
    case 04 :
      bulan = "April";
    break;
    case 05 :
      bulan = "Mei";
    break;
    case 06 :
      bulan = "Juni";
    break;
    case 07 :
      bulan = "Juli";
    break;
    case 08 :
      bulan = "Agustus";
    break;
    case 09 :
      bulan = "September";
    break;
    case 10 :
      bulan = "Oktober";
    break;
    case 11 :
      bulan = "November";
    break;
    case 12 :
      bulan = "Desember";
    break;
    default :
      bulan = "Invalid";
    break;
  }
  console.log(bulan);

  var urutkan = date.sort(function(x, y) { return y - x });
  console.log(urutkan);

  var date2 = input[3].split('/');
  console.log(date2.join('-'));

  var nama15 = input[1].slice(0, 15);
  console.log(nama15);
}

dataHandling2(input);