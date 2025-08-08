# CSS Seçiciler: HTML Elemanlarını Hedefleme Sanatı

Bu not, CSS kurallarını doğru HTML elemanlarına uygulamak için kullanılan "seçicilerin" (selectors) ne olduğunu, en yaygın seçici türlerini ve nasıl çalıştıklarını basit bir dille açıklar.

## Seçici Nedir?

Bir CSS kuralının (`color: blue;` gibi) hangi HTML elemanına veya elemanlarına uygulanacağını belirten kısımdır. Kısacası, stil vermek için HTML belgesinden kimi "seçeceğimizi" söyler.

```css
/* h1 -> Seçici */
/* { color: blue; } -> Kural */
h1 {
  color: blue;
}
```

---

## Seçici Türleri ve Görsel Anlatımı

```mermaid
graph TD
    subgraph "HTML Kodu"
        H1["<h1 id='main-title' class='heading'>Başlık</h1>"]
        P1["<p class='content'>Paragraf 1</p>"]
        P2["<p class='content special'>Paragraf 2</p>"]
        A["<a href='#' target='_blank'>Link</a>"]
    end

    subgraph "CSS Seçicileri"
        S_Element["<b>Element Seçici:</b><br/>p { ... }"]
        S_Class[ "<b>Sınıf Seçici:</b><br/>.content { ... }"]
        S_ID[    "<b>ID Seçici:</b><br/>#main-title { ... }"]
        S_Attr[  "<b>Nitelik Seçici:</b><br/>[target='_blank'] { ... }"]
        S_Uni[   "<b>Evrensel Seçici:</b><br/>* { ... }"]
    end

    S_Element -- "Tüm `<p>`'leri seçer" --> P1 & P2
    S_Class -- "`content` sınıfına<br/>sahip olanları seçer" --> P1 & P2
    S_ID -- "`main-title` ID'sine<br/>sahip olanı seçer" --> H1
    S_Attr -- "`target=_blank`<br/>niteliğine sahip<br/>olanları seçer" --> A
    S_Uni -- "Tüm elemanları seçer" --> H1 & P1 & P2 & A

    style S_Element fill:#f9f,stroke:#333,stroke-width:1px
    style S_Class fill:#ccf,stroke:#333,stroke-width:1px
    style S_ID fill:#cfc,stroke:#333,stroke-width:1px
    style S_Attr fill:#f99,stroke:#333,stroke-width:1px
    style S_Uni fill:#9cf,stroke:#333,stroke-width:1px
end
```

---

## En Yaygın Seçici Türleri

### 1. Element (Etiket) Seçici
- **Nasıl Yazılır?** Doğrudan HTML etiketinin adıyla (`h1`, `p`, `a`, `li` vb.).
- **Ne Yapar?** Belirtilen türdeki **tüm** HTML elemanlarını seçer.
- **Örnek:** `p { font-size: 16px; }` -> Sayfadaki bütün paragrafların yazı boyutunu 16px yapar.

### 2. Sınıf (Class) Seçici
- **Nasıl Yazılır?** Sınıf adının başına nokta (`.`) koyarak (`.benim-sinifim`).
- **Ne Yapar?** HTML'de `class="benim-sinifim"` niteliğine sahip olan **tüm** elemanları seçer. Bir sınıf, birden çok elemana verilebilir.
- **Örnek:** `.highlight { background-color: yellow; }` -> `class="highlight"` olan tüm elemanların arka planını sarı yapar.
- **Kullanım Amacı:** Benzer stile sahip olacak elemanları gruplamak için idealdir.

### 3. ID Seçici
- **Nasıl Yazılır?** ID adının başına diyez/hashtag (`#`) koyarak (`#ana-baslik`).
- **Ne Yapar?** HTML'de `id="ana-baslik"` niteliğine sahip olan **tek bir** elemanı seçer.
- **Önemli Kural:** Bir ID, bir HTML sayfasında **sadece bir kere** kullanılmalıdır. Benzersizdir.
- **Örnek:** `#logo { border: 1px solid black; }` -> `id="logo"` olan elemana siyah bir çerçeve ekler.
- **Kullanım Amacı:** Sayfadaki benzersiz bir elemanı (ana menü, logo gibi) hedeflemek için kullanılır.

### 4. Nitelik (Attribute) Seçici
- **Nasıl Yazılır?** Köşeli parantez `[]` içinde nitelik belirterek (`[target]`, `[type="submit"]`).
- **Ne Yapar?** Belirtilen niteliğe (veya nitelik=değer çiftine) sahip elemanları seçer.
- **Örnek:** `input[type="text"] { border-color: blue; }` -> `type` niteliği `text` olan tüm `<input>` elemanlarının çerçeve rengini mavi yapar.

### 5. Evrensel (Universal) Seçici
- **Nasıl Yazılır?** Yıldız (`*`) karakteri ile.
- **Ne Yapar?** Sayfadaki **istisnasız tüm** HTML elemanlarını seçer.
- **Örnek:** `* { box-sizing: border-box; }` -> Tüm elemanlara belirli bir kutu modeli uygular (yaygın bir kullanım).

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** CSS ile stil vermek istediğim elemanları nasıl seçeceğim?

**Cevap:** HTML'deki elemanları yakalamak için farklı "kancalar" kullanırsın. Bunlara seçici denir:

- **Tüm paragrafları mı istiyorsun?** Direkt `p` yaz. (Element Seçici)
- **Belirli bir grup elemanı mı istiyorsun?** Onlara HTML'de aynı `class` adını ver (örn: `class="vurgulu"`) ve CSS'de `.vurgulu` diye çağır. (Sınıf Seçici)
- **Sayfadaki sadece tek ve özel bir elemanı mı istiyorsun?** Ona HTML'de benzersiz bir `id` ver (örn: `id="ana-menu"`) ve CSS'de `#ana-menu` diye çağır. (ID Seçici)
- **Her şeyi mi istiyorsun?** `*` kullan. (Evrensel Seçici)

**Unutma:** Sınıf (`.`) birçok eleman için, ID (`#`) ise sadece tek bir eleman içindir. Bu en önemli fark!
