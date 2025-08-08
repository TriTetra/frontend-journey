# HTML Liste Elemanları: `<ul>`, `<ol>`, `<li>`

Bu not, HTML'de listelerin nasıl oluşturulduğunu ve ne zaman hangi liste türünün kullanılacağını basit bir dille açıklamaktadır.

## Temel Konsept: Listeler Nedir?

Web sayfalarında içerikleri sıralı veya sırasız bir şekilde gruplamak için listeleri kullanırız. Tıpkı bir alışveriş listesi veya bir yemek tarifinin adımları gibi. HTML'de iki ana liste türü vardır.

### 1. Sırasız Listeler (Unordered Lists - `<ul>`)

Eğer listedeki maddelerin sırası önemli değilse bu listeyi kullanırız. Tarayıcı, bu listedeki her bir öğenin başına genellikle bir madde imi (bullet point) koyar.

- **Ne zaman kullanılır?**
  - Alışveriş listesi
  - Bir ürünün özellikleri
  - Menü linkleri

- **Nasıl yazılır?**
  Tüm liste `<ul>` etiketleri arasına alınır ve her bir liste öğesi `<li>` (list item) etiketi içine yazılır.

  ```html
  <ul>
    <li>Süt</li>
    <li>Ekmek</li>
    <li>Peynir</li>
  </ul>
  ```

### 2. Sıralı Listeler (Ordered Lists - `<ol>`)

Eğer listedeki maddelerin belirli bir sırası olması gerekiyorsa bu listeyi kullanırız. Tarayıcı, bu listedeki öğeleri varsayılan olarak sayılarla (1, 2, 3...) numaralandırır.

- **Ne zaman kullanılır?**
  - Yemek tarifinin adımları
  - Bir yarışmadaki sıralama (Top 10)
  - Bir işlemin yapılış aşamaları

- **Nasıl yazılır?**
  Tüm liste `<ol>` etiketleri arasına alınır ve her bir adım yine `<li>` etiketi içine yazılır.

  ```html
  <ol>
    <li>Yumurtaları çırp.</li>
    <li>Tavayı ısıt.</li>
    <li>Karışımı tavaya dök.</li>
  </ol>
  ```

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Bir web sayfasına madde imli veya numaralı bir liste nasıl eklerim?

**Cevap:** Çok basit! İki seçeneğin var:

1.  **Sırası Önemli Değilse (`<ul>`):** Bir alışveriş listesi gibi düşün. Ne aldığının sırası fark etmez. Bunun için her şeyi bir `<ul>` (unordered list) etiketiyle sarmala. Her bir malzemeyi de `<li>` (list item) etiketinin içine koy. Başına nokta koyacaktır.

2.  **Sırası Önemliyse (`<ol>`):** Bir yemek tarifi gibi düşün. Adımları doğru sırada yapmalısın. Bunun için her şeyi bir `<ol>` (ordered list) etiketiyle sarmala. Her bir adımı yine `<li>` etiketinin içine koy. Başına sayı koyacaktır (1, 2, 3...).

**Unutma:** `<li>` "liste öğesi" demektir ve hem sırasız (`ul`) hem de sıralı (`ol`) listelerin olmazsa olmazıdır. O olmadan listeyi göremezsin.
