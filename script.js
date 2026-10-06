// Находим все кнопки навигации и все вкладки
const navButtons = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Перебираем кнопки и вешаем на них клик
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок и вкладок
        navButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Добавляем активный класс нажатой кнопке
        button.classList.add('active');

        // Получаем id нужной вкладки и показываем ее
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});