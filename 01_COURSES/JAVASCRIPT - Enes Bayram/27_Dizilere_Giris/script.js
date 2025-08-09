/*
    DİZİLERE GİRİŞ (ARRAYS)

    - Nedir? Diziler (Arrays), birden fazla değeri tek bir değişken altında, sıralı bir şekilde tutmamızı sağlayan veri yapılarıdır.
      Gerçek hayatta bir sepet veya bir liste gibi düşünebilirsiniz.

    - Neden Kullanılır? Benzer türdeki (veya farklı türdeki) birçok veriyi ayrı ayrı değişkenlerde tutmak yerine,
      tek bir yapıda toplamak ve bu verilere kolayca erişmek, üzerinde işlem yapmak için kullanılır.
      Örneğin, 500 personel ismini tek tek `personel1`, `personel2` diye tanımlamak yerine, `personeller` adında bir dizi içinde tutabiliriz.
*/

// =================================================================================
// 1. DİZİ TANIMLAMA
// =================================================================================

/*
    - Diziler, köşeli parantezler `[]` kullanılarak tanımlanır.
    - Elemanlar virgül `,` ile ayrılır.
*/

// Örnek 1: Sayılardan oluşan bir dizi
let sayilar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Sayılar Dizisi:", sayilar);

// Örnek 2: İsimlerden oluşan bir dizi
let isimler = ["Enes", "Kübra", "Yusuf", "Ayşenur"];
console.log("İsimler Dizisi:", isimler);

// Örnek 3: Farklı veri tiplerini içeren bir dizi (JavaScript'e özgü bir esneklik)
let karisikDizi = [10, "Merhaba", true, 3.14, null, undefined, {ad: "Ali"}];
console.log("Karışık Dizi:", karisikDizi);


// =================================================================================
// 2. İNDEKS KAVRAMI
// =================================================================================

/*
    - Dizilerdeki her elemanın bir sırası (konumu) vardır. Bu sıraya "indeks" denir.
    - Dizilerde sayma işlemi 0'dan başlar (sıfır tabanlı indeksleme).
      Yani ilk elemanın indeksi 0, ikincinin 1, üçüncünün 2 vb.
    - Gerçek hayattaki koltuk numaraları gibi düşünebilirsiniz, ancak saymaya 0'dan başlıyoruz.
*/

// isimler dizisi için indeksler:
// "Enes"    -> indeks 0
// "Kübra"   -> indeks 1
// "Yusuf"   -> indeks 2
// "Ayşenur" -> indeks 3


// =================================================================================
// 3. DİZİ ELEMANLARINA ERİŞME
// =================================================================================

/*
    - Dizi elemanlarına erişmek için dizi adından sonra köşeli parantez `[]` içine indeks numarasını yazarız.
*/

console.log("\n----- Dizi Elemanlarına Erişim -----");
console.log("İsimler dizisinin 0. indeksi:", isimler[0]); // Çıktı: Enes
console.log("İsimler dizisinin 2. indeksi:", isimler[2]); // Çıktı: Yusuf
console.log("Karışık dizinin 3. indeksi:", karisikDizi[3]); // Çıktı: 3.14

// Olmayan bir indekse erişmeye çalışırsak `undefined` döner.
console.log("Olmayan indeks (isimler[5]):", isimler[5]); // Çıktı: undefined


// =================================================================================
// 4. DİZİ ELEMANLARINI DEĞİŞTİRME
// =================================================================================

/*
    - İndeks numarasını kullanarak dizinin belirli bir elemanının değerini değiştirebiliriz.
*/

console.log("\n----- Dizi Elemanlarını Değiştirme -----");
console.log("Değiştirmeden önce isimler[1]:", isimler[1]); // Kübra
isimler[1] = "Mehmet"; // 1. indeksteki Kübra'yı Mehmet ile değiştir.
console.log("Değiştirdikten sonra isimler[1]:", isimler[1]); // Mehmet
console.log("Güncel İsimler Dizisi:", isimler);


// =================================================================================
// 5. DİZİ UZUNLUĞU (LENGTH ÖZELLİĞİ)
// =================================================================================

/*
    - `length` özelliği, bir dizideki eleman sayısını (uzunluğunu) verir.
    - İndeksler 0'dan başladığı için, son elemanın indeksi `length - 1` olur.
*/

console.log("\n----- Dizi Uzunluğu (length) -----");
console.log("İsimler dizisinin uzunluğu:", isimler.length); // Çıktı: 4

// Son elemana erişme (length - 1 kullanarak)
console.log("İsimler dizisinin son elemanı:", isimler[isimler.length - 1]); // Çıktı: Ayşenur

