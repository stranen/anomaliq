// script.js
// За динамично поведение на бутоните за навигация, ако е необходимо.

// script.js

// Функция за преминаване към следваща страница
function goToPage(url) {
    window.location.href = url;
}

// Функция за връщане към предишната страница
function goBack() {
    window.history.back();
}

// Пример за добавяне на слушатели за събития към бутоните, ако искаш да управляваш навигацията по програмно ниво
document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('#next-btn');
    const prevButton = document.querySelector('#prev-btn');

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            goToPage(nextButton.getAttribute('data-next'));
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', goBack);
    }
});

