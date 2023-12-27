function toggleAnswer(riddleNumber) {
    const answer = document.querySelector(`.riddle:nth-child(${riddleNumber}) .answer`);
    const button = document.querySelector(`.riddle:nth-child(${riddleNumber}) .toggle-button`);

    if (answer.style.display === "none") {
        answer.style.display = "block";
        button.textContent = "Скрыть ответ";
    } else {
        answer.style.display = "none";
        button.textContent = "Показать ответ";
    }
}
