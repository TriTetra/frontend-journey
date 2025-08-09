/*
    PARAMETRELİ FONKSİYONLAR VE GERİYE DEĞER DÖNDÜRME (RETURN)

    Bu derste, fonksiyonların daha güçlü ve esnek olmasını sağlayan iki temel kavramı öğreneceğiz:
    1. Parametreler: Fonksiyonlara dışarıdan bilgi göndermenin yolu.
    2. Return: Fonksiyonların bir sonuç üretip bu sonucu dışarıya vermesinin yolu.
*/

// =================================================================================
// 1. PARAMETRELİ FONKSİYON TANIMLAMA
// =================================================================================

/*
    - Parametreler, fonksiyonun parantezleri içinde tanımlanan yerel değişkenlerdir.
    - Fonksiyon çağrıldığında, bu parametrelere dışarıdan gönderilen değerler (argümanlar) atanır.
    - Bu sayede aynı fonksiyonu farklı verilerle tekrar tekrar kullanabiliriz.
*/

// Örnek 1: İsim ve Soyisim parametreleri alan fonksiyon
function adSoyadYazdir(isim, soyisim) {
    // `isim` ve `soyisim` bu fonksiyonun içinde kullanılabilen yerel değişkenlerdir.
    console.log("Adınız: " + isim + ", Soyadınız: " + soyisim);
}

// Fonksiyonu çağırma ve argüman gönderme
console.log("----- Parametreli Fonksiyon Çağırma -----");
adSoyadYazdir("Enes", "Bayram"); // "Enes" -> isim, "Bayram" -> soyisim olarak atanır.
adSoyadYazdir("Ali", "Can");   // "Ali" -> isim, "Can" -> soyisim olarak atanır.

// Örnek 2: İki sayıyı toplayan parametreli fonksiyon
function ikiSayiyiTopla(sayi1, sayi2) {
    let toplam = sayi1 + sayi2;
    console.log("Toplam:", toplam);
}

ikiSayiyiTopla(10, 20); // sayi1=10, sayi2=20
ikiSayiyiTopla(5, 8);  // sayi1=5, sayi2=8


// =================================================================================
// 2. GERİYE DEĞER DÖNDÜREN FONKSİYONLAR (RETURN)
// =================================================================================

/*
    - `return` anahtar kelimesi, bir fonksiyonun bir değer üretip bu değeri fonksiyonun çağrıldığı yere geri göndermesini sağlar.
    - Fonksiyonun içinde hesaplanan bir sonucu dışarıda kullanmak istediğimizde `return` kullanırız.
    - `return` ifadesi çalıştırıldığında, fonksiyonun geri kalan kısmı çalışmaz ve fonksiyon sonlanır.
*/

// Örnek 1: Sayının küpünü alan ve sonucu döndüren fonksiyon
function kupAl(sayi) {
    let sonuc = sayi * sayi * sayi; // sayının küpünü hesapla
    return sonuc; // Hesaplanan sonucu geri döndür
    // console.log("Bu satır çalışmaz!"); // return'den sonraki kodlar erişilemez.
}

console.log("\n----- Return Kullanımı -----");
let ucunKupu = kupAl(3); // kupAl(3) fonksiyonu 27 değerini döndürür, bu değer ucunKupu değişkenine atanır.
console.log("3'ün küpü:", ucunKupu); // Çıktı: 27

let besinKupu = kupAl(5);
console.log("5'in küpü:", besinKupu); // Çıktı: 125

// Örnek 2: Sayının karesini alan ve sonucu döndüren fonksiyon
function kareAl(sayi) {
    return sayi * sayi;
}

// =================================================================================
// 3. FONKSİYONLARIN İÇ İÇE KULLANIMI VE DEĞER TAŞIMA
// =================================================================================

/*
    - Bir fonksiyonun döndürdüğü değeri başka bir fonksiyonun parametresi olarak kullanabiliriz.
    - Bu, kodun modülerliğini ve okunabilirliğini artırır.
*/

console.log("\n----- Fonksiyonların İç İçe Kullanımı -----");

// Senaryo: Bir sayının küpünü al, sonra o küpün karesini al.
let sayi = 2;
let kupSonucu = kupAl(sayi); // 2'nin küpü = 8
let kareKupSonucu = kareAl(kupSonucu); // 8'in karesi = 64
console.log(sayi + "'nin küpünün karesi:", kareKupSonucu); // Çıktı: 64

// Veya daha kısa yazım:
let sonucTekSatir = kareAl(kupAl(sayi)); // Önce kupAl(sayi) çalışır, döndürdüğü değer kareAl'a parametre olur.
console.log("Tek satırda sonuç:", sonucTekSatir); // Çıktı: 64


// =================================================================================
// 4. PARAMETRELİ FONKSİYONLARDA DEBUGGER KULLANIMI
// =================================================================================

/*
    - `debugger;` kullanarak fonksiyonların nasıl çağrıldığını, parametrelerin nasıl geçtiğini ve `return` değerinin nasıl döndüğünü adım adım izleyebilirsiniz.
    - Aşağıdaki kodu çalıştırırken F12'yi açıp "Sources" sekmesine gelin ve `debugger;` satırlarında kodun durduğunu gözlemleyin.
    - F10 (Step Over) ile satır satır ilerleyerek değişken değerlerini ve akışı takip edin.
*/

console.log("\n----- Debugger ile Parametre ve Return Takibi -----");

function carpma(s1, s2) {
    debugger; // Fonksiyonun başında dur
    let carpim = s1 * s2;
    debugger; // Return etmeden önce dur
    return carpim;
}

let x = 5;
let y = 10;
let z = carpma(x, y); // Fonksiyon çağrısı

console.log("Çarpım sonucu:", z);


/*
    ÖNEMLİ NOTLAR:
    - Bir parametrenin başında `let`, `var`, `const` gibi anahtar kelimeler kullanılmaz.
    - Fonksiyon çağrılırken gönderilen değerlere "argüman" denir.
    - Fonksiyon tanımındaki yer tutuculara "parametre" denir.
    - `typeof` operatörü ile fonksiyonun döndürdüğü değerin tipini (örneğin `typeof kupAl(3)` -> `"number"`) kontrol edebilirsiniz.
*/