# HTML'de Dosya Yolları (File Paths)

Bu not, web geliştirmenin temel taşlarından olan dosya yollarının ne olduğunu, mutlak ve göreli yollar arasındaki farkı ve web sitelerinde kaynaklara (resim, başka bir HTML dosyası vb.) nasıl erişileceğini basitçe açıklar.

## Temel Konsept: Dosya Yolu Nedir?

Dosya yolu, bir bilgisayardaki bir dosyanın veya klasörün adresidir. Tıpkı bir evin adresi gibi, bir dosyanın da sabit disk üzerinde benzersiz bir konumu vardır. Web geliştirirken, bir HTML dosyasının başka bir dosyayı (örneğin bir resmi) bulabilmesi için bu adresi doğru bir şekilde belirtmemiz gerekir.

### İki Tür Dosya Yolu Vardır:

1.  **Mutlak Dosya Yolu (Absolute Path):**
    - **Nedir?** Dosyanın, bilgisayarın en kök dizininden (Windows'ta `C:\`, Mac/Linux'ta `/`) başlayan tam adresidir.
    - **Örnek (Mac):** `/Users/kullanici/Desktop/Proje/images/kedi.png`
    - **Ne zaman kullanılır?** Genellikle web geliştirme için **tercih edilmez**. Çünkü bu yol sadece sizin bilgisayarınızda çalışır. Projenizi başka bir bilgisayara veya sunucuya taşıdığınızda bu yol geçersiz olur.

2.  **Göreli Dosya Yolu (Relative Path):**
    - **Nedir?** Dosyanın, **şu anki dosyanın konumuna göre** olan adresidir. "Buradan başlayarak oraya nasıl giderim?" sorusunun cevabıdır.
    - **Neden Önemli?** Web geliştirmede **her zaman bu kullanılır**. Çünkü projenizin klasör yapısı değişmediği sürece, projenizi nereye taşırsanız taşıyın bu yollar çalışmaya devam eder. Projenizi sunucuya yüklediğinizde linkleriniz ve resimleriniz bozulmaz.

## Göreli Yollarda Gezinme: Özel Karakterler

Bulunduğumuz yerden başka bir dosyaya gitmek için bazı özel karakterler kullanırız:

- **`./` (Aynı Klasörün İçine Bak):**
  - Anlamı: "Şu an bulunduğum klasörün içindeki..."
  - **Örnek:** `index.html` ve `hakkimizda.html` aynı klasördeyse, `index.html`'den diğerine link verirken `./hakkimizda.html` kullanırız. (Sadece `hakkimizda.html` yazmak da genellikle çalışır, ancak `./` kullanmak daha nettir).

- **`../` (Bir Üst Klasöre Çık):**
  - Anlamı: "Bir üst klasöre çık ve oradan devam et."
  - **Örnek:** `index.html` dosyasından, bir üst klasördeki `images` klasörünün içindeki `logo.png`'ye erişmek için `../images/logo.png` yolunu kullanırız.

### Pratik Bir Örnek:

Klasör yapımız şöyle olsun:
```
proje/
├── index.html
└── images/
    └── kedi.png
```

`index.html` dosyasının içinden `kedi.png` resmini göstermek için yazmamız gereken kod:

```html
<!-- Önce images klasörüne gir, sonra kedi.png'yi bul -->
<img src="./images/kedi.png" alt="Kedi resmi">
```

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** HTML sayfama bir resmi nasıl eklerim, özellikle de resim başka bir klasördeyse?

**Cevap:** Resmin "adresini" doğru yazman lazım. Buna "dosya yolu" diyoruz. İki seçeneğin var ama sen **her zaman ikincisini** kullanacaksın:

1.  **Mutlak Yol (Kullanma!):** Bu, resmin bilgisayarındaki `C:\Users\...` gibi tam adresidir. Sadece senin bilgisayarında çalışır, bu yüzden unut gitsin.

2.  **Göreli Yol (Bunu Kullan!):** Bu, "şu anki HTML dosyamdan resme nasıl giderim?" demektir. Projen her yerde çalışır.
    -   Eğer resim **aynı klasördeyse**, sadece adını yaz: `kedi.png`.
    -   Eğer resim `images` gibi bir **alt klasördeyse**, önce klasörün adını yaz: `images/kedi.png`.
    -   Eğer resim bir **üst klasördeyse**, bir üste çıkmak için `../` kullan: `../baska-klasor/resim.png`.

Kısacası, bulunduğun yerden hedefe giden bir harita çiziyorsun. VS Code gibi editörler sen yazarken sana zaten doğru yolu önerecektir, bu da işini çok kolaylaştırır!

```