# HTML Boilerplate: Bir Web Sayfasının İskeleti

Bu not, her HTML dosyasının temelini oluşturan ve "boilerplate" olarak adlandırılan standart yapıyı ve bu yapıyı oluşturan temel etiketlerin ne anlama geldiğini basit bir dille açıklar.

## Temel Konsept: Boilerplate Nedir?

Boilerplate, her yeni HTML dosyası oluşturduğumuzda kullandığımız standart başlangıç şablonudur. Tıpkı bir mektubun standart bir formatı (adres, hitap, gövde, kapanış) olması gibi, HTML dosyalarının da tarayıcılar tarafından doğru anlaşılabilmesi için belirli bir yapısı vardır.

### Standart Bir HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Sayfanın görünür içeriği buraya gelir -->
</body>
</html>
```

## Bu Etiketler Ne Anlama Geliyor? (Satır Satır Açıklama)

1.  **`<!DOCTYPE html>`**
    - **Ne işe yarar?** Bu bir etiket değildir, bir bildirimdir. Tarayıcıya, "Bu dosya en son HTML sürümü olan HTML5 ile yazılmıştır" der. Her HTML dosyasının en başında mutlaka olmalıdır.

2.  **`<html>` (Kök Eleman)**
    - **Ne işe yarar?** Sayfadaki diğer tüm HTML elemanlarını içine alan en dıştaki etikettir. Bir hamburgerin ekmeği gibi düşünebilirsiniz; her şey onun arasında kalır.
    - **`lang="en"` niteliği:** Sayfanın ana dilinin İngilizce (`en`) olduğunu belirtir. Bu, özellikle ekran okuyucuların metni doğru telaffuz etmesi için önemlidir. Türkçe bir sayfa için `lang="tr"` kullanılır.

3.  **`<head>` (Baş Bölümü)**
    - **Ne işe yarar?** Bu bölüm, **kullanıcının doğrudan görmediği** ama sayfa için önemli olan meta-bilgileri içerir. Tarayıcıya sayfa hakkında bilgi verir.
    - **İçindekiler:**
        - **`<meta charset="UTF-8">`**: Sayfadaki metinlerin (Türkçe karakterler, emojiler dahil) doğru görüntülenmesini sağlayan karakter kodlamasını belirtir. Bu standarttır ve mutlaka olmalıdır.
        - **`<title>`**: Tarayıcı sekmesinde görünen sayfa başlığını belirler.
        - **`<meta name="viewport" ...>`**: Sayfanın mobil cihazlarda nasıl görüneceğini ayarlar, responsive (duyarlı) tasarım için kritiktir.

4.  **`<body>` (Gövde Bölümü)**
    - **Ne işe yarar?** Bu bölüm, web sayfasının **kullanıcı tarafından görülebilen tüm içeriğini** barındırır. Başlıklar (`<h1>`), paragraflar (`<p>`), resimler (`<img>`), linkler (`<a>`) gibi tüm görünür elemanlar bu etiketin içine yazılır.
    - Zamanımızın çoğunu kod yazarken bu bölümün içinde geçiririz.

## VS Code Kısayolu

Bu şablonu her seferinde elle yazmak yerine, boş bir `.html` dosyasında sadece **`!`** yazıp `Enter` tuşuna basarsanız, VS Code tüm bu boilerplate kodunu sizin için otomatik olarak oluşturur.

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Yeni bir HTML dosyasına başlarken ilk ne yazmalıyım? Standart bir başlangıç var mı?

**Cevap:** Evet, var! Buna "boilerplate" deniyor ve her HTML sayfasının iskeleti gibidir. Birkaç temel parçadan oluşur:

1.  **`<!DOCTYPE html>`:** En üste bunu yazarak tarayıcıya "Bu modern bir HTML sayfası" dersin.
2.  **`<html>`:** Sonra her şeyi bu etiketin içine alırsın. Bu, her şeyin kabıdır.
3.  **`<head>`:** Burası sayfanın beynidir. Kullanıcı görmez ama tarayıcı için önemli bilgiler burada durur. Mesela sayfanın sekmedeki başlığı (`<title>`) ve Türkçe karakterlerin düzgün görünmesini sağlayan sihirli `<meta charset="UTF-8">` satırı buradadır.
4.  **`<body>`:** Burası da sayfanın gövdesidir. Kullanıcının gördüğü her şey (yazılar, resimler, linkler) bu iki etiket arasına yazılır.

Kısacası, bir insan gibi düşünebilirsin: `<html>` tüm vücut, `<head>` kafa (görünmeyen düşünceler), `<body>` ise gövde (görünen kısım).

**Pro İpucu:** VS Code'da boş bir HTML dosyasında `!` yapıp `Enter`'a bas, hepsi sihirli bir şekilde gelsin!
