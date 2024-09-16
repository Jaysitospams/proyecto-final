document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlayImg');
    const bookImgs = document.querySelectorAll('.book-img');

    bookImgs.forEach(img => {
        img.addEventListener('click', function () {
            overlayImg.src = this.src;
            overlay.classList.add('show');
        });
    });

    overlay.addEventListener('click', function () {
        overlay.classList.remove('show');
    });
});
