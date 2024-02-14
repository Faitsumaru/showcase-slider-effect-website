document.addEventListener('DOMContentLoaded', function() {

    const showSlider = new Swiper('.showcase__carousel', {
        loop: true,
        slidesPerView: 3,
        speed: 1800,
        centeredSlides: true,
        navigation: {
            prevEl: '.showcase__navigation-prev',
            nextEl: '.showcase__navigation-next'
        }
    })


    document.querySelector('video').playbackRate = 3
    
})