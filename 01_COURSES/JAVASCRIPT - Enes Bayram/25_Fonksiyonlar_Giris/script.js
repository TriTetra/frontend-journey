/*
    FONKSİYONLARA GİRİŞ (METOTLAR)

    - Nedir? Fonksiyonlar (diğer programlama dillerinde metot olarak da geçer), belirli bir görevi yerine getiren,
      tekrar tekrar kullanılabilen kod bloklarıdır.

    - Neden Kullanılır?
        1.  Kod Tekrarını Önleme (DRY - Don't Repeat Yourself): Bir işi bir kere yazarız, istediğimiz kadar çağırırız.
            Bu, kopyala-yapıştır yapmaktan kurtarır.
        2.  Modülerlik: Büyük bir problemi küçük, yönetilebilir parçalara (fonksiyonlara) bölmemizi sağlar.
            Bu, kodun okunabilirliğini ve bakımını kolaylaştırır.
        3.  Okunabilirlik: Fonksiyonlara anlamlı isimler vererek kodun ne iş yaptığını daha kolay anlamamızı sağlar.
*/

// =================================================================================
// 1. PARAMETRESİZ VE DEĞER DÖNDÜRMEYEN FONKSİYON TANIMLAMA
// =================================================================================

/*
    YAPI:
    function fonksiyonAdi() {
        // Fonksiyonun yapacağı işler buraya yazılır.
    }

    - `function` anahtar kelimesi ile başlar.
    - Fonksiyona anlamlı bir isim verilir (örn: `yazdir`, `topla`).
    - Parantezler `()` fonksiyonun parametre alıp almadığını belirtir. Şu an parametre almadığı için boş.
    - Süslü parantezler `{}` fonksiyonun kod bloğunu tanımlar.
*/

function adimiYazdir() {
    console.log("Enes");
}

function ikiSayiyiTopla() {
    let sayi1 = 5;
    let sayi2 = 7;
    let toplam = sayi1 + sayi2;
    console.log("Toplam:", toplam);
}

// =================================================================================
// 2. FONKSİYON ÇAĞIRMA (ÇALIŞTIRMA)
// =================================================================================

/*
    - Fonksiyonu tanımlamak, onu sadece hazır hale getirmektir. Çalıştırmak için çağırmak gerekir.
    - Fonksiyonu çağırmak için adını yazar ve ardından parantezleri `()` kullanırız.
*/

console.log("----- Fonksiyon Çağırma Örnekleri -----");

adimiYazdir(); // adimiYazdir fonksiyonunu çalıştır.
adimiYazdir(); // Aynı fonksiyonu tekrar tekrar çağırabiliriz.

ikiSayiyiTopla(); // ikiSayiyiTopla fonksiyonunu çalıştır.


// =================================================================================
// 3. FONKSİYONLARIN ÇALIŞMA AKIŞINI DEBUGGER İLE İZLEME
// =================================================================================

/*
    - `debugger;` anahtar kelimesi, kodun o noktada durmasını sağlar.
    - Bu sayede fonksiyonların nasıl çağrıldığını, içine girip çıktığını adım adım gözlemleyebiliriz.
    - Tarayıcıda F12 ile Geliştirici Araçları'nı açın ve "Sources" (Kaynaklar) sekmesine gelin.
*/

console.log("\n----- Debugger ile Fonksiyon Akışı -----");

function birinciIslem() {
    console.log("Birinci işlem başladı.");
    debugger; // Burada duracak
    console.log("Birinci işlem bitti.");
}

function ikinciIslem() {
    console.log("İkinci işlem başladı.");
    debugger; // Burada duracak
    console.log("İkinci işlem bitti.");
}

birinciIslem(); // Fonksiyon çağrısı
ikinciIslem();  // Fonksiyon çağrısı

console.log("Tüm işlemler tamamlandı.");


/*
    ÖNEMLİ NOT:
    - Fonksiyonlar, tanımlandıkları yer fark etmeksizin (sayfanın başında veya sonunda) çağrılabilirler.
      JavaScript, kodu çalıştırmadan önce tüm fonksiyon tanımlarını "yukarı taşır" (hoisting).
*/

// Örnek: Fonksiyonu çağırmadan önce tanımlayalım.
selamla(); // Bu satır çalışır, çünkü selamla fonksiyonu hoisting sayesinde yukarı taşınır.

function selamla() {
    console.log("Merhaba, ben selamla fonksiyonuyum!");
}
