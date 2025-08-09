/*
    YORUM SATIRLARI

    Yorum satırları, JavaScript motoru (derleyici) tarafından okunmayan, dikkate alınmayan metinlerdir.
    Bu satırların hiçbir çıktısı veya kod üzerinde fonksiyonel bir etkisi yoktur.

    Neden Kullanılır?
    1.  Bilgilendirme: Kodu yazan kişinin veya başkalarının kodu daha sonra okuduğunda anlayabilmesi için notlar bırakmak.
        ("Bu fonksiyon, kullanıcı bilgilerini veritabanından çeker.")
    2.  Açıklama: Karmaşık bir kod bloğunun ne işe yaradığını açıklamak.
    3.  Hata Ayıklama: Kodun belirli bir bölümünü geçici olarak devre dışı bırakmak için kullanılır.
*/

// YÖNTEM 1: Tek Satırlık Yorum
//--------------------------------------------------------------------------------
// İki adet bölü (//) işareti ile oluşturulur. Bu işaretlerden sonra satır sonuna kadar yazılan her şey yorum kabul edilir.

console.log("Bu satır çalışır ve konsolda görünür.");
// console.log("Bu satır bir yorum olduğu için çalışmaz.");


// YÖNTEM 2: Çok Satırlı Yorum
//--------------------------------------------------------------------------------
/*
    Slash ve yıldız (/*) ile başlar, yıldız ve slash () ile biter.
    Bu iki işaret arasına yazılan her şey, birden fazla satıra yayılsa bile,
    yorum olarak kabul edilir.
    Her satırın başına // koyma zahmetinden kurtarır.
*/

/*
console.log("Satır 1");
console.log("Satır 2");
console.log("Satır 3");
Bu blok komple yorum içinde olduğu için hiçbir satır çalışmayacaktır.
*/


// KISAYOL: Toplu Yorumlama
//--------------------------------------------------------------------------------
// Yorum satırı yapmak veya yorumdan çıkarmak istediğiniz satırları seçip
// Ctrl + Ö (veya klavye düzeninize göre Ctrl + /) tuş kombinasyonunu kullanabilirsiniz.


// BETTER COMMENTS EKLENTİSİ İLE RENKLİ YORUMLAR
//--------------------------------------------------------------------------------
// Bu eklenti, yorumları daha anlamlı hale getirmek için renklendirir.

//! Kırmızı: Çok önemli bir uyarı, dikkat edilmesi gereken kritik bir nokta.
//? Mavi: Bir soru, açıklama bekleyen veya belirsiz bir kısım.
//* Yeşil/Parlak: Vurgulanması gereken bir bilgi, bir başlık veya önemli bir not.
//TODO: Turuncu: Yapılacaklar listesi. Daha sonra tamamlanması gereken bir işi belirtir.
