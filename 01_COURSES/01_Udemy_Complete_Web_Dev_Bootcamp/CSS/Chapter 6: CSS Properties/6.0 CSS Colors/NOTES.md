# CSS Renkleri: Web Sayfalarını Canlandırma

Bu not, CSS kullanarak HTML elemanlarının metin ve arka plan renklerinin nasıl değiştirileceğini ve farklı renk tanımlama yöntemlerini basit bir dille açıklar.

## Temel Renk Özellikleri

CSS'de renklerle ilgili en sık kullanılan iki özellik vardır:

1.  **`color`**: Bir elemanın **metin rengini** belirler.
2.  **`background-color`**: Bir elemanın **arka plan rengini** belirler.

```css
h1 {
  color: white; /* Metin rengi beyaz */
  background-color: black; /* Arka plan rengi siyah */
}
```

---

## Renk Tanımlama Yöntemleri

CSS'de bir rengi belirtmenin birden çok yolu vardır. En yaygın iki tanesi şunlardır:

### 1. İsimlendirilmiş Renkler (Named Colors)

- **Nedir?** CSS'in önceden tanımlanmış, `red`, `blue`, `tomato`, `dimgrey` gibi akılda kalıcı isimlere sahip renkleridir.
- **Nasıl Kullanılır?** Doğrudan rengin adını yazarak.
- **Örnek:** `color: cornflowerblue;`
- **Avantajı:** Okunması ve hatırlanması kolaydır.
- **Dezavantajı:** Renk seçenekleri sınırlıdır ve çok spesifik tonlar bulunmayabilir.

### 2. Hex (Hexadecimal) Renk Kodları

- **Nedir?** Bir diyez/hashtag (`#`) işareti ile başlayan ve Kırmızı, Yeşil, Mavi (RGB) renk değerlerini temsil eden 6 haneli bir koddur. (Örn: `#RRGGBB`).
- **Nasıl Kullanılır?** `#` işaretinden sonra 6 karakterlik kodu yazarak.
- **Örnek:** `background-color: #3A5FCD;`
- **Avantajı:** Milyonlarca renk tonuna erişim sağlar. Tasarım araçları ve renk paleti siteleri (örn: [Color Hunt](https://colorhunt.co/)) genellikle bu formatı kullanır, bu da profesyonel tasarımları web sitenize aktarmayı kolaylaştırır.
- **Dezavantajı:** Kodları ezberlemek imkansızdır, genellikle bir yerden kopyalanır.

---

## Yöntemlerin Görsel Anlatımı

```mermaid
graph TD
    subgraph "Renk Seçimi"
        A[İsimlendirilmiş Renk<br/>(MDN Dokümanları)]
        B[Hex Kodu<br/>(Color Hunt gibi araçlar)]
    end

    subgraph "CSS Kodu"
        C["<code>h1 { color: cornflowerblue; }</code>"]
        D["<code>h1 { color: #6495ED; }</code>"]
    end

    subgraph "Sonuç"
        E((<font color='#6495ED'>Aynı Mavi Renk</font>))
    end

    A -- "Kolay ve okunaklı" --> C
    B -- "Spesifik ve esnek" --> D
    C --> E
    D --> E

    style A fill:#ccf,stroke:#333,stroke-width:2px
    style B fill:#cfc,stroke:#333,stroke-width:2px
```

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Sayfamdaki yazıların ve arka planların rengini nasıl değiştiririm?

**Cevap:** Çok basit. Metin için `color`, arka plan için `background-color` özelliğini kullanırsın. Rengi belirtmek için iki popüler yolun var:

1.  **İsimle Çağırmak:** `red`, `blue`, `tomato` gibi basit ve bilinen bir renk istiyorsan, direkt adını yaz. Bu en kolayı.
    -   `color: tomato;`

2.  **Hex Kodu Kullanmak:** Eğer çok özel bir renk tonu istiyorsan (mesela bir tasarımcının verdiği renk), `#` ile başlayan 6 haneli bir kod kullanırsın. Bu kodları `Color Hunt` gibi sitelerden bulup kopyalayabilirsin. Bu yöntem sana sonsuz renk seçeneği sunar.
    -   `background-color: #282A35;`

Kısacası, basit renkler için **isim**, profesyonel ve özel renkler için **Hex kodu** kullan. Her ikisi de aynı işi yapar, sadece rengi farklı şekilde tanımlar.
