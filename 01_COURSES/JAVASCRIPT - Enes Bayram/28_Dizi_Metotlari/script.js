/*
    DİZİ METOTLARI

    JavaScript dizileri, üzerinde çeşitli işlemler yapmamızı sağlayan birçok hazır metoda sahiptir.
    Bu metotlar, dizilere eleman ekleme, çıkarma, değiştirme, arama, birleştirme gibi işlemleri kolaylaştırır.

    ÖNEMLİ UYARI: Bu metotları ezberlemeye çalışmayın! Ne işe yaradıklarını ve nasıl kullanıldıklarını anlayın.
    İhtiyaç duyduğunuzda internetten (MDN Web Docs gibi kaynaklardan) araştırarak kullanmayı öğrenin.
*/

let arabalar = ["BMW", "Toyota", "Renault", "Mercedes", "Porsche"];
console.log("Başlangıç Dizisi:", arabalar);

// =================================================================================
// 1. push(): Dizinin sonuna eleman ekler ve yeni uzunluğunu döndürür.
// =================================================================================
console.log("\n----- push() Metodu -----");
let yeniUzunlukPush = arabalar.push("Opel");
console.log("push() sonrası dizi:", arabalar); // ["BMW", ..., "Porsche", "Opel"]
console.log("Yeni uzunluk:", yeniUzunlukPush); // 6

// =================================================================================
// 2. unshift(): Dizinin başına eleman ekler ve yeni uzunluğunu döndürür.
// =================================================================================
console.log("\n----- unshift() Metodu -----");
let yeniUzunlukUnshift = arabalar.unshift("Hyundai");
console.log("unshift() sonrası dizi:", arabalar); // ["Hyundai", "BMW", ..., "Opel"]
console.log("Yeni uzunluk:", yeniUzunlukUnshift); // 7

// =================================================================================
// 3. pop(): Dizinin sonundaki elemanı siler ve silinen elemanı döndürür.
// =================================================================================
console.log("\n----- pop() Metodu -----");
let silinenElemanPop = arabalar.pop();
console.log("pop() sonrası dizi:", arabalar); // ["Hyundai", ..., "Mercedes"]
console.log("Silinen eleman:", silinenElemanPop); // Opel

// =================================================================================
// 4. shift(): Dizinin başındaki elemanı siler ve silinen elemanı döndürür.
// =================================================================================
console.log("\n----- shift() Metodu -----");
let silinenElemanShift = arabalar.shift();
console.log("shift() sonrası dizi:", arabalar); // ["BMW", ..., "Mercedes"]
console.log("Silinen eleman:", silinenElemanShift); // Hyundai

// =================================================================================
// 5. splice(): Diziden eleman eklemek/silmek/değiştirmek için kullanılır.
//    `splice(başlangıç_indeksi, silinecek_eleman_sayısı, eklenecek_eleman1, eklenecek_eleman2, ...)`
// =================================================================================
console.log("\n----- splice() Metodu -----");
// Örnek 1: Eleman silme (Toyota ve Renault'u sil)
// arabalar = ["BMW", "Toyota", "Renault", "Mercedes", "Porsche"]; // Diziyi eski haline getirelim
// arabalar.splice(1, 2); // 1. indeksten başla, 2 eleman sil
// console.log("splice() ile silme sonrası:", arabalar); // ["BMW", "Mercedes", "Porsche"]

// Örnek 2: Eleman ekleme (Renault'dan sonra "Fiat" ekle)
// arabalar = ["BMW", "Toyota", "Renault", "Mercedes", "Porsche"];
// arabalar.splice(3, 0, "Fiat"); // 3. indeksten başla, 0 eleman sil, "Fiat" ekle
// console.log("splice() ile ekleme sonrası:", arabalar); // ["BMW", "Toyota", "Renault", "Fiat", "Mercedes", "Porsche"]

// Örnek 3: Eleman değiştirme (Renault ve Mercedes'i sil, yerine "Honda" ekle)
// arabalar = ["BMW", "Toyota", "Renault", "Mercedes", "Porsche"];
// arabalar.splice(2, 2, "Honda"); // 2. indeksten başla, 2 eleman sil, "Honda" ekle
// console.log("splice() ile değiştirme sonrası:", arabalar); // ["BMW", "Toyota", "Honda", "Porsche"]

// Mevcut dizi üzerinde çalışalım:
// arabalar şu an: ["BMW", "Toyota", "Renault", "Mercedes", "Porsche"]
console.log("splice() öncesi:", arabalar);
arabalar.splice(2, 1, "Audi"); // Renault'u sil, yerine Audi ekle
console.log("splice() ile değiştirme:", arabalar); // ["BMW", "Toyota", "Audi", "Mercedes", "Porsche"]

// =================================================================================
// 6. toString(): Diziyi stringe çevirir.
// =================================================================================
console.log("\n----- toString() Metodu -----");
let arabalarString = arabalar.toString();
console.log("toString() sonrası:", arabalarString); // BMW,Toyota,Audi,Mercedes,Porsche
console.log("Tipi:", typeof arabalarString); // string

// =================================================================================
// 7. join(): Diziyi belirtilen ayırıcı ile stringe çevirir.
// =================================================================================
console.log("\n----- join() Metodu -----");
let arabalarJoin = arabalar.join(" - ");
console.log("join() sonrası:", arabalarJoin); // BMW - Toyota - Audi - Mercedes - Porsche

// =================================================================================
// 8. concat(): İki veya daha fazla diziyi birleştirir ve yeni bir dizi döndürür.
// =================================================================================
console.log("\n----- concat() Metodu -----");
let arabalar2 = ["Hyundai", "Tofaş"];
let birlesmisDizi = arabalar.concat(arabalar2);
console.log("concat() sonrası:", birlesmisDizi); // ["BMW", ..., "Porsche", "Hyundai", "Tofaş"]

// =================================================================================
// 9. slice(): Dizinin belirli bir bölümünü kopyalayarak yeni bir dizi oluşturur.
//    `slice(başlangıç_indeksi, bitiş_indeksi)` - bitiş_indeksi dahil değildir.
// =================================================================================
console.log("\n----- slice() Metodu -----");
let dilimlenmisDizi = arabalar.slice(1, 4); // 1. indeksten başla, 4. indekse kadar (4. dahil değil)
console.log("slice() sonrası:", dilimlenmisDizi); // ["Toyota", "Audi", "Mercedes"]
console.log("Orijinal dizi (slice() bozmaz):", arabalar);

// =================================================================================
// 10. reverse(): Dizinin elemanlarının sırasını tersine çevirir. Orijinal diziyi değiştirir.
// =================================================================================
console.log("\n----- reverse() Metodu -----");
arabalar.reverse();
console.log("reverse() sonrası dizi:", arabalar); // ["Porsche", "Mercedes", "Audi", "Toyota", "BMW"]

// =================================================================================
// 11. split(): Bir stringi belirli bir ayırıcıya göre bölerek diziye çevirir.
//    (Bu aslında String metodudur, ancak dizilerle ilişkili olduğu için burada gösterilir.)
// =================================================================================
console.log("\n----- split() Metodu (String Metodu) -----");
let isimlerString = "Enes,Ali,Veli";
let isimlerDizi = isimlerString.split(","); // Virgül ile ayır
console.log("split() sonrası dizi:", isimlerDizi); // ["Enes", "Ali", "Veli"]

// =================================================================================
// 12. indexOf(): Bir elemanın dizideki ilk indeksini döndürür. Bulamazsa -1 döndürür.
// =================================================================================
console.log("\n----- indexOf() Metodu -----");
console.log("Porsche'nin indeksi:", arabalar.indexOf("Porsche")); // 0 (çünkü reverse ettik)
console.log("Fiat'ın indeksi:", arabalar.indexOf("Fiat")); // -1 (çünkü yok)

// =================================================================================
// 13. includes(): Bir elemanın dizide olup olmadığını kontrol eder, true/false döndürür.
// =================================================================================
console.log("\n----- includes() Metodu -----");
console.log("Dizide BMW var mı?", arabalar.includes("BMW")); // true
console.log("Dizide Tofaş var mı?", arabalar.includes("Tofaş")); // false

// =================================================================================
// 14. length: Dizinin eleman sayısını veren bir özelliktir (metot değil).
// =================================================================================
console.log("\n----- length Özelliği -----");
console.log("Dizinin güncel uzunluğu:", arabalar.length);
