# 🚀 Profesyonel Geliştirme Laboratuvarı: Yol Haritası

Her gün, belirtilen `LEARNING_NOTEBOOKS` defterindeki teorik analiz tamamlanacak ve `PROJECT_FILES` klasöründeki pratik görev hayata geçirilecektir.

---

### Gün 1: React'in Anatomisi (Bileşenler, JSX ve Render Mekanizması)

*   **🎯 Stratejik Hedef:** React'in temel yapı taşı olan "bileşen" kavramını, sadece bir UI parçası olarak değil, aynı zamanda bir "state makinesi" ve "render birimi" olarak kavramak. Sanal DOM (Virtual DOM) ve render süreci arasındaki ilişkiyi anlamak.
*   **🛠️ Teknik Kavramlar:**
    *   **Ortam Kurulumu:** `create-react-app`'in oluşturduğu dosya yapısının analizi (`public`, `src`, `package.json`).
    *   **JSX Derinlemesine:** JSX'in aslında `React.createElement()`'e nasıl dönüştüğünü anlamak. Babel'in rolü.
    *   **Bileşen Mimarisi:** Fonksiyonel Bileşenler, Sınıf Bileşenleri (Class Components) arasındaki farklar (teorik olarak).
    *   **Props Sistemi:** Veri akışının tek yönlü (one-way data flow) doğası. `props` ve `props.children`. Prop-drilling sorununun teorik olarak anlaşılması.
*   **💻 Pratik Görev (`PROJECT_FILES/DAY_01...`):** Gelişmiş bir "Dijital Kartvizit" bileşeni oluşturmak. Bu bileşen, iç içe geçmiş veri yapılarını (örneğin, `socials: {twitter: '...', linkedin: '...'}`) `props` olarak alabilmeli ve basit bir stil (inline CSS veya CSS dosyası) ile görselleştirilmelidir.
*   **📓 Laboratuvar Defteri (`LEARNING_NOTEBOOKS/DAY_01...`):**
    *   "React Bileşeni Nedir?" sorusuna cevap: Fonksiyon, obje, UI ve state'in birleşimi.
    *   JSX'in JavaScript'e dönüşümünü gösteren `Babel REPL`'den alınmış kod örnekleri.
    *   Sanal DOM'un neden gerekli olduğunu ve nasıl çalıştığını açıklayan bir şema veya metin.

---

### Gün 2: Canlandırma (State ve Etkileşim)

*   **🎯 Hedef:** Kullanıcı etkileşimine tepki veren dinamik arayüzler oluşturmak.
*   **🛠️ Teknik Konular:** `useState` Hook'u, Olaylar (`onClick`), Koşullu Render (Conditional Rendering).
*   **💻 Proje Görevi (`PROJECT_FILES/DAY_02...`):** Bir "Sayaç" uygulaması yap. Ekranda bir sayı ve "Artır", "Azalt", "Sıfırla" butonları olsun. Ayrıca, sayı 10'dan büyükse sayının yanında "Hedefe Ulaşıldı!" mesajı gösterilsin.
*   **🧠 Feynman Tekniği Görevi (`FEYNMAN_LOG/DAY_02...`):** `useState`'i bir odanın termostatına benzeterek açıkla. "State, odanın anlık sıcaklığıdır. `setState` ise termostatı ayarlayarak odayı yeniden ısıtan veya soğutan komuttur."

---

### Gün 3: İskeleti Kurma (Next.js ve Tailwind CSS)

*   **🎯 Hedef:** Modern bir web uygulamasının temel yapısını ve stil sistemini kurmak.
*   **🛠️ Teknik Konular:** `create-next-app`, App Router (Dosya tabanlı routing), Layouts, Tailwind CSS utility sınıfları.
*   **💻 Proje Görevi (`PROJECT_FILES/DAY_03...`):** Basit bir blog sitesi iskeleti oluştur. `anasayfa`, `hakkimda` ve `iletisim` olmak üzere üç sayfası olsun. Tüm sayfalar ortak bir `Header` ve `Footer`'a sahip olsun. Tüm stillendirmeyi sadece Tailwind CSS ile yap.
*   **🧠 Feynman Tekniği Görevi (`FEYNMAN_LOG/DAY_03...`):** Next.js'in dosya sistemini bir evin odalarına benzet. `app/layout.js` evin ana yapısı (duvarlar, çatı), `app/hakkimda/page.js` ise "Hakkımda Odası"dır. Tailwind'i ise "Lego parçaları" olarak anlat.

---

### Gün 4: Hafıza Kazandırma (`useEffect` ve `localStorage`)

*   **🎯 Hedef:** Veriyi tarayıcıda kalıcı hale getirmek ve yan etkileri yönetmek.
*   **🛠️ Teknik Konular:** `useEffect` Hook'u (bağımlılık dizisi `[]` ve `[değişken]`), `localStorage` API'si.
*   **💻 Proje Görevi (`PROJECT_FILES/DAY_04...`):** Bir "Not Defteri" uygulaması yap. Büyük bir `<textarea>` olsun. Kullanıcı yazdığı her metin, anında `localStorage`'a kaydedilsin. Sayfa yenilendiğinde, en son yazılan metin `textarea` içinde görünsün.
*   **🧠 Feynman Tekniği Görevi (`FEYNMAN_LOG/DAY_04...`):** `useEffect`'i bir güvenlik görevlisine benzet. Bağımlılık dizisi `[]` ise "Sadece kapılar ilk açıldığında bir kere kontrol et" demektir. `[değişken]` ise "Bu kişi (değişken) her kapıdan geçtiğinde kontrol et" demektir.

---

### Gün 5: Mimar Olma (Custom Hooks)

*   **🎯 Hedef:** Tekrar eden kod mantığını soyutlayarak temiz ve modüler bir mimari kurmak.
*   **🛠️ Teknik Konular:** Kendi hook'unu (`use...` ile başlayan fonksiyon) yazma.
*   **💻 Proje Görevi (`PROJECT_FILES/DAY_05...`):** Dünkü projedeki `localStorage` mantığını `useLocalStorage(key, initialValue)` adında bir custom hook'a dönüştür.
*   **🧠 Feynman Tekniği Görevi (`FEYNMAN_LOG/DAY_05...`):** Custom Hook'ları, kendi özel alet çantanı yapmaya benzet. "Her seferinde tornavida, çekiç, pense aramak yerine, hepsini bir 'Tamir Seti' (custom hook) içine koyuyorum ve ihtiyacım olduğunda sadece seti alıyorum."

---

### Gün 6: Dışarı Açılma (API ve Veri Çekme)

*   **🎯 Hedef:** Harici bir kaynaktan (backend) veri çekip arayüzde göstermek.
*   **🛠️ Teknik Konular:** `async/await`, `fetch`, Supabase'e temel bağlantı ve veri okuma, `.env.local` kullanımı.
*   **💻 Proje Görevi (`PROJECT_FILES/DAY_06...`):** Supabase'de `products` adında bir tablo oluştur ve içine birkaç ürün ekle. Next.js uygulamandan bu ürünleri çek ve bir liste halinde ekranda göster.
*   **🧠 Feynman Tekniği Görevi (`FEYNMAN_LOG/DAY_06...`):** API'den veri çekmeyi, restoranda sipariş vermeye benzet. "Bileşen garsonu (`fetch`) çağırır, mutfağa (API) siparişi verir, mutfak yemeği (JSON data) hazırlayınca garson onu alıp masaya (state) getirir ve sen de görürsün."

---

### Gün 7: Ürünü Yaratma (Final Projesi)

*   **🎯 Hedef:** Tüm öğrenilenleri birleştirerek çalışan, küçük ölçekli bir ürün ortaya çıkarmak.
*   **🛠️ Teknik Konular:** Bileşen kompozisyonu, state yönetimi, API entegrasyonu.
*   **💻 Proje Görevi (`PROJECT_FILES/DAY_07...`):** Orijinal projenin **Mini CV Oluşturucu** versiyonunu yap. Kişisel bilgiler için inputlar (`useLocalStorage` hook'u ile), deneyimler bölümü (Supabase'den çekilecek) ve basit bir önizleme ekranı olsun.
*   **🧠 Feynman Tekniği Görevi (`FEYNMAN_LOG/DAY_07...`):** Tüm hafta boyunca öğrendiklerini özetleyen bir "Proje Değerlendirme" yazısı yaz. Hangi konuda zorlandın, hangisi kolay geldi, bir sonraki adımda neyi daha derin öğrenmek istersin?
