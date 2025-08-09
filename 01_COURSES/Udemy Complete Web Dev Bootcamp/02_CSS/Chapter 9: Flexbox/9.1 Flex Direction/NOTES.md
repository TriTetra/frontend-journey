# Flexbox Yönü: `flex-direction` ve Eksenler

Bu bölümde, Flexbox düzeninin temelini oluşturan `flex-direction` özelliğini ve bu özelliğin "ana eksen" ve "çapraz eksen" kavramlarını nasıl tanımladığını öğreniyoruz.

### Feynman Tekniği ile `flex-direction`

`flex-direction`, Flexbox konteynerine verdiğimiz en temel komutlardan biridir. Şöyle düşünün: Konteyner bir komutan, içindeki öğeler de askerler. `flex-direction` komutu, komutanın askerlere "Yan yana dizilin!" (`row`) mi yoksa "Arka arkaya sıralanın!" (`column`) mı dediğini belirler.

Bu basit komut, tüm düzenin yönünü ve diğer Flexbox özelliklerinin nasıl çalışacağını belirleyen **eksenleri** tanımlar.

---

## Ana Eksen (Main Axis) ve Çapraz Eksen (Cross Axis)

Flexbox'ın dünyası iki temel eksen üzerine kuruludur. Hangi eksenin "ana", hangisinin "çapraz" olduğu tamamen `flex-direction` değerine bağlıdır.

| `flex-direction` Değeri | Ana Eksen (Main Axis) | Çapraz Eksen (Cross Axis) |
| :--- | :--- | :--- |
| **`row`** (varsayılan) | Yatay (soldan sağa) | Dikey (yukarıdan aşağıya) |
| **`column`** | Dikey (yukarıdan aşağıya) | Yatay (soldan sağa) |

**Görsel Diyagram:**

*   **`flex-direction: row;` olduğunda:**
    *   Ana Eksen: `←──────────→`
    *   Çapraz Eksen: `↑`
*   **`flex-direction: column;` olduğunda:**
    *   Ana Eksen: `↑`
    *   Çapraz Eksen: `←──────────→`

> **Neden Önemli?** Çünkü `justify-content`, `align-items` ve `flex-basis` gibi birçok Flexbox özelliği, bu eksenler üzerinde çalışır. Bir özelliğin ne yapacağını anlamak için önce ana eksenin hangi yönde olduğunu bilmeniz gerekir.

---

## `flex-basis`: Eksenlere Bağlı Boyutlandırma

`flex-basis`, bir flex öğesinin **ana eksen boyunca** varsayılan boyutunu ayarlar. Bu, davranışının `flex-direction`'a göre değiştiği anlamına gelir.

| `flex-direction` | Ana Eksen | `flex-basis` Davranışı |
| :--- | :--- | :--- |
| `row` | Yatay | Genişlik (`width`) gibi davranır. |
| `column` | Dikey | Yükseklik (`height`) gibi davranır. |

**Önemli Not:** `flex-basis` özelliği, flex **kapsayıcısına (parent)** değil, doğrudan **flex öğelerine (children)** uygulanır.

---

## Pratik Örnek: Gökkuşağı Düzenini Değiştirme

**Hedef:** Yatay olarak dizilmiş renk kutularını, dikey olarak dizmek ve her birinin yüksekliğini `100px` yapmak.

**HTML (Değiştirilmeyecek):**
```html
<div class="container">
  <div style="background-color: #e60016;">Red</div>
  <div style="background-color: #f39800;">Orange</div>
  <!-- ...diğer renkler -->
</div>
```

**CSS Çözümü Adım Adım:**

1.  **Yönü Değiştirme:** Öğeleri alt alta dizmek için ana ekseni dikey yapmalıyız.
    ```css
    .container {
      flex-direction: column;
    }
    ```

2.  **Genişlik Sorununu Çözme:** `display: flex` ile konteyner tüm satırı kaplar. Konteynerin sadece içeriği kadar yer kaplaması için `inline-flex` kullanılır.
    ```css
    .container {
      display: inline-flex; /* Sadece gerektiği kadar genişlik kapla */
      flex-direction: column;
    }
    ```

3.  **Çocuk Öğeleri Hedefleme ve Boyutlandırma:** `flex-basis`'i çocuklara uygulamamız gerekiyor. HTML'i değiştirmeden tüm çocukları seçmek için **Çocuk Birleştirici (`>`)** ve **Evrensel Seçici (`*`)** kullanılır.

    *   **`>` (Child Combinator):** Yalnızca bir öğenin *doğrudan* altındaki çocukları seçer.
    *   **`*` (Universal Selector):** Herhangi bir türdeki tüm öğeleri seçer.

    **Nihai Seçici:** `.container > *`
    Bu seçici, "`.container` sınıfına sahip öğenin *tüm doğrudan çocuklarını* seç" anlamına gelir.

    **Tam CSS Kodu:**
    ```css
    .container {
      display: inline-flex;
      flex-direction: column;
      gap: 10px;
    }

    /* .container'ın tüm doğrudan çocuklarını seç ve boyutlandır */
    .container > * {
      flex-basis: 100px; /* Ana eksen dikey olduğu için bu 'height' gibi davranır */
    }
    ```
