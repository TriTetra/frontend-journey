/*
    MANTIKSAL OPERATÖRLER

    Mantıksal operatörler, birden fazla koşulu birleştirerek tek bir `true` veya `false` sonucu üretmek için kullanılır.
    Koşullu ifadelerin (if-else) temelini oluştururlar.
*/

// Örnek senaryo için değişkenleri tanımlayalım:
let yas = 20;
let para = 3500;
let saglikliMi = false;
let hakSayisi = 3;

// -------------------- VE (AND) Operatörü (&&) --------------------
// Birleştirilen tüm koşulların `true` olması durumunda `true` sonucunu verir.
// Koşullardan BİR TANESİ BİLE `false` ise sonuç `false` olur.
// Kural: Hepsi doğru olmalı.

console.log("----- VE (&&) Operatörü -----");
// Ehliyet alabilmek için hem yaşın 18'den büyük OLMALI, hem de paranın 3000'den fazla OLMALI.
let ehliyetAlabilirMi = (yas > 18) && (para > 3000) && saglikliMi;
//                      (true)     &&     (true)      &&   (false)   -> Sonuç: false
console.log("Ehliyet alabilir mi?", ehliyetAlabilirMi);


// -------------------- VEYA (OR) Operatörü (||) --------------------
// Birleştirilen koşullardan en az bir tanesinin `true` olması durumunda `true` sonucunu verir.
// Sonucun `false` olması için tüm koşulların `false` olması gerekir.
// Kural: Bir tanesi bile doğru olsa yeterli.

console.log("\n----- VEYA (||) Operatörü -----");
// Sınava girmek için ya parası yeterli olmalı VEYA en az bir hakkı kalmış olmalı.
let sinavaGirebilirMi = (para > 4000) || (hakSayisi > 0);
//                       (false)     ||     (true)      -> Sonuç: true
console.log("Sınava girebilir mi?", sinavaGirebilirMi);


// -------------------- DEĞİL (NOT) Operatörü (!) --------------------
// Bir boolean ifadenin sonucunu tersine çevirir. `true` ise `false`, `false` ise `true` yapar.
// Kural: Zıttını al.

console.log("\n----- DEĞİL (!) Operatörü -----");
console.log("Sağlıklı mı?", saglikliMi); // false
console.log("Sağlıklı DEĞİL mi?", !saglikliMi); // true


// -------------------- Operatörlerin Birlikte Kullanımı --------------------
console.log("\n----- Birlikte Kullanım -----");

// Karmaşık bir senaryo:
// (Yaşı 18'den büyük VE parası 3000'den fazla ise) VEYA (sağlıklı DEĞİLSE)
let karmasikSonuc = (yas > 18 && para > 3000) || !saglikliMi;
//                    (   true   &&    true   ) || !(false)
//                    (         true         ) ||   true
// Sonuç: true

console.log("Karmaşık Koşul Sonucu:", karmasikSonuc);
