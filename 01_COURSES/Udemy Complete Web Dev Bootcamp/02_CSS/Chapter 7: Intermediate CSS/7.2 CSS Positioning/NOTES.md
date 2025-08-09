# CSS Konumlandırma (Positioning)

Bu not, HTML elemanlarının sayfa üzerindeki yerleşimini kontrol etmek için kullanılan `position` özelliğini ve bu özelliğin alabileceği dört temel değeri (`static`, `relative`, `absolute`, `fixed`) basit bir dille açıklar.

## `position` Özelliği Nedir?

`position` özelliği, bir elemanın belgenin normal akışına göre nasıl konumlandırılacağını belirler. Bu özellik `top`, `right`, `bottom`, ve `left` gibi ek özelliklerle birlikte kullanılarak elemanın nihai konumu ayarlanır.

### Konumlandırma Türleri ve Görsel Anlatımı

```mermaid
graph TD
    subgraph "Normal Akış"
        A[Static<br/>(Varsayılan)]
    end

    subgraph "Akıştan Bağımsız"
        B[Relative<br/>(Normal Yerine Göre)]
        C[Absolute<br/>(Konumlandırılmış Ataya Göre)]
        D[Fixed<br/>(Ekrana Göre)]
    end

    A --> B
    A -- "Atası Olur" --> C
    A -- "Ekran Gibi Davranır" --> D

    style A fill:#dddddd
    style B fill:#ccf,stroke:#333,stroke-width:2px
    style C fill:#cfc,stroke:#333,stroke-width:2px
    style D fill:#f9f,stroke:#333,stroke-width:2px
```

---

## Dört Temel Konumlandırma Değeri

### 1. `static`
- **Anlamı:** Varsayılan değerdir. Elemanlar, HTML kodundaki sıralarına göre normal bir şekilde sayfaya yerleşir.
- **Özelliği:** `top`, `right`, `bottom`, `left` ve `z-index` özellikleri bu eleman üzerinde **hiçbir etki yaratmaz**.
- **Ne Zaman Kullanılır?** Genellikle özel bir konumlandırma gerekmediğinde veya bir konumlandırmayı sıfırlamak için kullanılır.

### 2. `relative`
- **Anlamı:** Eleman, normalde (`static` konumda) olması gereken yerden **kendine göre** kaydırılır.
- **Özelliği:** `top`, `left` gibi özellikler kullanılarak eleman, orijinal yerinden itibaren itilir. Önemli olan, eleman kaydırılsa bile **orijinal yeri boş kalır**; diğer elemanlar bu boşluğu doldurmaz.
- **Ne Zaman Kullanılır?** Bir elemanı hafifçe kaydırmak veya `absolute` konumlandırılmış bir çocuk eleman için **konumlandırma bağlamı (ata)** oluşturmak için kullanılır.

### 3. `absolute`
- **Anlamı:** Eleman, belgenin normal akışından **tamamen çıkarılır** ve en yakın **konumlandırılmış atasına (positioned ancestor)** göre hizalanır.
- **Konumlandırılmış Ata Nedir?** `position` özelliği `static` dışında bir değere (`relative`, `absolute`, veya `fixed`) sahip olan en yakın üst elemandır.
- **Eğer Ata Yoksa:** Eğer hiçbir atası konumlandırılmamışsa, eleman sayfanın en kök elemanına, yani `<html>` etiketine (genellikle tarayıcı penceresinin sol üst köşesi) göre hizalanır.
- **Ne Zaman Kullanılır?** Elemanları birbiri üzerine bindirmek veya bir ana kapsayıcı içinde hassas bir şekilde konumlandırmak için kullanılır.

### 4. `fixed`
- **Anlamı:** `absolute` gibidir, ancak eleman atasına göre değil, doğrudan **tarayıcı penceresine (viewport)** göre konumlandırılır.
- **Özelliği:** Sayfa aşağı kaydırılsa bile eleman **ekranda sabit kalır**.
- **Ne Zaman Kullanılır?** Sayfanın üstünde sabit duran menüler, altta sabit duran çerez bildirimleri veya "Yukarı Çık" butonları gibi elemanlar için idealdir.

---

## `z-index` Özelliği

- **Ne İşe Yarar?** Konumlandırılmış (`static` hariç) elemanların üst üste gelme sırasını (yığın sırasını) belirler. `z-index` değeri büyük olan eleman, küçük olana göre daha üstte görünür.

---

## Birine Anlatır Gibi (Feynman Tekniği Özeti)

**Soru:** Sayfamdaki bir kutuyu istediğim yere nasıl koyarım? Aralarındaki fark ne?

**Cevap:** Dört seçeneğin var:

1.  **`static` (Hiç Dokunma):** Bu varsayılan ayardır. Kutular sırayla alt alta, yan yana dizilir. `top`, `left` falan işe yaramaz.

2.  **`relative` (Biraz İt):** Kutuyu normalde durduğu yerden biraz sağa, sola, yukarı veya aşağı kaydırmak için kullanırsın. Eski yeri boş kalır, kimse oraya yerleşmez.

3.  **`absolute` (Özgür Ruh):** Kutuyu normal akıştan koparıp alırsın. Sonra onu, `position` ayarı yapılmış **en yakın babasına/dedesine** göre hizalarsın. Eğer konumlandırılmış bir atası yoksa, sayfanın en başına uçar.

4.  **`fixed` (Yapışkan):** Bu da `absolute` gibi özgürdür ama o, atasına değil, direkt **ekranın kendisine** yapışır. Sen sayfayı kaydırsan bile o yerinden oynamaz. Sabit menüler için mükemmeldir.

**Kilit Bilgi:** `absolute` konumlandırmanın düzgün çalışması için, onu içine koyduğun ana kutuya genellikle `position: relative;` verirsin. Böylece çocuk, babasının sınırları içinde kalır.
