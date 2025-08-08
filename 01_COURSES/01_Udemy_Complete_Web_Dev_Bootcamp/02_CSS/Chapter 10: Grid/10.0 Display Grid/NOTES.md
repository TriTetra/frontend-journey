# CSS Grid'e Giriş: `display: grid`

Bu bölümde, web sayfaları için iki boyutlu (2D) düzenler oluşturmamızı sağlayan güçlü CSS aracı olan **Grid**'i öğreniyoruz.

### Feynman Tekniği: Tek Boyutlu vs. İki Boyutlu

Flexbox ve Grid arasındaki temel farkı anlamanın en kolay yolu şudur:

*   **Flexbox (1D):** Tek bir sıra halinde dizilmiş domino taşları gibidir. Onları yalnızca tek bir hat (boyut) üzerinde, yani ya yatay bir satırda ya da dikey bir sütunda hizalayabilirsiniz. Bir menüdeki öğeleri yan yana dizmek gibi tek boyutlu görevler için mükemmeldir.

*   **Grid (2D):** Bir satranç tahtası veya Excel tablosu gibidir. Hem satırları hem de sütunları aynı anda kontrol edebilirsiniz. Bu, size iki boyutlu bir alan üzerinde tam bir hakimiyet sağlar ve karmaşık sayfa yerleşimleri (header, sidebar, main content, footer gibi) oluşturmayı çok kolaylaştırır.

---

## Flexbox vs. Grid Karşılaştırması

| Özellik | Flexbox (Tek Boyutlu) | Grid (İki Boyutlu) |
| :--- | :--- | :--- |
| **Boyut** | Tek boyutlu (1D) çalışır: ya satır ya da sütun. | İki boyutlu (2D) çalışır: satırlar ve sütunlar aynı anda. |
| **Temel Kullanım** | İçeriği bir hat boyunca hizalamak ve dağıtmak. | Genel sayfa düzenini (layout) oluşturmak. |
| **Odak Noktası** | **İçerik odaklıdır.** Öğeler içeriğe göre esner ve sıkışır. | **Düzen odaklıdır.** Öğeler önceden tanımlanmış ızgara hücrelerine yerleşir. |

> **Önemli:** Bu iki araç birbirinin rakibi değildir. Genellikle birlikte kullanılırlar. Sayfanın genel iskeletini `Grid` ile oluşturup, bu iskeletin içindeki bir bileşeni (örneğin bir kartın içindeki ikon ve metin) `Flexbox` ile hizalamak çok yaygın ve güçlü bir yöntemdir.

---

## Temel Bir Grid Nasıl Oluşturulur?

Grid oluşturmak, Flexbox'a oldukça benzer bir mantıkla başlar.

1.  **Kapsayıcı (Container):** Izgara olmasını istediğiniz öğeleri bir kapsayıcı içine alın.
2.  **`display: grid`:** Kapsayıcıya bu CSS özelliğini verin.
3.  **Şablon Tanımlama:** Izgaranızın yapısını `grid-template-columns` ve `grid-template-rows` ile tanımlayın.

**Örnek Kod:**

```css
.container {
  display: grid;
  /* İki sütun oluştur: ikinci sütun birincinin 2 katı genişliğinde olsun */
  grid-template-columns: 1fr 2fr; 
  /* İki eşit yükseklikte satır oluştur */
  grid-template-rows: 1fr 1fr;
  /* Hücreler arasına 10px boşluk bırak */
  gap: 10px;
}
```

*   **`fr` (Fractional Unit - Kesirli Birim):** Bu birim, mevcut alanın belirtilen oranlarda paylaştırılmasını sağlar. `1fr 2fr`, toplam 3 birimlik alanın 1 birimini ilk sütuna, 2 birimini ikinci sütuna ver demektir.

---

## Pratik Örnek: Satranç Tahtası

**Hedef:** `Grid` kullanarak 8x8'lik, her karesi 100x100 piksel olan bir satranç tahtası oluşturmak.

**HTML (Basitleştirilmiş):**
```html
<div class="container">
  <div class="white"></div>
  <div class="black"></div>
  <!-- ... toplam 64 kare -->
</div>
```

**CSS Çözümü:**

```css
.white {
  background-color: #f0d9b5;
  height: 100px;
  width: 100px;
}

.black {
  background-color: #b58863;
  height: 100px;
  width: 100px;
}

.container {
  display: grid;
  /* 8 adet 100px genişliğinde sütun oluştur */
  grid-template-columns: repeat(8, 100px);
  /* 8 adet 100px yüksekliğinde satır oluştur */
  grid-template-rows: repeat(8, 100px);

  /* Izgaranın toplam genişliğini 800px ile sabitleyerek
     daha kompakt görünmesini sağla */
  width: 800px; 
}
```
*   **`repeat()` Fonksiyonu:** `repeat(8, 100px)` yazmak, `100px 100px 100px 100px 100px 100px 100px 100px` yazmanın kısa ve temiz yoludur.

---

## Kaynaklar ve Pratik

*   **Grid ve Flexbox Farkını Görsel Olarak Anlayın:**
    *   [Grid vs. Flexbox Demo](https://appbrewery.github.io/grid-vs-flexbox/)
    *   Bu demo sitesinde tarayıcı penceresini daraltıp genişleterek iki sistemin farklı davranışlarını gözlemleyin.
