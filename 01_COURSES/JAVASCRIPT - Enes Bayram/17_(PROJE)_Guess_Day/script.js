let dayNumber = parseInt(prompt("1 ile 7 arasında bir sayı girin: "));

let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Pazartesi";
        break;
    case 2:
        dayName = "Salı";
        break;
    case 3:
        dayName = "Çarşamba";
        break;
    case 4:
        dayName = "Perşembe";
        break;
    case 5:
        dayName = "Cuma";
        break;
    case 6:
        dayName = "Cumartesi";
        break;
    case 7:
        dayName = "Pazar";
        break;
    default:
        dayName = "Geçersiz sayı! 1 ile 7 arasında bir değer girin.";
}

alert(dayName);
