window.onload = () => {
    const transition_el = document.querySelector('.transition');
    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 400);
}

document.addEventListener('DOMContentLoaded', () => {
    const transitionElement = document.querySelector('.transition');

    setTimeout(() => {
        transitionElement.classList.remove('is-active');
    }, 500); 

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            goToNextPage();
        } else if (event.key === 'ArrowLeft') {
            goToPreviousPage();
        }
    });

    function goToNextPage() {
        const currentPage = window.location.pathname.split('/').pop();
        let nextPage = '';

        switch (currentPage) {
            case 'index.html':
            case '':
                nextPage = 'html/experience.html';
                break;
            case 'experience.html':
                nextPage = 'html/projects.html';
                break;
            case 'projects.html':
                nextPage = 'html/contact.html';
                break;
            case 'contact.html':
                nextPage = 'index.html';
                break;
            default:
                nextPage = 'index.html';
                break;
        }

        applyTransitionAndNavigate(nextPage);
    }

    function goToPreviousPage() {
        const currentPage = window.location.pathname.split('/').pop();
        let prevPage = '';

        switch (currentPage) {
            case 'index.html':
            case '':
                prevPage = 'html/contact.html';
                break;
            case 'experience.html':
                prevPage = 'index.html';
                break;
            case 'projects.html':
                prevPage = 'html/experience.html';
                break;
            case 'contact.html':
                prevPage = 'html/projects.html';
                break;
            default:
                prevPage = 'index.html';
                break;
        }

        applyTransitionAndNavigate(prevPage);
    }

    function applyTransitionAndNavigate(page) {
        transitionElement.classList.add('is-active');
        
        setTimeout(() => {
            window.location.href = page;
        }, 400); 
    }
});
