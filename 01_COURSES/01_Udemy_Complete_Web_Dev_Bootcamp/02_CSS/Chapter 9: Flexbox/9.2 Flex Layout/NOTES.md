# Flexbox Düzeni: Ebeveyn ve Çocuk Özellikleri

Bu bölümde, Flexbox düzenini ince ayar yapmak için kullanılan temel özellikleri ve bu özelliklerin **ebeveyn (kapsayıcı)** üzerinde mi yoksa **çocuk (öğeler)** üzerinde mi çalıştığını öğreniyoruz.

### Feynman Tekniği: Müdür ve Çalışanlar

Flexbox'ı bir ofis gibi düşünün:
*   **Kapsayıcı (Ebeveyn):** Ofisin müdürüdür. Ofisin genel düzeniyle ilgili kuralları (`justify-content`, `align-items`) o belirler.
*   **Öğeler (Çocuklar):** Ofisin çalışanlarıdır. Genellikle müdürün kurallarına uyarlar, ancak bazen kendilerine özel talimatlar (`order`, `align-self`) alabilirler.

Hangi özelliğin kime ait olduğunu bilmek, Flexbox'ı doğru kullanmanın anahtarıdır.

---

## Ebeveyn ve Çocuk Özellikleri Tablosu

| Özellik | Uygulandığı Yer | Ne İşe Yarar? |
| :--- | :--- | :--- |
| `order` | **Çocuk** | Öğelerin görsel sırasını HTML'den bağımsız olarak değiştirir. |
| `flex-wrap` | **Ebeveyn** | Öğelerin kapsayıcıya sığmadığında alt satıra geçip geçmeyeceğini belirler. |
| `justify-content` | **Ebeveyn** | Öğeleri **ana eksen** boyunca nasıl hizalayacağını ve dağıtacağını belirler. |
| `align-items` | **Ebeveyn** | Öğeleri **çapraz eksen** boyunca nasıl hizalayacağını belirler. |
| `align-self` | **Çocuk** | Tek bir çocuğun, `align-items` kuralını ezip kendi hizalamasını yapmasını sağlar. |
| `align-content` | **Ebeveyn** | `flex-wrap: wrap` kullanıldığında oluşan birden fazla satırın kendi aralarındaki hizalamasını belirler. |

---

## Ebeveyn (Kapsayıcı) Özellikleri

### `flex-wrap`: Öğeleri Satırlara Sarmak
Varsayılan olarak Flexbox, tüm öğeleri tek bir satıra sığdırmaya çalışır (`nowrap`). Bu özellik, bu davranışı kontrol eder.

| Değer | Açıklama |
| :--- | :--- |
| `nowrap` | (Varsayılan) Öğeler asla alt satıra geçmez, gerekirse taşar veya sıkışır. |
| `wrap` | Öğeler sığmadığında bir sonraki satıra geçer. |
| `wrap-reverse` | Öğeler sığmadığında bir önceki (yukarıdaki) satıra geçer. |

### `justify-content`: Ana Eksen Üzerinde Hizalama
Bu özellik, öğelerin **ana eksen** üzerindeki dağılımını kontrol eder. (Yani `flex-direction: row` için yatay dağılım).

| Değer | Açıklama |
| :--- | :--- |
| `flex-start` | Öğeleri ana eksenin başına yaslar. |
| `flex-end` | Öğeleri ana eksenin sonuna yaslar. |
| `center` | Öğeleri ana eksende ortalar. |
| `space-between` | İlk öğe başta, son öğe sonda olacak şekilde aralara eşit boşluk bırakır. |
| `space-around` | Her öğenin etrafına (sağına ve soluna) eşit boşluk bırakır. Kenarlardaki boşluk, ortadakilerin yarısı kadardır. |
| `space-evenly` | Tüm öğeler arasına ve kenarlara tamamen eşit boşluklar bırakır. |

### `align-items`: Çapraz Eksen Üzerinde Hizalama
Bu özellik, öğelerin **çapraz eksen** üzerindeki hizalamasını kontrol eder. (Yani `flex-direction: row` için dikey hizalama).
**Not:** Bu özelliğin etkisini görmek için genellikle kapsayıcının bir `height` değerine sahip olması gerekir.

| Değer | Açıklama |
| :--- | :--- |
| `stretch` | (Varsayılan) Öğeleri, kapsayıcının yüksekliğini dolduracak şekilde esnetir. |
| `flex-start` | Öğeleri çapraz eksenin başına yaslar. |
| `flex-end` | Öğeleri çapraz eksenin sonuna yaslar. |
| `center` | Öğeleri çapraz eksende ortalar. |

### `align-content`: Birden Fazla Satırın Hizalanması
**En Önemli Kural:** Bu özellik **sadece** `flex-wrap: wrap` ayarlandığında ve birden fazla satır oluştuğunda çalışır. Tek satırlı bir düzende hiçbir etkisi yoktur. Oluşan satır bloklarının kendi içindeki dikey dağılımını kontrol eder. Değerleri `justify-content` ile aynıdır (`center`, `space-between` vb.).

---

## Çocuk (Öğe) Özellikleri

### `order`: Öğelerin Sırasını Değiştirme
Varsayılan olarak tüm öğelerin `order` değeri `0`'dır ve HTML'deki sıralarına göre dizilirler. Bir öğeye farklı bir `order` değeri vererek onu yeniden konumlandırabilirsiniz.
*   `order: -1;` öğeyi en başa taşır.
*   `order: 1;` öğeyi sona taşır (diğerleri 0 olduğu için).

### `align-self`: Tek Bir Öğeyi Farklı Hizalama
Bu özellik, bir çocuğun "asi" davranmasını sağlar. Ebeveynin `align-items` kuralını yok sayar ve sadece kendisi için belirtilen hizalamayı uygular.
```css
.rebel-item {
  align-self: flex-end; /* Diğer tüm öğeler ortalanmışken bu kendini sona yaslar */
}
```

---

## Hayati Kaynaklar ve Pratik

Ezberlemek zorunda değilsiniz! Nereye bakacağınızı bilmek yeterlidir.

*   **En İyi Kopya Kağıdı (Cheat Sheet):**
    *   [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    *   Bu kaynak, tüm Flexbox özelliklerini, alabileceği değerleri ve ne işe yaradıklarını görsel olarak mükemmel bir şekilde açıklar. Ebeveyn ve çocuk özelliklerini ayrı ayrı listeler.

*   **İnteraktif Pratik:**
    *   [Flexbox Froggy](https://appbrewery.github.io/flexboxfroggy/)
    *   Öğrendiklerinizi pekiştirmek için bu eğlenceli oyunu oynayın. Ayarlardan zorluğu **"Intermediate"** seviyesine getirerek kendinize meydan okuyun ve kurbağaları zambak yapraklarına taşımak için doğru Flexbox kodlarını yazın.
