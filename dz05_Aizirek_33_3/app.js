// 1. удаление дубликатов из массива
const numbersArray = [2, 3, 4, 5, 44, 44, 34, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 8, 7, 8, 7, 5, 6, 4, 5];

function removeDuplicates(arr) {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

const uniqueNumbers = removeDuplicates(numbersArray);
console.log("Массив без дубликатов:", uniqueNumbers);

// 2. функция для фильтрации и маппинга массива книг
function filterAndMapBooks(books) {
    const booksWithU = books.filter(book => book.toLowerCase().includes('у'));
    const booksWithoutU = books.filter(book => !book.toLowerCase().includes('у'));

    const resultArray = booksWithU.map(book => `${book} - книга с буквой 'у'`);

    return resultArray.concat(booksWithoutU);
}

const bookArray = ["Harry Potter", "Lord of the Rings", "The Great Gatsby", "To Kill a Mockingbird", "1984"];

const filteredAndMappedBooks = filterAndMapBooks(bookArray);
console.log("Отфильтрованные и отмеченные книги:");
filteredAndMappedBooks.forEach(book => console.log(book));
