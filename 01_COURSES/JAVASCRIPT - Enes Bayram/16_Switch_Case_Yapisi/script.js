/*
    SWITCH - CASE YAPISI

    - Nedir? Switch-case yapısı, bir değişkenin alabileceği farklı değerlere göre farklı kod bloklarının çalıştırılmasını sağlayan bir kontrol mekanizmasıdır.

    - Amacı Nedir? Tıpkı `if-else if-else` yapısı gibi, programda yol ayrımları oluşturmak ve belirli koşullara göre farklı işlemler yapmak için kullanılır.

    - Kimin Alternatifidir? `if-else if-else` yapısının bir alternatifidir. Özellikle bir değişkenin alabileceği çok sayıda belirli ve sabit değer (1, 2, 3, "A", "B" gibi) varsa, `if-else` zincirine göre daha okunaklı bir kod sunabilir.

    - Ne Sıklıkla Kullanılır? `if-else` yapılarına göre daha az tercih edilir, ancak kodlarda karşılaşıldığında ne işe yaradığını bilmek önemlidir.
*/

// -------------------- SWITCH-CASE ÇALIŞMA MANTIĞI --------------------

/*
    switch (kontrol_edilecek_deger) {

        case deger1:
            // kontrol_edilecek_deger, deger1'e eşitse bu kodlar çalışır.
            break; // break: switch yapısından çıkılmasını sağlar.

        case deger2:
            // kontrol_edilecek_deger, deger2'ye eşitse bu kodlar çalışır.
            break;

        case deger3:
            // kontrol_edilecek_deger, deger3'e eşitse bu kodlar çalışır.
            break;

        default:
            // kontrol_edilecek_deger, yukarıdaki case'lerden hiçbirine eşit değilse bu kodlar çalışır.
            // (if-else yapısındaki `else` bloğuna benzer.)
    }
*/

// 1. `switch` parantezi içindeki `kontrol_edilecek_deger` alınır.
// 2. Bu değer, yukarıdan aşağıya doğru sırayla `case` bloklarındaki değerlerle karşılaştırılır (`===` gibi katı bir denklik kontrolü yapılır).
// 3. Hangi `case` bloğundaki değer ile eşleşirse, o `case` bloğunun içindeki kodlar çalıştırılır.
// 4. `break` anahtar kelimesi görüldüğünde, switch yapısı tamamen sonlandırılır ve program alttan devam eder.
//    (break kullanılmazsa ne olacağını bir sonraki derste göreceğiz, bu önemli bir detaydır.)
// 5. Eğer `kontrol_edilecek_deger` hiçbir `case` ile eşleşmezse, en sondaki `default` bloğu çalışır.

// Bu ders sadece teorik bir anlatım olduğu için pratik örnek bir sonraki derste yapılacaktır.
console.log("Switch-Case yapısının teorik anlatımı tamamlandı. Pratik örnek için bir sonraki dersi inceleyin.");
