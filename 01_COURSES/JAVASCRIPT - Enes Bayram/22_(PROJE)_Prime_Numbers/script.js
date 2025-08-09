/*
    ASAL SAYI BULMA PROJESİ

    Bu proje, kullanıcıdan alınan bir sayının asal olup olmadığını belirler.
    Asal Sayı: Sadece 1'e ve kendisine tam bölünebilen, 1'den büyük pozitif tam sayılardır.
    Kullanılan Konular: prompt, for döngüsü, if-else, boolean, break.
*/

// 1. Kullanıcıdan Sayıyı Al
let sayi = Number(prompt("Lütfen bir sayı giriniz:"));
let isAsal = true; // Başlangıçta sayıyı asal kabul ediyoruz.

// 2. Asallık Kontrolünü Yap
if (sayi <= 1) {
    isAsal = false; // 1 ve daha küçük sayılar asal değildir.
} else {
    // 2'den başlayarak sayının kendisine kadar olan tüm sayılara bölmeyi deniyoruz.
    for (let i = 2; i < sayi; i++) {
        if (sayi % i === 0) {
            // Eğer sayı, kendisi ve 1 dışında başka bir sayıya tam bölünüyorsa asal değildir.
            isAsal = false;
            break; // Daha fazla kontrol etmeye gerek yok, döngüden çık.
        }
    }
}

// 3. Sonucu Ekrana Yazdır
if (isAsal) {
    alert(sayi + " bir asal sayıdır.");
} else {
    alert(sayi + " bir asal sayı değildir.");
}
