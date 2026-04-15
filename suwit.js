function main(player) {

  var comp = Math.random();

  if (comp < 0.34) {
    comp = 'Kertas';
  } else if (comp < 0.67) {
    comp = 'Batu';
  } else {
    comp = 'Gunting';
  }

  var hasil = '';

  if (player == comp) {
    hasil = 'SERI';
  } else if (player == 'Kertas') {
    hasil = (comp == 'Batu') ? 'KAMU MENANG' : 'KAMU KALAH';
  } else if (player == 'Batu') {
    hasil = (comp == 'Kertas') ? 'KAMU KALAH' : 'KAMU MENANG';
  } else if (player == 'Gunting') {
    hasil = (comp == 'Kertas') ? 'KAMU MENANG' : 'KAMU KALAH';
  }

  document.getElementById("textPlayer").innerText = "Kamu : " + player;
  document.getElementById("textComp").innerText = "Komputer : " + comp;
  document.getElementById("textHasil").innerText = hasil;

  document.getElementById("pilihBox").classList.add("hidden");
  document.getElementById("hasilBox").classList.remove("hidden");
}

function lanjut() {
  document.getElementById("hasilBox").classList.add("hidden");
  document.getElementById("ulangBox").classList.remove("hidden");
}

function ulang() {
  document.getElementById("ulangBox").classList.add("hidden");
  document.getElementById("pilihBox").classList.remove("hidden");
}

function selesai() {
  document.getElementById("ulangBox").innerHTML = "<h2>TERIMAKASIH SUDAH BERMAIN</h2>";
}
