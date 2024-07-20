const container = document.querySelector('.container');

// Создаем 100 квадратов и добавляем к контейнеру
for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.style.width = '40px';  // Задайте ширину квадрата
    square.style.height = '40px'; // Задайте высоту квадрата
    square.style.backgroundColor = '#007bff'; // Начальный цвет
    square.addEventListener('click', () => {
        square.style.backgroundColor = getRandomColor(); // Изменяем цвет на случайный
    });
    container.appendChild(square); // Добавляем квадрат в контейнер
}

// Функция для генерации случайного цвета
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
