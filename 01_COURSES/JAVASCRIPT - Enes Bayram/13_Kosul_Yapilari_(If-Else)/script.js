/*
    KOŞUL YAPILARI (IF-ELSE)

    Koşul yapıları, programlamanın bel kemiğidir. Belirli bir koşulun doğru (true) veya yanlış (false) olmasına göre
    farklı kod bloklarının çalışmasını sağlarlar. Bu, programın akışını kontrol etmemizi ve yol ayrımları oluşturmamızı sağlar.
*/

// =================================================================================
// 1. TEMEL IF-ELSE YAPISI (İki İhtimalli Durumlar)
// =================================================================================
/*
    YAPI:
    if (koşul) {
        // Koşul true ise bu blok çalışır.
    } else {
        // Koşul false ise bu blok çalışır.
    }

    MANTIĞI:
    - `if` parantezi içindeki koşul kontrol edilir.
    - Eğer koşul `true` ise, `if` bloğunun içindeki kodlar çalışır ve `else` bloğu atlanır.
    - Eğer koşul `false` ise, `if` bloğu atlanır ve `else` bloğunun içindeki kodlar çalışır.
    - Her durumda bu iki bloktan SADECE BİRİ çalışır.
*/

let not = 45;

if (not > 50) {
    console.log("Tebrikler, geçtiniz! Notunuz: " + not);
} else {
    console.log("Maalesef, kaldınız. Notunuz: " + not);
}


// =================================================================================
// 2. ELSE IF YAPISI (İkiden Fazla İhtimalli Durumlar)
// =================================================================================
/*
    YAPI:
    if (koşul 1) {
        // Koşul 1 true ise bu blok çalışır.
    } else if (koşul 2) {
        // Koşul 1 false, ama koşul 2 true ise bu blok çalışır.
    } else if (koşul 3) {
        // Önceki koşullar false, ama koşul 3 true ise bu blok çalışır.
    } else {
        // Yukarıdaki koşulların HİÇBİRİ true değilse bu blok çalışır.
    }

    MANTIĞI:
    - Program yukarıdan aşağıya doğru koşulları kontrol eder.
    - Hangi koşul İLK OLARAK `true` sonucunu verirse, o bloğun içindeki kod çalışır ve yapıdan çıkılır. Diğer `else if` ve `else` blokları kontrol edilmez.
    - Eğer hiçbir koşul `true` olmazsa, en sondaki `else` bloğu çalışır.
    - Bu yapıda da her zaman SADECE BİR BLOK çalışır.
*/


// =================================================================================
// 3. PRATİK ÖRNEK: YOL SEÇME UYGULAMASI
// =================================================================================

let secilenYol = prompt("Lütfen gitmek istediğiniz yolu seçiniz (1, 2 veya 3):");

if (secilenYol == "1") { // Kullanıcıdan alınan değer string olduğu için `==` veya `=== "1"` kullanılabilir.
    alert("Seçilen yol 1. yoldur. Bu yol sizi dağlara götürür.");

} else if (secilenYol == "2") {
    alert("Seçilen yol 2. yoldur. Bu yol sizi deniz kenarına götürür.");

} else if (secilenYol == "3") {
    alert("Seçilen yol 3. yoldur. Bu yol sizi ormana götürür.");

} else {
    alert("Lütfen geçerli bir yol seçiniz! (1, 2 veya 3)");
}
