alert("Başlıyoruz")

let dizel = 24.53;
let benzin = 22.25;
let lpg = 11.1;

const yeniSatır = "\r\n";

const yakitMetni = "1-Dizel"+yeniSatır
                  +"2-Benzin"+yeniSatır
                  +"3-LPG"+yeniSatır
                  +"İstediğiniz yakıt numarasını giriniz: ";


let choose = Number(prompt(yakitMetni));
let howLitre = parseFloat(prompt("Kaç litre alacaksınız: "));

let type = 0;

if(choose == 1){
    type = dizel;
}else if(choose == 2){
    type = benzin;
}else if(choose == 3){
    type = lpg;
}

result = type*howLitre;

const finalText = howLitre+" Litre, "+result+"TL'ye  yüklendi...";

alert(finalText);
