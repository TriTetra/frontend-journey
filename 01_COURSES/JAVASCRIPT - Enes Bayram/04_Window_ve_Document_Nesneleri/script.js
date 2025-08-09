/*
    WINDOW VE DOCUMENT NESNELERİ

    JavaScript'te tarayıcıda çalışan kodlar için iki çok önemli global nesne vardır: window ve document.
    Bu nesneler, web sayfasının içeriği ve tarayıcı penceresi ile etkileşim kurmamızı sağlar.
*/

// 1. WINDOW NESNESİ
//--------------------------------------------------------------------------------
// - Tarayıcı penceresinin kendisini temsil eden en genel ve en büyük nesnedir.
// - JavaScript'teki tüm global değişkenler, fonksiyonlar ve nesneler aslında window nesnesinin birer parçasıdır.
// - alert(), console.log(), setTimeout(), localStorage gibi fonksiyonlar doğrudan window nesnesine aittir.
// - Bir özellik veya metot window nesnesine aitse, başına "window." yazmamıza gerek yoktur. JavaScript bunu otomatik olarak anlar.

console.log(window);

// Örnek: alert() kullanımı
// window.alert("Bu bir uyarıdır."); // Bu satır ile...
alert("Bu bir uyarıdır."); // ...bu satır tamamen aynı işi yapar.

// Örnek: location özelliği
// Tarayıcının adres çubuğu (URL) ile ilgili bilgileri içerir.
console.log("Çalıştığımız Port:", window.location.port); // Başına window yazmasak da çalışır.
console.log("Çalıştığımız Host:", location.hostname);


// 2. DOCUMENT NESNESİ
//--------------------------------------------------------------------------------
// - Yüklenen web sayfasının (HTML belgesinin) kendisini temsil eder.
// - document nesnesi, window nesnesinin içinde yer alan bir özelliktir (window.document).
// - HTML etiketlerine (elementlere) erişmek, onları değiştirmek, yeni etiketler oluşturmak için kullanılır.
// - document nesnesinin içindeki bir metoda erişmek için başına "document." yazmak zorunludur.

console.log(document);

// Örnek: HTML elementlerine erişim (İleride detaylı görülecek)
// document.getElementById(...)
// document.querySelector(...)
// document.createElement(...)


/*
    HİYERARŞİ (İç İçe Yapı):

    window (En dış katman - Tarayıcı Penceresi)
      |
      |--> document (HTML Sayfası)
      |      |
      |      |--> <html>
      |             |
      |             |--> <head>
      |             |--> <body>
      |
      |--> location (Adres Çubuğu)
      |--> console (Geliştirici Konsolu)
      |--> localStorage (Tarayıcı Depolama Alanı)
      |--> alert, setTimeout, setInterval vb. metotlar
*/

// 3. CONSOLE NESNESİ
//--------------------------------------------------------------------------------
// console nesnesi de aslında window nesnesinin bir parçasıdır.
// Farklı türde mesajlar yazdırmak için çeşitli metotları vardır.

console.log("Bu normal bir log mesajıdır.");
console.error("Bu bir hata mesajıdır. Genellikle hata ayıklarken kullanılır.");
console.warn("Bu bir uyarı mesajıdır. Potansiyel bir soruna işaret edebilir.");
console.info("Bu bir bilgi mesajıdır."); // Genellikle log ile aynı görünür.
