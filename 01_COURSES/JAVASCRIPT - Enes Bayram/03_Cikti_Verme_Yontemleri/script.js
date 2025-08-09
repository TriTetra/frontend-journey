/*
    JavaScript'te ekrana veya konsola çıktı vermenin birkaç yolu vardır.
    Bu yöntemler, kodun doğru çalışıp çalışmadığını test etmek, değişkenlerin değerlerini görmek
    veya kullanıcıya mesajlar göstermek için çok önemlidir.
*/

// YÖNTEM 1: document.write()
//--------------------------------------------------------------------------------
// Bu yöntem, doğrudan HTML sayfasının içeriğine (body) yazı yazmak için kullanılır.
// Genellikle test amaçlı kullanılır, çünkü sayfanın mevcut içeriğini silebilir.

document.write("Hello World");
document.write("<br>"); // Alt satıra geçmek için HTML <br> etiketi kullanabiliriz.
document.write(55);
document.write("<br>");
document.write(true);


// YÖNTEM 2: console.log()
//--------------------------------------------------------------------------------
// Bu, geliştiricilerin en sık kullandığı yöntemdir. Tarayıcının geliştirici konsoluna mesajlar yazar.
// Kullanıcı bunu doğrudan sayfada görmez. Hata ayıklama (debugging) için idealdir.
// F12 tuşuna basıp "Console" sekmesine geçerek bu çıktıları görebilirsiniz.

console.log("Hello World");
console.log("Enes Bayram");
console.log(3.53);
console.log({ name: "Enes", surname: "Bayram" }); // Obje yazdırma

// Konsolu temizlemek için kullanılır.
// console.clear();

let a = 5;
let b = 10;
console.log("İki sayının toplamı:", a + b);


// YÖNTEM 3: alert()
//--------------------------------------------------------------------------------
// Kullanıcıya bir uyarı mesajı göstermek için kullanılan bir pop-up (açılır pencere) oluşturur.
// Kullanıcı bu pencereyi kapatmadan sayfadaki başka bir işlemle etkileşime giremez.

// alert("Merhaba Dünya!");

// let sayi1 = 10;
// let sayi2 = 12;
// alert("İki sayının toplamı: " + (sayi1 + sayi2));

// alert("F5 tuşuna lütfen basmayınız.");


/*
    ÖNEMLİ KAVRAMLAR: window ve document objeleri

    - window: JavaScript'teki en genel ve en büyük objedir. Tarayıcı penceresinin kendisini temsil eder.
      alert(), console.log() gibi birçok global fonksiyon aslında window objesinin birer metodudur.
      (window.alert() yazmakla alert() yazmak aynı şeydir.)

    - document: HTML sayfasının kendisini temsil eden bir objedir. window objesinin içinde yer alır.
      document.write(), getElementById() gibi metodlarla HTML içeriğine erişmemizi ve onu değiştirmemizi sağlar.

    Hiyerarşi: window -> document -> HTML elementleri
*/

console.log(window); // Tarayıcı penceresine ait tüm özellikleri ve metodları gösterir.
console.log(document.location.host); // Sayfanın barındırıldığı adresi (host) verir.
