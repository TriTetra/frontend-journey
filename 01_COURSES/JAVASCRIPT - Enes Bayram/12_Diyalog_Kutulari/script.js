/*
    DİYALOG KUTULARI

    JavaScript, kullanıcı ile etkileşim kurmak için tarayıcıda açılan (pop-up) diyalog kutuları sunar.
    Bu metotların hepsi `window` nesnesine aittir, bu yüzden başlarına `window.` yazmadan doğrudan kullanılabilirler.
*/

// -------------------- 1. Alert --------------------
// Kullanıcıya bir mesaj veya uyarı göstermek için kullanılır. Sadece bir "Tamam" butonu vardır.
// Geriye bir değer döndürmez.

alert("İşleminize devam etmeden önce kaydetmelisiniz!");


// -------------------- 2. Prompt --------------------
// Kullanıcıdan bir metin girişi almak için kullanılır.
// Bir mesaj, bir giriş alanı, "Tamam" ve "İptal" butonları içerir.
// DÖNEN DEĞER: Kullanıcı "Tamam"a basarsa girilen metni `string` olarak döndürür.
// "İptal"e basarsa `null` döndürür.

let isim = prompt("Lütfen isminizi giriniz:");
let yas = prompt("Lütfen yaşınızı giriniz:");

console.log("Girilen İsim:", isim);
console.log("Girilen Yaş:", yas);

// ÖNEMLİ NOT: prompt ile alınan her değer, sayı bile girilse, her zaman `string` tipindedir.
console.log("İsmin Tipi:", typeof isim);
console.log("Yaşın Tipi:", typeof yas);

// Eğer yaş ile matematiksel bir işlem yapılacaksa, önce `number` tipine dönüştürülmelidir.
// Bu konu "Tür Dönüşümleri" dersinde ele alınacaktır.


// -------------------- 3. Confirm --------------------
// Kullanıcıdan bir eylemi onaylamasını veya iptal etmesini istemek için kullanılır.
// Bir mesaj, "Tamam" ve "İptal" butonları içerir.
// DÖNEN DEĞER: Kullanıcı "Tamam"a basarsa `true`, "İptal"e basarsa `false` (boolean) değerini döndürür.

let sonuc = confirm("Silmek istediğinize emin misiniz?");

console.log("Confirm Sonucu:", sonuc);

// Bu sonuç, ileride koşullu ifadelerle (if-else) kullanılacaktır.
// if (sonuc) {
//     console.log("Silme işlemi başarılı.");
// } else {
//     console.log("Silme işlemi iptal edildi.");
// }
