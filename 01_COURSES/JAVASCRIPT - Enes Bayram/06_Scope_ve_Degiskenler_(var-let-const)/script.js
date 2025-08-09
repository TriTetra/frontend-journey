/*
    DEĞİŞKEN NEDİR?
    Değişkenler, verileri (sayı, metin, obje vb.) geçici olarak hafızada (RAM) tutmak için kullandığımız isimlendirilmiş kaplardır.
    Bir değeri bir değişkene atarız ve daha sonra bu ismi kullanarak o değere tekrar erişebiliriz.

    TANIMLAMA:
    anahtar_kelime degisken_ismi = deger;

    Örn: let yas = 25;
*/

/*
    SCOPE (KAPSAM) NEDİR?
    Scope, bir değişkenin veya fonksiyonun nerelerden erişilebilir olduğunu belirleyen kurallar bütünüdür.
    Bir değişkenin "kapsamı", onun yaşam alanını tanımlar. Bu alanın dışından o değişkene erişilemez.
    JavaScript'te 3 temel scope türü vardır.
*/

// 1. GLOBAL SCOPE
//--------------------------------------------------------------------------------
// - En geniş kapsamdır.
// - Herhangi bir fonksiyonun veya bloğun (süslü parantezlerin) dışında tanımlanan değişkenler bu kapsama aittir.
// - Global scope'taki bir değişkene kodun HER YERİNDEN erişilebilir.

var globalDegisken = "Ben her yerden erişilebilirim.";

function testFonksiyonu() {
    console.log(globalDegisken); // Fonksiyon içinden erişim -> BAŞARILI
}
testFonksiyonu();

if (true) {
    console.log(globalDegisken); // Blok içinden erişim -> BAŞARILI
}


// 2. FUNCTION SCOPE (Fonksiyon Kapsamı)
//--------------------------------------------------------------------------------
// - Bir fonksiyonun süslü parantezleri {...} içinde tanımlanan değişkenler bu kapsama aittir.
// - Bu değişkenlere SADECE tanımlandıkları fonksiyonun içinden erişilebilir. Dışarıdan erişilemez.
// - `var` anahtar kelimesi function-scoped çalışır.

function selamVer() {
    var selam = "Merhaba Dünya";
    console.log(selam); // İçeriden erişim -> BAŞARILI
}
selamVer();

// console.log(selam); // Dışarıdan erişim -> HATA! (selam is not defined)


// 3. BLOCK SCOPE (Blok Kapsamı)
//--------------------------------------------------------------------------------
// - if, for, while gibi yapıların süslü parantezleri {...} içinde tanımlanan değişkenler bu kapsama aittir.
// - Bu değişkenlere SADECE tanımlandıkları bloğun içinden erişilebilir. Dışarıdan erişilemez.
// - `let` ve `const` anahtar kelimeleri block-scoped çalışır. Bu, onları daha güvenli ve öngörülebilir yapar.

if (true) {
    let blokDegiskeni = "Ben sadece bu blokta yaşarım.";
    console.log(blokDegiskeni); // İçeriden erişim -> BAŞARILI
}

// console.log(blokDegiskeni); // Dışarıdan erişim -> HATA! (blokDegiskeni is not defined)


// --- Özet ve Karşılaştırma ---
// Bu konu bir sonraki derste `var`, `let` ve `const` arasındaki farklarla daha da netleşecektir.
// Şimdilik bilmemiz gerekenler:
// - Global Scope: En dış katman, her yerden erişim.
// - Function Scope: Sadece fonksiyon içinden erişim (`var` bu kurala uyar).
// - Block Scope: Sadece `{...}` bloğu içinden erişim (`let` ve `const` bu kurala uyar).
