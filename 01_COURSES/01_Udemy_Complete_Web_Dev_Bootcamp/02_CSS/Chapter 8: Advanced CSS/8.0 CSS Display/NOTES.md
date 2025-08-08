# CSS Display Özelliği: Elemanların Davranışını Belirleme

Bu not, bir HTML elemanının sayfada nasıl bir yer kaplayacağını ve diğer elemanlarla nasıl etkileşime gireceğini belirleyen temel `display` özelliğini ve en yaygın üç değerini (`block`, `inline`, `inline-block`) basit bir dille açıklar.

## `display` Özelliği Nedir?

`display` özelliği, bir elemanın bir "blok" gibi mi yoksa bir "satır içi" eleman gibi mi davranacağını kontrol eder. Bu, sayfa düzeninin (layout) en temel yapı taşlarından biridir.

### Üç Temel `display` Değeri ve Karşılaştırması

```mermaid
graph TD
    subgraph Değerler
        A[<b>block</b><br/>(örn: p, div, h1)]
        B[<b>inline</b><br/>(örn: span, a, strong)]
        C[<b>inline-block</b><br/>(İkisinin karışımı)]
    end

    subgraph "Özellikler"
        Prop1["Yeni bir satırda başlar"]
        Prop2["Tüm satır genişliğini kaplar"]
        Prop3["Genişlik (width) ve<br/>Yükseklik (height) ayarlanabilir"]
        Prop4["Diğerleriyle aynı satırda durur"]
    end

    A -- "Evet" --> Prop1
    A -- "Evet" --> Prop2
    A -- "Evet" --> Prop3
    A -- "Hayır" --> Prop4

    B -- "Hayır" --> Prop1
    B -- "Hayır" --> Prop2
    B -- "Hayır" --> Prop3
    B -- "Evet" --> Prop4

    C -- "Hayır" --> Prop1
    C -- "Hayır" --> Prop2
    C -- "Evet" --> Prop3
    C -- "Evet" --> Prop4

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ccf,stroke:#333,stroke-width:2px
    style C fill:#cfc,stroke:#333,stroke-width:2px
end
```

---

## Değerlerin Detaylı Açıklaması

### 1. `display: block`
- **Davranışı:** Bir blok gibi davranır. Her zaman **yeni bir satırda başlar** ve mevcut olan **tüm satır genişliğini** kaplar.
- **Boyutlandırma:** `width` ve `height` özellikleri sorunsuz bir şekilde uygulanabilir.
- **Varsayılan Olarak `block` Olanlar:** `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<li>`, `<form>`
- **Sonuç:** Elemanlar alt alta dizilir.

### 2. `display: inline`
- **Davranışı:** Bir metin satırının parçası gibi davranır. Yeni bir satırda başlamaz ve sadece **içeriği kadar yer kaplar**.
- **Boyutlandırma:** `width` ve `height` özellikleri **işe yaramaz**. Boyutu, içindeki içeriğe bağlıdır.
- **Varsayılan Olarak `inline` Olanlar:** `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`
- **Sonuç:** Elemanlar yan yana dizilir.

### 3. `display: inline-block`
- **Davranışı:** İki dünyanın en iyi özelliklerini birleştirir. Elemanlar `inline` gibi **yan yana dizilirler**, ancak `block` gibi **boyutlandırılabilirler**.
- **Boyutlandırma:** `width` ve `height` özellikleri sorunsuz bir şekilde uygulanabilir.
- **Sonuç:** Genişlik ve yüksekliğini ayarlayabildiğiniz, ancak yan yana durabilen kutular oluşturmanızı sağlar. Modern CSS öncesi dönemde yatay menüler gibi yapılar için sıkça kullanılırdı.

### Ekstra: `display: none`
- **Ne Yapar?** Elemanı sayfadan **tamamen kaldırır**. Sadece görünmez yapmaz, aynı zamanda kapladığı alanı da ortadan kaldırır. Sanki HTML'de hiç var olmamış gibi davranır.

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Sayfamdaki kutuların neden bazıları alt alta, bazıları yan yana duruyor? Bunu nasıl kontrol ederim?

**Cevap:** Her elemanın bir `display` özelliği vardır ve bu onun karakterini belirler. Üç ana karakter var:

1.  **`block` (Bencil):** Bu eleman tüm satırı tek başına ister. "Bu sıra benim!" der ve kendinden sonra geleni bir alt satıra iter. `div` ve `p` böyledir. Genişliğini ve yüksekliğini ayarlayabilirsin.

2.  **`inline` (Paylaşımcı):** Bu eleman sadece ihtiyacı kadar yer kaplar ve yanına başkalarının gelmesine izin verir. `span` ve `a` (link) böyledir. Ama ne kadar geniş veya yüksek olacağını sen söyleyemezsin, içeriği ne kadarsa o kadardır.

3.  **`inline-block` (Akıllı Paylaşımcı):** Bu en iyisidir. Hem `inline` gibi yan yana durur hem de `block` gibi genişliğini ve yüksekliğini senin ayarlamana izin verir.

Kısacası, elemanları **alt alta** dizmek için `display: block`, **yan yana** dizmek için `display: inline-block` kullanırsın. `inline` ise genellikle metin içindeki küçük parçalar için kullanılır.
