# HTML'de Linkler (Anchor Etiketleri) ve Nitelikler

Bu not, web sayfalarında nasıl link (köprü) oluşturulduğunu ve HTML etiketlerine ek bilgi ekleyen "niteliklerin" (attributes) ne işe yaradığını basitçe anlatır.

## Temel Konsept: Anchor (Çapa) Etiketi `<a>`

Başka bir web sayfasına veya aynı sayfanın farklı bir bölümüne gitmek için linkler kullanırız. HTML'de bunu `<a>` (anchor/çapa) etiketi ile yaparız.

- **Sadece `<a>` Etiketi Yeterli Değil!**
  Eğer kodu sadece `<a>Link Metni</a>` şeklinde yazarsak, bu tıklanabilir bir link olmaz. Sadece normal bir metin gibi görünür.

- **Sihirli Dokunuş: `href` Niteliği**
  Bir `<a>` etiketini tıklanabilir bir link yapmak için ona **nereye gideceğini** söylememiz gerekir. İşte burada **nitelikler (attributes)** devreye girer.

  Linkler için en önemli nitelik `href` (Hypertext Reference) niteliğidir.

  ```html
  <a href="https://www.google.com">Google'a Git</a>
  ```

  Bu kod, üzerine tıklandığında kullanıcıyı Google'a yönlendiren, altı çizili mavi bir link oluşturur.

## Nitelikler (Attributes) Nedir?

Nitelikler, HTML etiketlerine ek özellikler veya bilgiler katan özel kelimelerdir. **Her zaman açılış etiketinin içine yazılırlar.**

- **Yapısı:**
  `etiketAdı nitelikAdı="değer"`

  - **`nitelikAdı`**: Etikete eklemek istediğimiz özelliğin adı (örneğin `href`).
  - **`değer`**: Tırnak işaretleri içinde o özelliğin alacağı değer (örneğin `"https://www.google.com"`).

- **Türleri:**
  1.  **Özel Nitelikler:** Sadece belirli etiketlerle çalışan niteliklerdir. (`href` sadece `<a>` etiketinde anlamlıdır).
  2.  **Genel Nitelikler:** Hemen hemen tüm HTML etiketleriyle kullanılabilen niteliklerdir. (Örneğin, bir öğenin sürüklenip sürüklenemeyeceğini belirten `draggable="true"` niteliği).

### Örnek: Sıralı Listenin Başlangıcını Değiştirmek

`<ol>` (sıralı liste) etiketinin `start` adında özel bir niteliği vardır. Bu nitelik, listenin 1 yerine başka bir sayıdan başlamasını sağlar.

```html
<!-- Bu liste 5, 6, 7... diye başlar -->
<ol start="5">
  <li>İlk madde</li>
  <li>İkinci madde</li>
</ol>
```

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Web sayfama nasıl tıklanabilir bir link eklerim?

**Cevap:** `<a>` diye bir etiket kullanacaksın, adı "anchor" yani çapa demek. Ama tek başına işe yaramaz. Ona nereye gideceğini söylemen lazım.

Bunu yapmak için `<a>` etiketinin içine `href` adında bir "nitelik" ekliyorsun. Şöyle görünecek:

`<a href="GİDİLECEK_ADRES">Buraya Tıkla</a>`

`href=` kısmına linkin gitmesini istediğin web sitesinin adresini tırnak içinde yapıştırıyorsun. Hepsi bu kadar!

**Peki bu "nitelik" ne?**
Nitelikler, HTML etiketlerine süper güçler veren küçük eklentiler gibidir. Her zaman açılış etiketinin içine yazılırlar. Mesela `<ol>` listesine `start="5"` niteliğini eklersen, liste 1'den değil 5'ten başlar. Kısacası, etiketlerin davranışını değiştirmek veya onlara ek bilgi vermek için nitelikleri kullanırız.
