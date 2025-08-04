# Ders 2.3: Boşluk Elementleri (`<hr>` ve `<br>`) - Özet Notlar

**Ana Fikir:** Boşluk (Void) elementleri, içlerinde içerik barındırmayan, kendi kendini kapatan özel etiketlerdir. Bir başlangıç ve bitişleri yoktur, tek bir etiketle ifade edilirler.

---

### Boşluk (Void) Elementi Nedir?

*   **Tanım:** İçine metin veya başka bir element koyamadığın HTML elementidir.
*   **Sözdizimi (Syntax):** Kapanış etiketi yoktur. Bunun yerine, etiketin sonunda bir eğik çizgi (`/`) bulunur.

```html
<!-- Normal Element -->
<p>İçerik burada</p>

<!-- Boşluk Elementi (Kendi kendini kapatır) -->
<hr />
```

---

### 1. Yatay Kural (`<hr />` - Horizontal Rule)

*   **Ne İşe Yarar?** Konu veya tema olarak birbirinden farklı içerik bloklarını ayırmak için kullanılır.
*   **Görünümü:** Sayfada yatay bir çizgi oluşturur.
*   **Kullanım Alanı:** Bir makalede farklı bölümler arasına veya bir yazar biyografisi ile yorumlar arasına çizgi çekmek gibi.

---

### 2. Satır Sonu (`<br />` - Line Break)

*   **Ne İşe Yarar?** Bir paragraf veya başlık gibi bir metin bloğunun *içinde* satırı sonlandırıp bir alt satıra geçmeyi sağlar.
*   **Kullanım Alanı:**
    *   **Şiirler:** Her mısranın ayrı bir satırda görünmesi için.
    *   **Adresler:** Adresin her satırını (sokak, şehir, posta kodu) alt alta göstermek için.

---

### Kritik Kural: `<br />` Elementini Kötüye Kullanma!

*   **YAPILMAMASI GEREKEN:** Paragraflar arasında boşluk yaratmak için art arda `<br /><br />` kullanmak.
*   **NEDEN?** Bu, anlamsal olarak yanlıştır ve ekran okuyucular için çok kötü bir deneyim yaratır. Paragraflar, `<p>` etiketleri ile ayrılmalıdır. Stil (boşluk miktarı) ise CSS ile ayarlanmalıdır.
*   **Kısacası:** `<br />` sadece metin içinde *zorunlu* bir alt satıra geçiş için kullanılır, boşluk yaratmak için değil.

---

### Sözdizimi Notu: `<hr>` vs `<hr />`

*   HTML5'te hem `<hr>` hem de `<hr />` (veya `<br>` ve `<br />`) geçerlidir. Tarayıcılar ikisini de anlar.
*   **Tavsiye:** Kendi kendini kapatan (`<hr />`) versiyonunu kullanmak, kodu okuyan bir insan için bunun bir boşluk elementi olduğunu anında belli ettiği için daha iyi bir pratiktir.

---

### Dersin Pratik Görevi (Challenge)

*   **Amaç:** Verilen bir metni; `<h1>`, `<p>`, `<hr />` ve `<br />` elementlerini doğru yerlerde kullanarak, adı, adresi ve biyografisi olan bir yazar kartı formatına getirmek.
