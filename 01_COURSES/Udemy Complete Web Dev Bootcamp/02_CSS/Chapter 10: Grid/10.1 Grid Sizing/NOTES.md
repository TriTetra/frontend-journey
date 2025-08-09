# Grid Boyutlandırma: Satır ve Sütunları Kontrol Etme

Bu bölümde, CSS Grid'in en temel ve en güçlü yönlerinden birini inceliyoruz: ızgara yollarını (grid tracks - satır ve sütunlar) nasıl boyutlandıracağımızı.

### Feynman Tekniği: Izgara Planı Çizmek

Grid boyutlandırmayı, bir mimarın bina planı çizmesine benzetebiliriz. Binanın odalarını (ızgara hücreleri) yerleştirmeden önce, duvarların nereye geleceğini ve her odanın ne kadar büyük olacağını belirlersiniz.

CSS Grid'de de `grid-template-columns` ve `grid-template-rows` kullanarak bu planı çizeriz. Bu planı çizerken cetvel gibi sabit ölçüler (`px`), orantılı lastik bantlar gibi esnek ölçüler (`fr`) veya "duruma göre ayarla" gibi akıllı kurallar (`auto`, `minmax`) kullanabiliriz.

---

## Grid Boyutlandırma Birimleri ve Fonksiyonları

| Birim / Fonksiyon | Açıklama | Davranış |
| :--- | :--- | :--- |
| **`px`, `rem`** | **Sabit Boyutlar:** Belirli bir piksel veya kök `font-size`'a bağlı boyut. | Duyarlı değildir. Ekran boyutu değişse de aynı kalır. |
| **`auto`** | **Otomatik Boyut:** İçeriğe veya kalan boşluğa göre ayarlanır. | **Sütunlarda:** Kalan boşluğu doldurmak için esner. <br> **Satırlarda:** İçindeki içeriğe sığacak kadar yükselir. |
| **`fr`** | **Kesirli Birim (Fractional Unit):** Mevcut boşluğu orantılı olarak paylaştırır. | Son derece esnek ve duyarlıdır. `1fr 2fr` demek, toplam alanı 1'e 2 oranında böl demektir. |
| **`minmax()`** | **Minimum ve Maksimum Boyut:** Bir yolun alabileceği en küçük ve en büyük boyutu tanımlar. | `minmax(200px, 500px)`: "200px'den küçük olma, ama 500px'den de büyük olma" demektir. Duyarlılık için harikadır. |
| **`repeat()`** | **Tekrar Fonksiyonu:** Tekrar eden ızgara yollarını kısa yoldan yazmayı sağlar. | `repeat(8, 1fr)` yazmak, `1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr` yazmakla aynıdır. |

---

## Belirgin (Explicit) ve Örtük (Implicit) Izgaralar

Bu, Grid'in en önemli kavramlarından biridir.

*   **Belirgin Izgara (Explicit Grid):** Sizin `grid-template-rows` ve `grid-template-columns` ile **açıkça tanımladığınız** ızgara alanıdır. Planın kendisidir.

*   **Örtük Izgara (Implicit Grid):** Tanımladığınız alana sığmayan (fazladan eklenen) ızgara öğeleri için Grid'in **otomatik olarak oluşturduğu** satır ve sütunlardır.

Eğer 2x2'lik bir ızgara tanımlarsanız ama 5. bir öğe eklerseniz, bu 5. öğe örtük bir satıra yerleşir. Bu örtük yolların boyutunu kontrol etmek için şu özellikleri kullanırız:

*   `grid-auto-rows`: Otomatik oluşturulan satırların yüksekliğini belirler.
*   `grid-auto-columns`: Otomatik oluşturulan sütunların genişliğini belirler.

---

## `grid-template` Kısa Yazımı (Shorthand)

Satır ve sütunları tek bir özellikte birleştirebilirsiniz.

```css
.container {
  /* Önce satırlar, sonra / işareti, sonra sütunlar */
  grid-template: 100px 200px / 1fr 2fr;
}
```
**Not:** Bu daha az okunabilir olduğu için öğrenme aşamasında ayrı ayrı (`grid-template-rows` ve `grid-template-columns`) kullanmak daha iyidir.

---

## Chrome Geliştirici Araçları ile Hata Ayıklama

Grid ile çalışırken tarayıcının geliştirici araçları en iyi dostunuzdur.
1.  İncelemek istediğiniz sayfada sağ tıklayıp **"İncele" (Inspect)** deyin.
2.  **Elements** panelinde, `display: grid` uygulanmış HTML elemanının yanında küçük bir **"grid"** etiketi göreceksiniz.
3.  Bu etikete tıkladığınızda, sayfa üzerinde ızgara çizgilerini, satır/sütun numaralarını ve boyutlarını gösteren bir katman (overlay) belirir. Bu, düzeninizi anlamak ve hataları bulmak için paha biçilmezdir.

---

## Pratik Örnek: Karmaşık ve Duyarlı Bir Düzen Oluşturma

**Hedef:** Farklı boyutlandırma tekniklerini bir arada kullanan, duyarlı bir ızgara oluşturmak.

*   **Satırlar:** İlk iki satır eşit, üçüncü satır onların iki katı yüksekliğinde. Şablon dışındaki (örtük) satırlar `50px` yüksekliğinde.
*   **Sütunlar:**
    *   1. Sütun: Esnek, kalan boşluğu doldurur (`auto`).
    *   2. Sütun: Sabit `400px` genişliğinde.
    *   3. Sütun: Minimum `200px`, maksimum `500px` genişliğinde (`minmax`).

**CSS Çözümü:**

```css
.grid-container {
  display: grid;

  /* Satır Şablonu: 1 birim, 1 birim, 2 birim */
  grid-template-rows: 1fr 1fr 2fr;

  /* Sütun Şablonu: Otomatik, Sabit, Min-Max */
  grid-template-columns: auto 400px minmax(200px, 500px);

  /* Şablon dışına taşan (örtük) satırların yüksekliği 50px olsun */
  grid-auto-rows: 50px;
}
```

---
## Kaynaklar

*   **Grid Boyutlandırma Demosu:**
    *   [Grid Sizing Demo](https://appbrewery.github.io/grid-sizing/)
    *   Bu derste bahsedilen tüm boyutlandırma türlerini canlı olarak deneyimlemek için bu siteyi kullanın.
