document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.querySelector(
        '.scroll-to-top',
    )

    // Show/hide the "scroll-to-top" button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            scrollToTopBtn.style.display = 'block'
        } else {
            scrollToTopBtn.style.display = 'none'
        }
    })

    // Scroll to top when the button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
})