// 1) для вычисления возраста

//год рождения
var yearOfBirth = prompt("Введите год рождения:");

// преобразуем введенное значение в число и вычисляем возраст
try {
    var currentYear = new Date().getFullYear();
    var age = currentYear - parseInt(yearOfBirth);

    //возраст в консоль
    console.log("Ваш возраст: " + age + " лет");
} catch (error) {
    console.log("Пожалуйста, введите корректный год рождения.");
}

// 2) для проверки страны и столицы

// название страны и столицы
var countryInput = prompt("Введите название страны:");
var capitalInput = prompt("Введите название столицы этой страны:");

// проверка веденных данных
try {
    // способ сравнения строк без учета регистра
    if (countryInput.toLowerCase() === "Кыргызстан" && capitalInput.toLowerCase() === "Бишкек") {
        var countryCode = "КР";
        console.log("Поздравляем! Вы правильно ввели страну и столицу. Код страны: " + countryCode);
    } else {
        console.log("Кажется, вы ошиблись в названии страны или столицы.");
    }
} catch (error) {
    console.log("Произошла ошибка: " + error);
}


