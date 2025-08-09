/*
    JAVASCRIPT VERİ TİPLERİ

    JavaScript'te veri tipleri iki ana kategoriye ayrılır:
    1. Primitive (İlkel) Tipler: Değeri doğrudan kendisi olan, basit veri tipleridir.
    2. Reference (Referans) Tipler: Değeri doğrudan kendisi olmayan, bellekteki bir konumu (adresi) işaret eden daha karmaşık veri yapılarıdır.
*/

// =================================================================================
// 1. PRIMITIVE (İLKEL) VERİ TİPLERİ
// =================================================================================

// -------------------- a. String --------------------
// Metinsel verileri tutmak için kullanılır. Tek tırnak ('') veya çift tırnak ("") içine yazılır.
let isim = "Enes Bayram";
let aciklama = 'Bu bir string veri tipidir.';
console.log("Değer:", isim);
console.log("Tip:", typeof isim); // typeof operatörü, bir değişkenin tipini döndürür.

// -------------------- b. Number --------------------
// Tam sayı (integer) veya ondalıklı sayı (float, double) gibi tüm sayısal değerleri tutar.
let yas = 23;
let boy = 1.80;
console.log("Değer:", yas);
console.log("Tip:", typeof yas);

// ÖNEMLİ NOT: String ve Number Toplaması
let metinSayi = "5";
let gercekSayi = 2;
console.log("String + Number:", metinSayi + gercekSayi); // Sonuç "52" olur. Çünkü string ile number toplanmaz, yan yana birleştirilir (concatenation).

let sayi1 = 5;
let sayi2 = 2;
console.log("Number + Number:", sayi1 + sayi2); // Sonuç 7 olur. Çünkü iki sayı matematiksel olarak toplanır.

// -------------------- c. Boolean --------------------
// Sadece iki değer alabilir: true (doğru) veya false (yanlış).
// Genellikle mantıksal karşılaştırmalar ve koşul durumları için kullanılır.
let ehliyetVarMi = true;
let sinavdanGectiMi = false;
let karsilastirma = 5 > 2; // Bu işlemin sonucu true'dur.
console.log("Değer:", karsilastirma);
console.log("Tip:", typeof karsilastirma);

// -------------------- d. Null --------------------
// Bir değişkenin bilerek ve isteyerek "boş" bırakıldığını belirtir. Değersizliği temsil eder.
let araba = null;
console.log("Değer:", araba);
console.log("Tip:", typeof araba); // Not: typeof null, tarihsel bir hatadan dolayı "object" döner. Bu bir istisnadır.

// -------------------- e. Undefined --------------------
// Bir değişkenin oluşturulduğunu ancak henüz bir değer atanmadığını belirtir.
let telefon;
console.log("Değer:", telefon);
console.log("Tip:", typeof telefon);


// =================================================================================
// 2. REFERENCE (REFERANS) VERİ TİPLERİ
// =================================================================================

// -------------------- a. Object --------------------
// Birbiriyle ilişkili verileri bir arada tutmak için kullanılan bir yapıdır. Süslü parantez {} ile oluşturulur.
// İçinde anahtar-değer (key-value) çiftleri barındırır.
let insan = {
    ad: "Enes",       // ad (key), "Enes" (value)
    soyad: "Bayram",
    yas: 23
};
console.log("Değer:", insan);
console.log("Tip:", typeof insan);

// -------------------- b. Array (Dizi) --------------------
// Birden fazla veriyi sıralı bir şekilde bir arada tutan bir yapıdır. Köşeli parantez [] ile oluşturulur.
let rakamlar = [1, 2, 3, 4, 5];
let renkler = ["Kırmızı", "Mavi", "Yeşil"];
console.log("Değer:", rakamlar);
console.log("Tip:", typeof rakamlar); // Not: typeof array de "object" döner. Diziler, JavaScript'te özel bir obje türüdür.

// -------------------- c. Function (Fonksiyon) --------------------
// Belirli bir işi yapmak için tasarlanmış, tekrar tekrar kullanılabilen kod bloklarıdır.
let selamVer = function() {
    console.log("Merhaba!");
};
selamVer(); // Fonksiyonu çalıştırma
console.log("Tip:", typeof selamVer);
