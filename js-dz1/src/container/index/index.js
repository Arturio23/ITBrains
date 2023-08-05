import '../../script/test'

document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо кнопку прокрутки вгору
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Показуємо або ховаємо кнопку залежно від позиції прокрутки
    function toggleScrollToTopBtn() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 || document.documentElement.outerHeight < 700) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    // Кнопка для плавного прокручування вгору
    function scrollToTop() {
        if (document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -50);
            requestAnimationFrame(scrollToTop);
        }
    }

    // При прокрутці перевіряємо, коли потрібно показати / ховати кнопку
    window.onscroll = function () {
        toggleScrollToTopBtn();
    };

    // При кліку на кнопку прокрутки вгору виконуємо плавне прокручування
    scrollToTopBtn.addEventListener('click', function () {
        scrollToTop();
    });
});

console.log('container')
