# HTML'de Çok Sayfalı Web Siteleri Oluşturma

Bu not, tek bir HTML dosyasından çıkarak "Hakkımızda", "İletişim" gibi birden çok sayfadan oluşan bir web sitesinin nasıl yapılandırıldığını ve bu sayfalar arasında nasıl link (bağlantı) kurulduğunu basitçe açıklar.

## Temel Konsept: Her Sayfa Bir HTML Dosyasıdır

Çok sayfalı bir web sitesi, aslında birbiriyle bağlantılı bir dizi HTML dosyasından oluşur. Her sayfanın kendine ait bir `.html` dosyası vardır.

- **`index.html` (Ana Sayfa):** Bu, projenin ana giriş sayfasıdır. Bir kullanıcı web sitenizin adresine gittiğinde tarayıcının ilk açtığı dosyadır. Bu bir kuraldır.
- **Diğer Sayfalar:** `hakkimizda.html`, `iletisim.html`, `urunler.html` gibi diğer tüm sayfalar projenin diğer HTML dosyalarıdır.

### Tipik Bir Klasör Yapısı

Projeyi düzenli tutmak için genellikle şöyle bir yapı kullanılır:

```
proje/
├── index.html
├── public/  (veya pages/)
│   ├── hakkimizda.html
│   └── iletisim.html
└── assets/  (veya images/)
    └── resim.png
```

- **`public` klasörü:** Ana sayfa (`index.html`) dışındaki tüm diğer HTML sayfalarını bu klasörde toplamak yaygın bir pratiktir.
- **`assets` klasörü:** Resimler, CSS dosyaları, JavaScript dosyaları gibi yardımcı kaynaklar bu klasörde tutulur.

## Sayfalar Arasında Link Verme

Sayfalar arasında gezinmeyi sağlamak için `<a>` (anchor) etiketini ve **göreli dosya yollarını** kullanırız.

**Örnek:** `index.html` (ana sayfa) dosyasından `hakkimizda.html` sayfasına link vermek.

Yukarıdaki klasör yapısına göre, `index.html` içindeki kod şöyle olmalıdır:

```html
<!-- Önce "public" klasörüne gir, sonra "hakkimizda.html" dosyasını bul -->
<a href="./public/hakkimizda.html">Hakkımızda</a>
```

Kullanıcı bu linke tıkladığında, tarayıcı `hakkimizda.html` dosyasının içeriğini görüntüler.

## Bir Resmi Link Olarak Kullanmak

Bazen metin yerine bir resmin tıklanabilir olmasını isteyebiliriz. Bu çok basittir: `<a>` etiketinin içine metin yerine bir `<img>` etiketi koyarız.

**Örnek:** `index.html` dosyasında, tıklandığında `hakkimizda.html` sayfasına giden bir resim.

```html
<a href="./public/hakkimizda.html">
  <!-- Linkin adresi <a> etiketinde, resmin kaynağı <img> etiketinde -->
  <img src="./assets/resim.png" alt="Hakkımızda sayfasına gitmek için tıklayın">
</a>
```

Burada `<a>` etiketi, linkin nereye gideceğini belirlerken, içindeki `<img>` etiketi hangi resmin gösterileceğini belirler.

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Sadece tek bir sayfadan oluşan değil de, "Hakkımızda", "İletişim" gibi birden çok sayfası olan bir web sitesini nasıl yaparım?

**Cevap:** Çok basit! Her sayfa için ayrı bir HTML dosyası oluşturacaksın. Ana sayfana her zaman `index.html` adını ver. Diğerlerini de `hakkimizda.html`, `iletisim.html` gibi isimlendir.

**Peki bu sayfalar arasında nasıl geçiş yapacağım?**
Bunun için bildiğin link etiketini (`<a>`) kullanacaksın. `href` kısmına gitmek istediğin HTML dosyasının yolunu yazacaksın. Tıpkı bir resmin yolunu yazar gibi!

**Örnek:** Ana sayfadan (`index.html`) iletişim sayfasına (`iletisim.html`) link vermek için:
`<a href="./iletisim.html">Bize Ulaşın</a>`

**Bonus:** Eğer bir resme tıklanınca başka bir sayfaya gitmesini istersen, `<a>` etiketinin içine yazı yazmak yerine `<img>` etiketini koy. Bu kadar!
`<a href="..."><img src="..." /></a>`
