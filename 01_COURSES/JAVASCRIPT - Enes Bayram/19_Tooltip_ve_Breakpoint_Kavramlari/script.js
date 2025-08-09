/*
    Bu derste, kod yazarken ve hata ayıklarken işimizi inanılmaz kolaylaştıran iki önemli konsepti öğreneceğiz:
    1. Tooltip (İpucu Araçları)
    2. Breakpoint (Durdurma Noktası) ve Debugger
*/

// =================================================================================
// 1. TOOLTIP (İPUCU ARAÇLARI)
// =================================================================================

/*
    - Nedir? Kod editörünüzde (örn: VS Code) bir metodun veya değişkenin üzerine fare ile geldiğinizde
      açılan küçük bilgi kutucuğudur.

    - Ne İşe Yarar? Bu kutucuklar, o metodun ne işe yaradığını, hangi parametreleri aldığını ve geriye
      ne tür bir değer döndürdüğünü anlatan çok değerli açıklamalardır.

    - Nasıl Kullanılır? Bir metodu yazarken, parantezi açmadan veya enter'a basmadan önce üzerine gelip
      bekleyin ve açıklamayı okuyun. Bu, metodu doğru kullanmanızı sağlar ve ezber yapmanızı engeller.

    Örnek: `parseInt` metodunun tooltip'ini okumak.
    parseInt() // Üzerine geldiğinizde, bir string alıp number döndürdüğünü anlatan bir açıklama çıkar.
*/


// =================================================================================
// 2. BREAKPOINT (DURDURMA NOKTASI) VE DEBUGGER
// =================================================================================

/*
    - Nedir? Kodun normal akışını (milisaniyeler içinde çalışmasını) durdurup, satır satır ilerlemesini
      sağlayan bir işaretçidir. Bu işleme "debugging" (hata ayıklama) denir.

    - Ne İşe Yarar?
        1. Hata Ayıklama: Kodunuzda bir hata olduğunda, kodun nerede ve neden patladığını bulmak için
           adım adım ilerleyerek değişkenlerin o anki değerlerini kontrol etmenizi sağlar.
        2. Kodu Anlama: Karmaşık bir kod bloğunun nasıl çalıştığını, değişkenlerin nasıl değiştiğini
           anlamak için en etkili yoldur.

    - Nasıl Kullanılır? Kodunuzun durmasını ve adım adım incelemeye başlamak istediğiniz yere
      `debugger;` anahtar kelimesini yazarsınız.
*/

// Örnek:
let a = 10;
let b = 15;
let c = a + b;
let d = a + b + c;

// Tarayıcıda F12 ile Geliştirici Araçları'nı açın ve "Sources" (Kaynaklar) sekmesine gelin.
// Kod, aşağıdaki `debugger;` satırına geldiğinde duracak ve incelemenize olanak tanıyacaktır.
debugger;

// Kod durduktan sonra, "Step over next function call" (F10) tuşu ile satır satır ilerleyebilirsiniz.
// Her adımda, fareyi değişkenlerin üzerine getirerek o anki değerlerini görebilirsiniz.
let e = a + c + d;
let sonuc = a + b + c + d + e;

console.log(sonuc);
