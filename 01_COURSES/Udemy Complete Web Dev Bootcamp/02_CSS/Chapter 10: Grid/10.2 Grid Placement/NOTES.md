# Grid Yerleşimi: Öğeleri Izgaraya Yerleştirme

Bu bölümde, ızgaramızı oluşturduktan sonra, öğeleri bu ızgaranın istediğimiz hücrelerine nasıl yerleştireceğimizi öğreniyoruz.

### Feynman Tekniği: Kat Planına Mobilya Yerleştirmek

Izgarayı bir evin kat planı gibi düşünün. Önceki derste `grid-template` ile duvarları çizip odaları (hücreleri) oluşturdunuz. Şimdi ise **Grid Yerleştirme (Grid Placement)** özelliklerini kullanarak mobilyaları (öğeleri) bu odalara yerleştirme zamanı. Bir öğeyi tek bir odaya koyabilir, birkaç odayı birleştiren büyük bir dolap gibi uzatabilir, hatta bir masayı sandalyenin üzerine koyar gibi üst üste bindirebilirsiniz.

---

## Grid Terminolojisi

Yerleştirme yapmadan önce, Grid'in temel yapı taşlarını anlamak çok önemlidir.

| Terim | Açıklama |
| :--- | :--- |
| **Grid Container** | `display: grid` uygulanmış olan ana kapsayıcı (genellikle bir `div`). |
| **Grid Item** | Grid Container'ın içindeki doğrudan alt öğeler. |
| **Grid Track** | Bir ızgaradaki satır veya sütunların tamamı. |
| **Grid Cell** | Bir satır ve bir sütunun kesiştiği en küçük birim. Bir ızgara hücresi. |
| **Grid Line** | Izgara yapısını oluşturan yatay ve dikey çizgiler. Yerleştirme için referans noktalarıdır. |

**Görsel Diyagram:**
```
      Line 1      Line 2      Line 3
    +-----------+-----------+-----------+
L 1 |           |           |           |
i   |   Cell    |   Cell    |   Cell    |
n   |           |           |           |
e   +-----------------------------------+  <-- Row Track
    |           |           |           |
L 2 |   Cell    |   Cell    |   Cell    |
i   |           |           |           |
n   +-----------+-----------+-----------+
e   |
      ^-- Column Track
```

---

### Ara Not: Izgara Hücresi İçinde Hizalama (Flexbox ile)

Grid, sayfanın genel düzenini oluşturur. Ancak bir ızgara hücresinin *içindeki* içeriği hizalamak için en iyi araç genellikle **Flexbox**'tır.

**Hedef:** Bir ızgara öğesi olan `div`'in içindeki emojiyi tam ortaya hizalamak.

**Çözüm:**
```css
.grid-item {
  display: flex;
  justify-content: center; /* Ana eksende (yatay) ortala */
  align-items: center;     /* Çapraz eksende (dikey) ortala */
}
```
Bu, Grid ve Flexbox'ın nasıl mükemmel bir şekilde birlikte çalıştığının harika bir örneğidir.

---

## Öğeleri Izgaraya Yerleştirme Yöntemleri

### 1. `span` ile Hücreleri Birleştirme

Bir öğenin birden fazla satır veya sütun kaplamasını sağlamanın en kolay yoludur.

```css
.item-1 {
  /* Başladığı yerden itibaren 2 sütunluk yer kapla */
  grid-column: span 2; 
}

.item-3 {
  /* Başladığı yerden itibaren 2 satırlık yer kapla */
  grid-row: span 2;
}
```

### 2. Çizgi Numaraları ile Konumlandırma

Öğeleri, ızgara çizgilerinin numaralarını referans alarak tam olarak istediğiniz yere yerleştirebilirsiniz. (Chrome Geliştirici Araçları'nda bu çizgileri görebilirsiniz).

*   `grid-column-start` / `grid-column-end`
*   `grid-row-start` / `grid-row-end`

```css
.item-2 {
  /* 1. sütun çizgisinden başla, 3. sütun çizgisinde bitir */
  grid-column-start: 1;
  grid-column-end: 3;

  /* 2. satır çizgisinden başla, 3. satır çizgisinde bitir */
  grid-row-start: 2;
  grid-row-end: 3;
}
```
> **Profesyonel İpucu:** `grid-column-end: -1;` kullanmak, öğenin ızgaranın **en son sütun çizgisine** kadar uzanmasını sağlar. Bu, sütun sayısını bilmediğiniz dinamik ızgaralarda çok kullanışlıdır.

### 3. `grid-area` Kısa Yazımı

Yukarıdaki dört özelliği tek bir satırda birleştirmek için kullanılır. Sıralama çok önemlidir!

```css
.item-2 {
  /* row-start / column-start / row-end / column-end */
  grid-area: 2 / 1 / 3 / 3;
}
```

### 4. `order` ile Görsel Sırayı Değiştirme

Flexbox'ta olduğu gibi, `order` özelliği bir öğenin HTML'deki yerinden bağımsız olarak ızgaradaki görsel sırasını değiştirir. Varsayılan değer `0`'dır. Daha yüksek değerli olanlar sona doğru gider.

```css
.item-2 {
  order: 1; /* Diğer tüm öğeler 0 olduğu için bu öğeyi sona taşır */
}
```

---

## Öğeleri Üst Üste Bindirme (Overlapping)

Grid'in en güçlü özelliklerinden biri, öğelerin üst üste gelmesine izin vermesidir. Eğer iki farklı öğeyi aynı ızgara alanına yerleştirirseniz, HTML'de daha sonra gelen öğe diğerinin üzerine bindirilir.

```css
.item-1 { grid-area: 1 / 1 / 3 / 3; }
.item-2 { grid-area: 1 / 1 / 2 / 2; } /* item-2, item-1'in üzerine gelir */
```

---

## Kaynaklar ve Pratik

*   **İnteraktif Grid Oyunu:**
    *   [Grid Garden](https://appbrewery.github.io/gridgarden/)
    *   Bu eğlenceli ve interaktif oyun ile ızgara yerleştirme becerilerinizi test edin ve geliştirin. 28 seviyenin tamamını bitirmeye çalışın!
