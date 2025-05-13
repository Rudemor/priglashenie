document.addEventListener('DOMContentLoaded', function() {
    // Добавляем плавное появление элементов при загрузке
    const elements = document.querySelectorAll('.invitation > div');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Добавляем эффект при наведении на дату и время
    const dateTime = document.querySelector('.date-time');
    if (dateTime) {
        dateTime.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        dateTime.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Обратный отсчёт
    function updateCountdown() {
        try {
            const weddingDate = new Date('2025-07-10T16:00:00');
            const now = new Date();
            const difference = weddingDate - now;

            const daysElement = document.getElementById('days');
            const hoursElement = document.getElementById('hours');
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');

            if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
                console.error('Элементы таймера не найдены');
                return;
            }

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                daysElement.textContent = String(days).padStart(2, '0');
                hoursElement.textContent = String(hours).padStart(2, '0');
                minutesElement.textContent = String(minutes).padStart(2, '0');
                secondsElement.textContent = String(seconds).padStart(2, '0');
            } else {
                const countdownElement = document.querySelector('.countdown');
                if (countdownElement) {
                    countdownElement.style.display = 'none';
                }
            }
        } catch (error) {
            console.error('Ошибка в обновлении таймера:', error);
        }
    }

    // Запускаем таймер только если все элементы существуют
    if (document.querySelector('.countdown-timer')) {
        updateCountdown(); // Первое обновление
        setInterval(updateCountdown, 1000); // Обновление каждую секунду
    }
}); 