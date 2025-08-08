# Ders 2.1: Başlık Elementleri (Heading Elements) - Özet Notlar

**Ana Fikir:** Başlıklar, bir sayfanın ana hatlarını ve hiyerarşisini oluşturur. Tıpkı bir kitaptaki bölümler ve alt başlıklar gibi.

---

### Element ve Etiket Arasındaki Fark Nedir?

*   **Etiket (Tag):** Sadece açan (`<h1>`) veya kapatan (`</h1>`) parçadır. Kodun sözdizimidir.
*   **Element:** *Her şeydir.* Açılış etiketi + içerik + kapanış etiketi. Yapının kendisidir.

```html
<!-- Bu bütün yapı bir ELEMENT'tir -->
<h1>Merhaba Dünya</h1>
<!-- Bu ise sadece bir TAG'dir: <h1> -->
```

---

### Başlık Hiyerarşisi: `h1`'den `h6`'ya

*   `<h1>`: En önemli başlık. Sayfanın ana başlığıdır.
*   `<h6>`: En az önemli başlık. En alt seviye detaydır.
*   Toplam **6 seviye** vardır. `h7` diye bir şey yoktur.
*   Bu hiyerarşi, sayfanın yapısını hem tarayıcılara hem de arama motorlarına (SEO) anlatır.

---

### Profesyonel Kullanım Kuralları (En İyi Pratikler)

1.  **Sayfada Sadece Bir Tane `<h1>` Kullan:** Bu, sayfanın ana başlığıdır. Kitabın adı gibi düşün. Birden fazla olmaz.
2.  **Seviyeleri Atlama:** Bir `<h1>`'den sonra doğrudan `<h3>`'e geçme. Hiyerarşiyi koru (`h1` -> `h2` -> `h3`). Bu, hem arama motorları (SEO) hem de ekran okuyucular için önemlidir.

> **Unutma:** Bu kuralları çiğnesen de kodun çalışır, ama profesyonel ve erişilebilir bir web sitesi için bu standartlara uymak kritiktir.

---

### Dersin Pratik Görevi (Challenge)

*   **Amaç:** Verilen biçimsiz bir metni, `h1`'den `h4`'e kadar başlık elementleri kullanarak anlamlı bir "kitap içiindekiler tablosu" yapısına dönüştürmek.

---

### Daha Fazlası İçin

*   Bu ve diğer tüm HTML elementleri hakkında en güvenilir ve profesyonel kaynak **Mozilla Developer Network (MDN)** Web Docs'tur.
