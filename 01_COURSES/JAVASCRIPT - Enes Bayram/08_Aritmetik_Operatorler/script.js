/*
    ARİTMETİK OPERATÖRLER

    Aritmetik operatörler, matematiksel işlemler yapmak için kullanılır.
*/

// -------------------- Atama Operatörü (=) --------------------
// Bu operatör, matematikteki "eşittir" anlamına GELMEZ.
// Sağdaki değeri alıp, soldaki değişkenin içine KOYAR (ATAR).
let yas = 25; // 25 değerini al, yas değişkenine ata.
console.log("Atama Operatörü:", yas);


// -------------------- Toplama Operatörü (+) --------------------
// Sayısal değerleri toplar.
let sayi1 = 60;
let sayi2 = 70;
let toplam = sayi1 + sayi2;
console.log("Toplama:", toplam);

// String birleştirme (Concatenation) için de kullanılır.
let metin = "Notlarınızın Toplamı: ";
console.log(metin + (sayi1 + sayi2)); // İşlem önceliği için parantez kullanmak önemlidir!


// -------------------- Çıkarma Operatörü (-) --------------------
let fark = sayi1 - sayi2;
console.log("Çıkarma:", fark);


// -------------------- Çarpma Operatörü (*) --------------------
let carpim = sayi1 * sayi2;
console.log("Çarpma:", carpim);


// -------------------- Bölme Operatörü (/) --------------------
let bolum = sayi2 / sayi1;
console.log("Bölme:", bolum);


// -------------------- Mod Alma Operatörü (%) --------------------
// Bir sayının başka bir sayıya bölümünden kalanı verir.
// Örnek: 12'nin 5'e bölümünden kalan 2'dir.
let kalan = 12 % 5;
console.log("Mod Alma (Kalan):", kalan);


// -------------------- Artırma (++) ve Azaltma (--) Operatörleri --------------------
// Bir değişkenin değerini 1 artırmak veya 1 azaltmak için kullanılır.
let a = 10;
a++; // a'nın değerini 1 artır (a = a + 1 ile aynı)
console.log("Artırma Sonrası:", a); // a şimdi 11

a--; // a'nın değerini 1 azalt (a = a - 1 ile aynı)
console.log("Azaltma Sonrası:", a); // a şimdi tekrar 10


// -------------------- Üs Alma Operatörü (**) --------------------
// Bir sayının üssünü (kuvvetini) almak için kullanılır.
// Örnek: 2'nin 3. kuvveti (2^3)
let usSonucu = 2 ** 3;
console.log("Üs Alma (2^3):", usSonucu); // Sonuç 8


/*
    DEĞİŞKEN İSİMLENDİRME KURALLARI (Best Practices)

    1.  Türkçe Karakter Kullanmayın: (ü, ö, ş, ı, ğ, ç) gibi karakterler kullanılmamalıdır.
        YANLIŞ: let müsteriNo = 123;
        DOĞRU:  let musteriNo = 123;

    2.  Boşluk İçermez: Değişken isimleri bitişik yazılmalıdır.
        YANLIŞ: let musteri no = 123;
        DOĞRU:  let musteriNo = 123;

    3.  Rakamla Başlayamaz: Değişken isimleri harf, `$` veya `_` ile başlamalıdır.
        YANLIŞ: let 1musteriNo = 123;
        DOĞRU:  let musteriNo1 = 123;

    4.  CamelCase Kullanımı: Eğer değişken ismi birden fazla kelimeden oluşuyorsa, ilk kelime küçük harfle başlar,
        sonraki her kelimenin ilk harfi büyük yazılır. Bu bir yazım standardıdır (convention).
        ÖRNEK: let kullanicininDogumYili;
*/
