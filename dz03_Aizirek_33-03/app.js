var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var tagCount = {};

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if (tagCount[tag] === undefined) {
        tagCount[tag] = 1;
    } else {
        tagCount[tag]++;
    }
}

console.log(tagCount);

// создание объекта массива через цикл

var data = ['name', 'John', 'lastname', 'Black', 'age', '23'];
var resultObject = {};

for (var i = 0; i < data.length; i += 2) {
    var key = data[i];
    var value = data[i + 1];
    resultObject[key] = value;
}

console.log(resultObject);

//

function getDataType(value) {
    return typeof value;
}

// примеры использования
console.log(getDataType(false));            // "boolean"
console.log(getDataType('hello world!'));    // "string"
console.log(getDataType(42));                // "number"
