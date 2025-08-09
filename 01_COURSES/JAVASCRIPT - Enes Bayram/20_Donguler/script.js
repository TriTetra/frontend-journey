/*
    DÖNGÜLER (LOOPS)

    - Nedir? Döngüler, bir kod bloğunu belirli bir koşul sağlandığı sürece tekrar tekrar çalıştırmamızı sağlayan yapılardır.
    - Neden Kullanılır? Tekrar eden işlemleri manuel olarak yüzlerce kez yazmak yerine, tek bir döngü bloğu ile otomatikleştirmek için kullanılır.
      Bu, kod tekrarını önler, zaman kazandırır ve daha temiz kod yazmamızı sağlar.
    - Çeşitleri: for, while, do-while ve dizilerle kullanılan forEach, for...of gibi döngüler vardır.
*/

// =================================================================================
// 1. FOR DÖNGÜSÜ
// =================================================================================
/*
    - Yapısı: `for (başlangıç; koşul; artış/azalış)`
        1. başlangıç: Döngü başlamadan önce bir sayaç değişkeni oluşturulur. (örn: `let i = 1;`) - Sadece 1 kez çalışır.
        2. koşul: Döngünün her turunun başında bu koşul kontrol edilir. `true` ise döngü devam eder, `false` ise döngü biter. (örn: `i <= 10;`)
        3. artış/azalış: Döngünün her turunun sonunda sayaç değişkeni güncellenir. (örn: `i++`)
    - En sık kullanılan döngü türüdür. Genellikle tekrar sayısı belli olan durumlar için idealdir.
*/
console.log("----- FOR DÖNGÜSÜ -----");
// Örnek: 1'den 5'e kadar olan sayıları ekrana yazdırma.
for (let i = 1; i <= 5; i++) {
    console.log("Değer:", i);
}


// =================================================================================
// 2. WHILE DÖNGÜSÜ
// =================================================================================
/*
    - Yapısı: `while (koşul)`
        - Döngüye girmeden önce koşul kontrol edilir. `true` olduğu sürece döngü devam eder.
    - ÖNEMLİ: `while` döngüsünde, döngünün sonsuza kadar devam etmemesi için sayaç değişkenini döngü bloğu içinde manuel olarak güncellemeniz gerekir.
      Aksi takdirde "sonsuz döngü" (infinite loop) oluşur.
*/
console.log("\n----- WHILE DÖNGÜSÜ -----");
let sayac = 1;
while (sayac <= 5) {
    console.log("Değer:", sayac);
    sayac++; // Sonsuz döngüye girmemek için sayacı artırıyoruz.
}


// =================================================================================
// 3. DO-WHILE DÖNGÜSÜ
// =================================================================================
/*
    - Yapısı: `do { ... } while (koşul);`
    - `while` döngüsünden temel farkı: Koşul, döngü bloğu çalıştırıldıktan SONRA kontrol edilir.
    - Bu nedenle, `do-while` döngüsü, koşul `false` olsa bile EN AZ BİR KERE çalışır.
*/
console.log("\n----- DO-WHILE DÖNGÜSÜ -----");
let j = 6;
do {
    console.log("Do-While Değeri:", j); // Bu satır, koşul (j <= 5) yanlış olmasına rağmen 1 kez çalışacaktır.
    j++;
} while (j <= 5);


// =================================================================================
// 4. BREAK ve CONTINUE ANAHTAR KELİMELERİ
// =================================================================================
/*
    Bu anahtar kelimeler, döngülerin standart akışını kontrol etmek için kullanılır.
*/

// --- BREAK: Döngüyü Tamamen Kırmak ---
// `break` ifadesi, içinde bulunduğu döngüyü o an tamamen sonlandırır ve döngüden çıkar.
console.log("\n----- BREAK KULLANIMI -----");
for (let i = 1; i <= 10; i++) {
    if (i === 8) {
        console.log("8 bulundu, döngüden çıkılıyor...");
        break; // i, 8'e eşit olduğunda döngü kırılır.
    }
    console.log("Break Örneği Değer:", i);
} // Çıktı: 1, 2, 3, 4, 5, 6, 7


// --- CONTINUE: Mevcut Turu Atlamak ---
// `continue` ifadesi, döngünün o anki turunu atlar ve bir sonraki turdan devam etmesini sağlar.
// `continue`'dan sonraki kodlar o tur için çalıştırılmaz.
console.log("\n----- CONTINUE KULLANIMI -----");
for (let i = 1; i <= 10; i++) {
    if (i === 8) {
        console.log("8 atlanıyor...");
        continue; // i, 8'e eşit olduğunda bu tur atlanır, 8 yazdırılmaz.
    }
    console.log("Continue Örneği Değer:", i);
} // Çıktı: 1, 2, 3, 4, 5, 6, 7, 9, 10 (8 hariç)
