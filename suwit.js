var tanya = true
while (tanya) {

var player = prompt('Silahkan Pilih : Kertas, Batu, Gunting');
var comp = Math.random();

if (comp<0.34) {
    comp = 'Kertas';
} else if (comp>=0.34 && comp < 0.67) {
    comp = 'Batu';
} else {
    comp = 'Gunting';
}

var hasil = '';

if (player == comp) {
    hasil ='SERI'
} else if  (player=='Kertas') {
    // if (comp=='Batu') {
    //     hasil = 'MENANG'
    // } else {
    //     hasil = 'KALAH'
    // }
    hasil = (comp=='Batu')  ? 'MENANG' : 'KALAH';
} else if (player=='Batu') {
    // if (comp=='Kertas') {
    //     hasil = 'Kalah'
    // } else {
    //     hasil='MENANG' 
    // }
    hasil = (comp=='Kertas') ? 'KALAH' : 'MENANG';
} else if (player=='Gunting') {
    hasil = (comp=='Kertas') ? 'MENANG' : 'KALAH';
} else {
    hasil='MEMASUKKAN PILIHAN YANG SALAH' 
}

alert('Kamu memilih ' + player + ' dan komputer memilih ' + comp + '\nMaka hasilnya = KAMU ' + hasil);

tanya = confirm('Ingin mengulang lagi?');
}

alert('Terimakasih sudah bermain :D')