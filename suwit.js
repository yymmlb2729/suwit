var tanya = true
while (tanya) {

var player = prompt('Silahkan Pilih : Kertas, Batu, Gunting');

if (player !== null) {
    player = player.toLowerCase();
}
    
var comp = Math.random();

if (comp<0.34) {
    comp = 'kertas';
} else if (comp>=0.34 && comp < 0.67) {
    comp = 'batu';
} else {
    comp = 'gunting';
}

var hasil = '';
player = player.toLowerCase().trim();
if (player == comp) {
    hasil ='SERI'
} else if  (player=='kertas') {
    // if (comp=='Batu') {
    //     hasil = 'MENANG'
    // } else {
    //     hasil = 'KALAH'
    // }
    hasil = (comp=='batu')  ? 'MENANG' : 'KALAH';
} else if (player=='batu') {
    // if (comp=='Kertas') {
    //     hasil = 'Kalah'
    // } else {
    //     hasil='MENANG' 
    // }
    hasil = (comp=='kertas') ? 'KALAH' : 'MENANG';
} else if (player=='gunting') {
    hasil = (comp=='kertas') ? 'MENANG' : 'KALAH';
} else {
    hasil='MEMASUKKAN PILIHAN YANG SALAH' 
}

alert('Kamu memilih ' + player + ' dan komputer memilih ' + comp + '\nMaka hasilnya = KAMU ' + hasil);

tanya = confirm('Ingin mengulang lagi?');
}

alert('Terimakasih sudah bermain :D')
