# HTML'de İç İçe Listeler ve Girintileme

Bu not, HTML'de listeleri birbirinin içine nasıl yerleştireceğimizi (nesting) ve kod okunabilirliği için girintilemenin (indentation) neden önemli olduğunu basitçe açıklar.

## Temel Konsept: Listeleri İç İçe Koymak (Nesting)

Bazen bir liste maddesinin altında başka bir alt liste oluşturmak isteyebiliriz. Örneğin, bir ana kategori ve onun alt kategorileri gibi. HTML buna izin verir.

- **Nasıl Yapılır?**
  Bir listeyi (sıralı `<ol>` veya sırasız `<ul>`) başka bir listenin **`<li>` (liste öğesi) etiketinin içine** yerleştiririz.

  **Önemli:** Yeni liste, `<li>` etiketinin kapanışından (`</li>`) *önce* gelmelidir.

  ```html
  <ul>
    <li>Madde A</li>
    <li>
      Madde B  <!-- Bu liste öğesi henüz kapanmadı -->
      <ol>     <!-- İşte iç içe geçmiş yeni liste -->
        <li>Alt Madde B1</li>
        <li>Alt Madde B2</li>
      </ol>
    </li>      <!-- Madde B'nin kapanış etiketi burada -->
    <li>Madde C</li>
  </ul>
  ```

  Bu kod, tarayıcıda şöyle görünür:
  - Madde A
  - Madde B
    1.  Alt Madde B1
    2.  Alt Madde B2
  - Madde C

## Kod Okunabilirliği: Girintileme (Indentation)

Girintileme, kodun hangi bölümünün hangisinin içinde olduğunu görsel olarak anlamamızı sağlayan boşluklardır. Kodun çalışmasını etkilemez ama okunabilirliği **çok** artırır.

- **Neden Önemli?**
  - **Hiyerarşiyi Gösterir:** Hangi listenin hangi öğeye ait olduğunu bir bakışta anlarsınız.
  - **Hata Ayıklamayı Kolaylaştırır:** Kapanmamış bir etiket gibi hataları bulmak çok daha kolay olur.
  - **Takım Çalışması:** Başkalarının kodunuzu daha hızlı anlamasını sağlar.

**Kötü (Girintisiz) Kod:**
```html
<ul>
<li>Madde A</li>
<li>Madde B
<ol>
<li>Alt Madde B1</li>
<li>Alt Madde B2</li>
</ol>
</li>
<li>Madde C</li>
</ul>
```
Bu kodu okumak ve anlamak çok daha zordur.

**İyi (Girintili) Kod:**
```html
<ul>
  <li>Madde A</li>
  <li>
    Madde B
    <ol>
      <li>Alt Madde B1</li>
      <li>Alt Madde B2</li>
    </ol>
  </li>
  <li>Madde C</li>
</ul>
```
Bu versiyon çok daha temiz ve anlaşılırdır. Çoğu kod editörü (VS Code gibi) kodu kaydettiğinizde bunu otomatik olarak yapar.

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Bir listenin maddesinin altına nasıl başka bir liste eklerim ve kodumun düzenli görünmesini nasıl sağlarım?

**Cevap:**

1.  **İç İçe Koyma:** Bir listenin altına alt maddeler eklemek istediğinde, yeni listeni (`<ul>` veya `<ol>`) ana listenin `<li>` etiketinin içine koy. Yani, `<li>` ile başla, metnini yaz, sonra alt listeni ekle ve en son `</li>` ile kapat.

2.  **Düzenli Tutma (Girintileme):** Kodunu yazarken `Tab` tuşuyla boşluk bırakarak iç içe koyduğun her şeyi biraz daha sağa kaydır. Bu, kimin kimin çocuğu olduğunu görmeye benzer. Hangi listenin hangi maddenin içinde olduğunu anında anlarsın. Zaten kod editörün (VS Code) sen dosyayı kaydedince bunu senin için otomatik olarak güzelleştirir. Bu sayede hem sen hem de başkaları kodunu daha rahat okur ve hataları daha kolay bulursunuz.
