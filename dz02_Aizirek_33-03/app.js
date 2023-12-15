// Конструктор StarbucksCoffeeCompany
function StarbucksCoffeeCompany(location, menu, employees) {
    this.location = location;
    this.menu = menu;
    this.employees = employees;

    // Метод для отображения информации о компании
    this.displayInfo = function () {
        console.log(`Starbucks Coffee Company at ${this.location}`);
        console.log("Menu:");
        this.menu.forEach(item => console.log(`- ${item}`));
        console.log(`Number of employees: ${this.employees.length}`);
    };
}

// Пример использования
const starbucksLocation = "123 Main Street";
const starbucksMenu = ["Latte", "Cappuccino", "Mocha", "Espresso", "Frappuccino"];
const starbucksEmployees = ["Barista1", "Barista2", "Cashier1"];

const starbucks = new StarbucksCoffeeCompany(starbucksLocation, starbucksMenu, starbucksEmployees);
starbucks.displayInfo();

for (let number = 0; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}

function getSeason(month) {
    let season = null;

    switch (month) {
        case 1:
        case 2:
        case 12:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        default:
            break;
    }

    console.log(`Season: ${season}`);
}

getSeason(3);

const myArray = [[[[[[[[[[[2]]]]]]]]]]];
console.log(myArray[0][0][0][0][0][0][0][0][0][0][0]);
