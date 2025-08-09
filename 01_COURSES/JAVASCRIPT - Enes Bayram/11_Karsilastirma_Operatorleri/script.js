/*
    KARŞILAŞTIRMA OPERATÖRLERİ

    Karşılaştırma operatörleri, iki değeri karşılaştırarak `true` (doğru) veya `false` (yanlış) şeklinde bir mantıksal sonuç üretir.
    Bu operatörler, koşullu ifadelerin (if-else) temelini oluşturur.
*/

// -------------------- Eşit Değildir Operatörü (!=) --------------------
// İki değerin birbirine eşit OLMADIĞINI kontrol eder. TİP KONTROLÜ YAPMAZ.
// Sadece değerlere bakar. `==` operatörünün tam tersidir.
console.log("----- Eşit Değildir (!=) -----");
console.log("5 != 3 ->", 5 != 3); // true döner. Çünkü 5, 3'e eşit değildir.
console.log("5 != 5 ->", 5 != 5); // false döner. Çünkü 5, 5'e eşittir.
console.log("5 != \"5\" ->", 5 != "5"); // false döner. Çünkü değerleri aynıdır, tip umursanmaz.

// Not: `!==` (Katı Eşit Değildir) operatörü de vardır. Bu operatör hem değer hem de tip kontrolü yapar.
// Güvenli kodlama için `!==` kullanmak genellikle daha iyidir.
console.log("5 !== \"5\" ->", 5 !== "5"); // true döner. Çünkü tipleri farklıdır.


// -------------------- Büyüktür Operatörü (>) --------------------
// Soldaki değerin sağdaki değerden büyük olup olmadığını kontrol eder.
console.log("\n----- Büyüktür (>) -----");
console.log("10 > 2 ->", 10 > 2); // true
console.log("2 > 10 ->", 2 > 10); // false


// -------------------- Küçüktür Operatörü (<) --------------------
// Soldaki değerin sağdaki değerden küçük olup olmadığını kontrol eder.
console.log("\n----- Küçüktür (<) -----");
console.log("2 < 10 ->", 2 < 10); // true
console.log("10 < 2 ->", 10 < 2); // false


// -------------------- Büyük Eşittir Operatörü (>=) --------------------
// Soldaki değerin sağdaki değerden BÜYÜK VEYA EŞİT olup olmadığını kontrol eder.
console.log("\n----- Büyük Eşittir (>=) -----");
console.log("15 >= 13 ->", 15 >= 13); // true (büyük olduğu için)
console.log("13 >= 13 ->", 13 >= 13); // true (eşit olduğu için)
console.log("12 >= 13 ->", 12 >= 13); // false (ne büyük ne de eşit)


// -------------------- Küçük Eşittir Operatörü (<=) --------------------
// Soldaki değerin sağdaki değerden KÜÇÜK VEYA EŞİT olup olmadığını kontrol eder.
console.log("\n----- Küçük Eşittir (<=) -----");
console.log("12 <= 13 ->", 12 <= 13); // true (küçük olduğu için)
console.log("13 <= 13 ->", 13 <= 13); // true (eşit olduğu için)
console.log("15 <= 13 ->", 15 <= 13); // false (ne küçük ne de eşit)
