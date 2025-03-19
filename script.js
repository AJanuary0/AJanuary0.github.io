document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carrusel-item");
    const totalSlides = slides.length;

    if (index < 0) {
        currentIndex = totalSlides - 2; 
    } else if (index > totalSlides - 2) {
        currentIndex = 0; 
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 50;
    document.querySelector(".carrusel-inner").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}