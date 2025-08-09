alert("Başlıyoruz");

let height = parseFloat(prompt("Boyunuzu giriniz (Örnek: 170, 185)"));
let weight = parseFloat(prompt("Kilonuzu giriniz: "));

height = height / 100; // metreye çevir
let result = weight / (height ** 2); // BMI formülü

if (result < 18.5) {
    alert("Zayıfsınız: " + result.toFixed(2));
} else if (result < 25) {
    alert("Sağlıklısınız: " + result.toFixed(2));
} else if (result < 30) {
    alert("Fazla kilolusunuz: " + result.toFixed(2));
} else if (result < 40) {
    alert("Obezsiniz: " + result.toFixed(2));
} else if (result >= 40) {
    alert("Aşırı obezsiniz: " + result.toFixed(2));
} else {
    alert("Hata oluştu");
}
