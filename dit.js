document.querySelectorAll('.img_div').forEach(container => {
    const slides = container.querySelectorAll('.slide');
    let index = 0;

    setInterval(() => {
        slides.forEach(slide => slide.style.display = 'none');
        index = (index + 1) % slides.length;
        slides[index].style.display = 'block';
    }, 2000);
});