/*
    ATAMA OPERATÖRLERİ

    Atama operatörleri, değişkenlere değer atamak veya mevcut değerlerini güncellemek için kullanılır.
*/

// =================================================================================
// 1. TEMEL ATAMA VE KARŞILAŞTIRMA OPERATÖRLERİ
// =================================================================================

// -------------------- Atama Operatörü (=) --------------------
// Sağdaki değeri alır ve soldaki değişkene atar.
let a = 5;
console.log("Atama (=):", a);

// -------------------- Eşittir Operatörü (==) --------------------
// İki değerin birbirine eşit olup olmadığını kontrol eder. TİP KONTROLÜ YAPMAZ.
// Sadece değerlere bakar. Bu nedenle genellikle kullanımı tavsiye edilmez.
console.log("Eşittir (==):", 5 == "5"); // true döner. Çünkü ikisinin de değeri 5'tir, tipleri (number, string) umursanmaz.

// -------------------- Katı Eşittir (Strict Equality) Operatörü (===) --------------------
// İki değerin birbirine eşit olup olmadığını kontrol eder. HEM DEĞER HEM DE TİP KONTROLÜ YAPAR.
// Güvenli ve öngörülebilir olduğu için bu operatörün kullanımı şiddetle tavsiye edilir.
console.log("Katı Eşittir (===):", 5 === "5"); // false döner. Çünkü değerleri aynı olsa da tipleri farklıdır (number !== string).
console.log("Katı Eşittir (===):", 5 === 5);   // true döner. Çünkü hem değerleri hem de tipleri aynıdır.


// =================================================================================
// 2. BİLEŞİK ATAMA OPERATÖRLERİ (Kısaltmalar)
// =================================================================================

let sayi = 12;
console.log("Başlangıç Değeri:", sayi);

// -------------------- Toplayarak Atama (+=) --------------------
// sayi = sayi + 2; // Uzun yol
sayi += 2; // Kısa yol. sayi'nin üzerine 2 ekler ve sonucu tekrar sayi'ya atar.
console.log("Toplayarak Atama (+=):", sayi); // sayi şimdi 14

// -------------------- Çıkararak Atama (-=) --------------------
// sayi = sayi - 4; // Uzun yol
sayi -= 4; // Kısa yol. sayi'dan 4 çıkarır ve sonucu tekrar sayi'ya atar.
console.log("Çıkararak Atama (-=):", sayi); // sayi şimdi 10

// -------------------- Çarparak Atama (*=) --------------------
// sayi = sayi * 3; // Uzun yol
sayi *= 3; // Kısa yol. sayi'yı 3 ile çarpar ve sonucu tekrar sayi'ya atar.
console.log("Çarparak Atama (*=):", sayi); // sayi şimdi 30

// -------------------- Bölerek Atama (/=) --------------------
// sayi = sayi / 5; // Uzun yol
sayi /= 5; // Kısa yol. sayi'yı 5'e böler ve sonucu tekrar sayi'ya atar.
console.log("Bölerek Atama (/=):", sayi); // sayi şimdi 6

// -------------------- Mod Alarak Atama (%=) --------------------
// sayi = sayi % 4; // Uzun yol
sayi %= 4; // Kısa yol. sayi'nın 4'e bölümünden kalanı bulur ve sonucu tekrar sayi'ya atar.
console.log("Mod Alarak Atama (%=):", sayi); // sayi şimdi 2 (6 % 4 = 2)

// -------------------- Üs Alarak Atama (**=) --------------------
// sayi = sayi ** 3; // Uzun yol
sayi **= 3; // Kısa yol. sayi'nın 3. kuvvetini alır ve sonucu tekrar sayi'ya atar.
console.log("Üs Alarak Atama (**=):", sayi); // sayi şimdi 8 (2^3 = 8)
