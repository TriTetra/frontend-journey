/*
    HESAP MAKİNESİ PROJESİ

    Bu proje, kullanıcıdan iki sayı ve bir işlem türü alarak temel matematiksel işlemleri gerçekleştirir.
    Kullanılan Konular: prompt, if-else if-else, Number() tür dönüşümü, alert.
*/

// 1. Kullanıcıdan Gerekli Bilgileri Al
let sayi1 = Number(prompt("Lütfen birinci sayıyı giriniz:"));
let sayi2 = Number(prompt("Lütfen ikinci sayıyı giriniz:"));

let islem = prompt("Lütfen yapmak istediğiniz işlemi seçiniz (+, -, *, /):");

let sonuc;

// 2. Seçilen İşleme Göre Hesaplama Yap
if (islem === "+") {
    sonuc = sayi1 + sayi2;
} else if (islem === "-") {
    sonuc = sayi1 - sayi2;
} else if (islem === "*") {
    sonuc = sayi1 * sayi2;
} else if (islem === "/") {
    if (sayi2 === 0) {
        alert("Bir sayı 0'a bölünemez!");
        sonuc = "Tanımsız";
    } else {
        sonuc = sayi1 / sayi2;
    }
} else {
    alert("Geçersiz işlem! Lütfen +, -, *, / operatörlerinden birini giriniz.");
    sonuc = "Hatalı Giriş";
}

// 3. Sonucu Ekrana Yazdır
if (sonuc !== "Hatalı Giriş" && sonuc !== "Tanımsız") {
    alert("İşleminizin sonucu: " + sonuc);
}
