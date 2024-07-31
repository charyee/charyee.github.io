window.onload = () => {
    const transition_el = document.querySelector('.transition');
    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);
}

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    const transitionElement = document.querySelector('.transition');
    const sections = ['hello.html', 'experience.html', 'projects.html', 'contact.html'];
    let currentIndex = sections.indexOf(window.location.pathname.split('/').pop());

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = link.getAttribute('href');
            navigateToPage(targetPage);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % sections.length;
            navigateToPage(sections[currentIndex]);
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + sections.length) % sections.length;
            navigateToPage(sections[currentIndex]);
        }
    });

    function navigateToPage(page) {
        transitionElement.classList.add('is-active');

        setTimeout(() => {
            window.location.href = page;
        }, 500); 
    }
});
