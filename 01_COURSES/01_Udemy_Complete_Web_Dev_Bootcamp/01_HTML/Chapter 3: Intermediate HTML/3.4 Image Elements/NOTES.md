# HTML'de Resim Ekleme (`<img>` Etiketi)

Bu not, bir web sayfasına nasıl resim ekleneceğini ve bu işlem için gerekli olan temel HTML etiket ve niteliklerini basit bir dille açıklar.

## Temel Konsept: Resim (Image) Etiketi `<img>`

Web sayfalarımıza görsel içerik (fotoğraf, GIF, vb.) eklemek için `<img>` etiketini kullanırız.

- **Bu Etiket Farklıdır: Boş Eleman (Void Element)**
  `<img>` etiketi, `<a>` veya `<p>` gibi etiketlerin aksine bir kapanış etiketine (`</img>`) sahip değildir. Çünkü bir resmin içine metin gibi bir içerik koymak mantıklı değildir. Bunun yerine "kendi kendini kapatan" bir etikettir ve genellikle `<img />` şeklinde yazılır.

- **En Önemli Nitelik: `src` (Source - Kaynak)**
  Bir resmin görüntülenebilmesi için tarayıcının o resmin nerede olduğunu bilmesi gerekir. `src` niteliği, resmin URL'sini veya dosya yolunu belirttiğimiz yerdir. Bu nitelik olmadan resim görüntülenemez.

  ```html
  <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
  ```

- **Erişilebilirlik İçin Hayati Nitelik: `alt` (Alternative Text - Alternatif Metin)**
  `alt` niteliği, resmin ne hakkında olduğunu açıklayan kısa bir metin içerir. Bu, **çok önemlidir** çünkü:
  1.  **Ekran Okuyucular:** Görme engelli kullanıcıların kullandığı ekran okuyucu yazılımlar, `alt` metnini okuyarak resmin ne olduğunu kullanıcıya anlatır. Bu, web sitenizi herkes için erişilebilir kılar.
  2.  **Bozuk Linkler:** Eğer resim herhangi bir nedenle yüklenemezse (yanlış URL, sunucu hatası vb.), tarayıcı resmin yerinde bu alternatif metni gösterir.

  ```html
  <img src="kopek.jpg" alt="Kumsalda oynayan sevimli bir köpek yavrusu" />
  ```

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Web sayfama nasıl resim koyarım?

**Cevap:** Çok kolay! `<img />` diye bir etiket kullanacaksın. Ama bu etiketin çalışması için ona iki önemli şey söylemen lazım:

1.  **`src` (Kaynak):** Bu, resmin nerede olduğunu söylediğin yer. Resmin internet adresini (URL) kopyalayıp `src="..."` tırnaklarının arasına yapıştırıyorsun. Bu olmadan tarayıcı hangi resmi göstereceğini bilemez.

2.  **`alt` (Alternatif Metin):** Bu da resmin ne olduğunu anlatan kısa bir yazı. Bunu **mutlaka** eklemelisin. Neden mi? Çünkü eğer birisi resmi göremiyorsa (mesela görme engelliyse), ekran okuyucusu bu yazıyı okur. Ya da resim bozulursa, yerine bu yazı çıkar. Kısacası, `alt="..."` içine resmi tarif eden bir cümle yaz.

**Unutma:** `<img />` etiketinin kapanışı yoktur, kendi kendini kapatır. Sadece `src` ve `alt` niteliklerini eklemen yeterli.
