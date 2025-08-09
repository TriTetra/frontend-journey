/*
    FAKTÖRİYEL HESAPLAMA PROJESİ

    Bu proje, kullanıcıdan alınan bir sayının faktöriyelini hesaplar.
    Faktöriyel (n!): 1'den n'ye kadar olan pozitif tam sayıların çarpımıdır. (Örn: 5! = 1 * 2 * 3 * 4 * 5 = 120)
    Kullanılan Konular: prompt, for döngüsü, if-else.
*/

// 1. Kullanıcıdan Sayıyı Al
let sayi = Number(prompt("Faktöriyelini hesaplamak istediğiniz bir sayı giriniz:"));
let faktoriyel = 1; // Çarpma işleminde etkisiz eleman 1'dir.

// 2. Faktöriyel Hesaplamasını Yap
if (sayi < 0) {
    alert("Negatif sayıların faktöriyeli hesaplanamaz.");
} else {
    // 1'den başlayarak girilen sayıya kadar olan tüm sayıları çarpıyoruz.
    for (let i = 1; i <= sayi; i++) {
        faktoriyel = faktoriyel * i;
    }
    alert(sayi + "! = " + faktoriyel);
}
