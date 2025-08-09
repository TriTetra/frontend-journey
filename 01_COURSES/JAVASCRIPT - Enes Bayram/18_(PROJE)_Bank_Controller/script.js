let bakiye = 1000; // Başlangıç bakiyesi

let secim = Number(prompt(
  "Banka Uygulamasına Hoş Geldiniz!\n" +
  "1: Bakiye Görüntüle\n" +
  "2: Para Yatır\n" +
  "3: Para Çek\n" +
  "Seçiminizi yapın:"
));

switch (secim) {
  case 1:
    alert("Mevcut bakiyeniz: " + bakiye + " TL");
    break;

  case 2:
    let yatirilan = Number(prompt("Yatırmak istediğiniz miktarı girin:"));
    if (yatirilan > 0) {
      bakiye += yatirilan;
      alert("Yeni bakiyeniz: " + bakiye + " TL");
    } else {
      alert("Geçersiz miktar!");
    }
    break;

  case 3:
    let cekilen = Number(prompt("Çekmek istediğiniz miktarı girin:"));
    if (cekilen > 0 && cekilen <= bakiye) {
      bakiye -= cekilen;
      alert("Yeni bakiyeniz: " + bakiye + " TL");
    } else {
      alert("Yetersiz bakiye veya geçersiz miktar!");
    }
    break;

  default:
    alert("Geçersiz seçim!");
}
