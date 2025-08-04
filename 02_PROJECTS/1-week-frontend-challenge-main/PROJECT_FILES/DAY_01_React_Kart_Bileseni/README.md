# Gün 1 Projesi: Profesyonel Dijital Kartvizit (Çok Aşamalı Görev)

**Hedef:** React'in temel yapı taşlarını kullanarak, aşamalı olarak geliştirilecek, profesyonel bir dijital kartvizit bileşeni inşa etmek.

---

## Aşama 1: Çekirdek Görev (Core Task) - "Önce Çalışsın"

**Amaç:** Temel React bilgilerini (Bileşenler, JSX, Props) kullanarak veriyi ekranda gösterebilen bir prototip oluşturmak.

**Senin Görevlerin:**

1.  **Proje Kurulumu:** `npx create-react-app digital-card-app` ile projeni oluştur.
2.  **Veri Tanımlama:** `src/App.js` içinde, aşağıdaki gibi bir `userData` objesi tanımla.
    ```javascript
    const userData = {
      name: "Adın Soyadın",
      title: "Frontend Developer Adayı",
      avatarUrl: "https://i.pravatar.cc/300",
      contact: {
        email: "emailin@example.com",
        phone: "+90-555-123-4567"
      },
      skills: ["HTML", "CSS", "JavaScript", "React (Öğreniliyor)"]
    };
    ```
3.  **Bileşen Oluşturma:** `src/UserProfileCard.js` adında bir bileşen oluştur. Bu bileşen, `user` adında tek bir prop almalı.
4.  **Veriyi Render Etme:** Aldığın `user` prop'u içindeki **tüm verileri** (isim, unvan, avatar, email, telefon, yetenekler) JSX kullanarak ekranda göster. Yetenekler için `.map()` kullan.
5.  **Temel Stil:** Ayrı bir CSS dosyası (`UserProfileCard.css`) ile çok basit bir stil ver (çerçeve, boşluklar vb.).
6.  **Entegrasyon:** `App.js` içinde `UserProfileCard` bileşenini çağır ve `userData` objesini prop olarak geçir.
7.  **Çalıştır:** `npm start` ile sonucu gör.

> **Bu aşamayı bitirmeden diğerine geçme!**

---

## Aşama 2: Geliştirme (Refine) - "Şimdi Doğru Yap"

**Amaç:** Çalışan kodunu, daha profesyonel ve sürdürülebilir hale getirmek.

**Senin Görevlerin:**

1.  **Prop Destructuring:** `UserProfileCard.js` içinde, `const { name, title, ... } = user;` gibi prop'ları fonksiyonun başında parçalara ayır. Bu, kod içinde sürekli `user.name` yazmanı engeller ve okunabilirliği artırır.
2.  **Bileşen Kompozisyonu:** Kartvizit çok karmaşıklaşıyor. `skills` listesini ayrı bir bileşene taşı. 
    *   `src/SkillsList.js` adında yeni bir bileşen oluştur.
    *   Bu bileşen, `skills` adında bir prop (yetenek dizisini) alsın ve `<ul>` listesini render etsin.
    *   `UserProfileCard` içinde, `<SkillsList skills={user.skills} />` şeklinde bu yeni bileşeni çağır. Bu, "separation of concerns" (sorumlulukların ayrılması) ilkesinin temelidir.
3.  **Koşullu Render (Conditional Rendering):** `userData` objesinden `phone` satırını sil ve kaydet. Ne oldu? Muhtemelen sayfa boş kaldı veya hata verdi. Bunu düzelt.
    *   `UserProfileCard` içinde, telefon numarasını sadece var olduğunda göster. Şöyle bir yapı kullanabilirsin:
        ```jsx
        {contact.phone && <p><strong>Telefon:</strong> {contact.phone}</p>}
        ```

---

## Aşama 3: Keşif (Explore) - "Peki Ya Şöyle Olsaydı?"

**Amaç:** Bilgini test etmek ve farklı senaryolara karşı çözümler düşünmek.

**Senin Görevlerin (Bunlar düşünce deneyi ve meydan okumadır):**

1.  **`key` Prop'unun Önemi:** `skills` dizisini `.map()` ile render ederken, tarayıcının geliştirici konsolunda bir "key prop" uyarısı göreceksin. 
    *   **Araştır:** React'te listeleri render ederken `key` prop'u neden zorunludur? Performansa etkisi nedir?
    *   **Uygula:** `skills` dizisini `skills: [{id: 1, name: "HTML"}, {id: 2, name: "CSS"}, ...]` şeklinde objelerden oluşan bir diziye çevir. `.map()` fonksiyonunu `<li key={skill.id}>{skill.name}</li>` şeklinde güncelle ve uyarının kaybolduğunu gör.

2.  **Dinamik Stiller:** `UserProfileCard` bileşenine `isActive={true}` gibi ek bir boolean prop ekle. 
    *   Bu prop `true` ise kartın etrafına yeşil, `false` ise kırmızı bir çerçeve ekleyen bir mantık kurabilir misin? (İpucu: `className`'i dinamik olarak oluşturman gerekebilir: `className={\`card ${isActive ? 'active-card' : 'inactive-card'}\`}`)

Bu üç aşamalı görev, seni sadece bir geliştirici gibi değil, bir **yazılım mimarı** gibi düşünmeye teşvik edecektir. İyi şanslar!