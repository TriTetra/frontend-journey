# Duyarlı (Responsive) Web Tasarımı: Farklı Ekranlara Uyum Sağlama

Bu not, bir web sitesinin farklı ekran boyutlarına (mobil, tablet, masaüstü) otomatik olarak uyum sağlaması anlamına gelen duyarlı tasarım konseptini ve bunu başarmak için kullanılan dört ana CSS tekniğini tanıtır.

## Duyarlı Tasarım Nedir?

Duyarlı tasarım, bir web sitesinin düzeninin, kullanıcının ekran genişliğine göre dinamik olarak değişmesidir. Amaç, her cihazda en iyi kullanıcı deneyimini sunmaktır. Örneğin, geniş bir ekranda yan yana duran sütunlar, dar bir mobil ekranda alt alta gelebilir.

## Duyarlı Tasarım Teknikleri

Web sitelerini duyarlı hale getirmek için kullanılan dört temel yöntem vardır:

1.  **Medya Sorguları (Media Queries):** Belirli ekran koşullarına göre farklı CSS kuralları uygulamamızı sağlar.
2.  **CSS Grid:** İki boyutlu (satır ve sütun) karmaşık düzenler oluşturmak için tasarlanmış güçlü bir sistemdir.
3.  **CSS Flexbox:** Tek boyutlu (yatay veya dikey) esnek düzenler oluşturmak için idealdir.
4.  **CSS Çerçeveleri (Frameworks - örn: Bootstrap):** Hazır, duyarlı bileşenler ve bir ızgara sistemi sunan harici kütüphanelerdir.

### Tekniklerin Karşılaştırması

```mermaid
graph TD
    subgraph "Yöntemler"
        A[<b>Medya Sorguları</b><br/>@media (max-width: 600px) { ... }]
        B[<b>CSS Flexbox</b><br/>display: flex;]
        C[<b>CSS Grid</b><br/>display: grid;]
        D[<b>Bootstrap</b><br/>class="col-md-6"]
    end

    subgraph "Kullanım Alanı"
        E["<b>Kırılma Noktaları:</b><br/>Belirli ekran genişliklerinde<br/>stili tamamen değiştirmek."]
        F["<b>Tek Boyutlu Düzen:</b><br/>Elemanları yatay veya<br/>dikey bir sırada hizalamak."]
        G["<b>İki Boyutlu Düzen:</b><br/>Hem satırları hem de sütunları<br/>aynı anda kontrol etmek."]
        H["<b>Hızlı Prototipleme:</b><br/>Hazır bileşenler ve<br/>ızgara sistemi ile hızlıca<br/>duyarlı siteler oluşturmak."]
    end

    A --> E
    B --> F
    C --> G
    D --> H

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ccf,stroke:#333,stroke-width:2px
    style C fill:#cfc,stroke:#333,stroke-width:2px
    style D fill:#f99,stroke:#333,stroke-width:2px
end
```

---

## Tekniklere Kısa Bir Bakış

### 1. Medya Sorguları (`@media`)
- **Nasıl Çalışır?** CSS içinde "eğer ekran genişliği 600 pikselden küçükse, bu kuralları uygula" gibi koşullar yazmamızı sağlar. Bu koşullara "kırılma noktası" (breakpoint) denir.
- **Örnek:**
  ```css
  /* Ekran 600px'den darsa, gövdenin arka planını açık mavi yap */
  @media (max-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
  ```

### 2. CSS Grid
- **Nasıl Çalışır?** Bir kapsayıcıya `display: grid;` vererek içindeki elemanları hassas bir satır ve sütun ızgarasına yerleştirmemizi sağlar. Hem dikey hem de yatay hizalamayı aynı anda kontrol etmede çok güçlüdür.

### 3. CSS Flexbox
- **Nasıl Çalışır?** Bir kapsayıcıya `display: flex;` vererek içindeki elemanları tek bir sıra (yatay veya dikey) boyunca esnek bir şekilde dağıtmamızı, hizalamamızı ve sıralamamızı sağlar. Özellikle navigasyon menüleri gibi tek boyutlu bileşenler için mükemmeldir.

### 4. Bootstrap gibi Çerçeveler
- **Nasıl Çalışır?** Önceden yazılmış CSS sınıflarını kullanarak çalışır. Örneğin, bir elemana `class="col-md-6"` verdiğinizde, Bootstrap bu elemanın orta boyutlu ekranlarda 12 birimlik ızgaranın 6 birimini (yani yarısını) kaplamasını sağlar. Bu, çok hızlı bir şekilde duyarlı düzenler oluşturmayı mümkün kılar.

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Web sitemin hem büyük bilgisayar ekranlarında hem de küçük telefon ekranlarında iyi görünmesini nasıl sağlarım?

**Cevap:** Buna "duyarlı tasarım" denir ve birkaç süper gücün var:

1.  **Medya Sorguları:** Bu, CSS'e "Hey, eğer ekran telefon kadar küçülürse, şu menüyü gizle ve başlığı küçült" demektir. Farklı ekran boyutları için farklı kurallar yazarsın.

2.  **Flexbox:** Elemanları tek bir sırada (yatay veya dikey) hizalamak için harikadır. "Bu üç kutuyu al, aralarında eşit boşluk bırakarak yan yana diz" demek kadar kolaydır.

3.  **Grid:** Bu, Flexbox'ın abisidir. Hem satırları hem de sütunları aynı anda kontrol etmeni sağlar. Dergi veya gazete sayfası gibi karmaşık düzenler için mükemmeldir.

4.  **Bootstrap:** Bu, başkalarının senin için yazdığı hazır bir CSS kütüphanesidir. Sana hazır, duyarlı çalışan parçalar (butonlar, menüler, ızgara sistemi) verir. Sadece doğru `class` isimlerini kullanarak hızlıca bir site kurabilirsin.

**Hangisi en iyisi?** En iyisi diye bir şey yok. Hepsi farklı işler için harikadır. Genellikle modern bir projede Flexbox ve Grid birlikte kullanılır, medya sorguları ise ince ayarlar için devreye girer.
