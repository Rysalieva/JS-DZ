function calculateBudget() {
    const amountInput = document.getElementById("amountInput");
    const monthSelect = document.getElementById("monthSelect");
    const resultDiv = document.getElementById("result");

    const amount = parseFloat(amountInput.value);
    const daysInMonth = parseInt(monthSelect.value);

    if (isNaN(amount) || isNaN(daysInMonth) || amount <= 0 || daysInMonth <= 0) {
        resultDiv.textContent = "Введите корректные данные.";
    } else {
        const dailyBudget = (amount / daysInMonth).toFixed(2);
        resultDiv.textContent = `Бюджет на день: $${dailyBudget}`;
    }
}
