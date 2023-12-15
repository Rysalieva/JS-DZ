// 1.Starbucks Coffee Company
var starbucks = {
    name: "Starbucks Coffee Company",
    foundedYear: 1971,
    locations: ["1st Avenue, Seattle", "Times Square, New York"],
    popularDrink: "Caramel Macchiato",
    isPubliclyTraded: true,
    revenue: "$26.7 billion (2021)"
};

// о компании в консоль
console.log(`Welcome to ${starbucks.name}! Founded in ${starbucks.foundedYear}.`);
console.log(`We have locations in ${starbucks.locations.length} cities.`);
console.log(`Try our popular drink: ${starbucks.popularDrink}.`);
console.log(`As of 2021, our revenue is ${starbucks.revenue}.`);

// 2. "FizzBuzz"
for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 3.для определения сезона года
var month = prompt("Введите месяц (от 1 до 12):");

switch (parseInt(month)) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;
    default:
        console.log("Некорректный ввод месяца.");
}

// 4. вывод цифры 2 из массива
var nestedArray = [[[[[[[[[[[2]]]]]]]]]]];
console.log(nestedArray[0][0][0][0][0][0][0][0][0][0][0]);
