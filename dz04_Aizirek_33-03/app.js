// получаем элементы
var counterInput = document.getElementById('counterInput');

//для увеличения счетчика
function increaseCounter() {
    var currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue + 1;
    updateCounterColor();
}

//для уменьшения счетчика
function decreaseCounter() {
    var currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue - 1;
    updateCounterColor();
}

//для сброса счетчика
function resetCounter() {
    counterInput.value = 0;
    updateCounterColor();
}

// для обновления цвета счетчика в зависимости от значения
function updateCounterColor() {
    var currentValue = parseInt(counterInput.value);
    counterInput.className = currentValue > 0 ? 'positive' : (currentValue < 0 ? 'negative' : 'zero');
}

// Вызываем функцию обновления цвета при загрузке страницы
updateCounterColor();