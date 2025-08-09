/*
    ARMSTRONG SAYISI BULMA PROJESİ

    Bu proje, kullanıcıdan alınan bir sayının Armstrong sayısı olup olmadığını belirler.
    Armstrong Sayısı: n basamaklı bir sayının basamaklarının n'inci üstlerinin toplamı, sayının kendisine eşitse bu sayıya Armstrong sayısı denir.
    Örnek: 153 (3 basamaklı) -> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
    Kullanılan Konular: prompt, while döngüsü, if-else, String(), length, ** operatörü.
*/

// 1. Kullanıcıdan Sayıyı Al
let sayiStr = prompt("Lütfen bir sayı giriniz:");
let sayi = Number(sayiStr);

let basamakSayisi = sayiStr.length;
let toplam = 0;
let geciciSayi = sayi; // Orijinal sayıyı kaybetmemek için geçici bir değişkende tutuyoruz.

// 2. Armstrong Hesaplamasını Yap
while (geciciSayi > 0) {
    // a. Son basamağı al
    let basamak = geciciSayi % 10;

    // b. Basamağın, basamak sayısı kadar üssünü al ve toplama ekle
    toplam += basamak ** basamakSayisi;

    // c. Son basamağı attığımız için sayıyı 10'a bölerek küçült
    geciciSayi = Math.floor(geciciSayi / 10); // Math.floor ile ondalıklı kısmı atıyoruz.
}

// 3. Sonucu Kontrol Et ve Ekrana Yazdır
if (toplam === sayi) {
    alert(sayi + " bir Armstrong sayısıdır.");
} else {
    alert(sayi + " bir Armstrong sayısı değildir.");
}
