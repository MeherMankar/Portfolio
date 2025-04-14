window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const backToTopButton = document.getElementById("backToTop");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Dark Mode Toggle Logic
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});

// Initialize back to top button
window.addEventListener('load', function() {
    const backToTopButton = document.getElementById("backToTop");
    backToTopButton.addEventListener('click', topFunction);
    
    // Set background image
    document.body.style.backgroundImage = "url('./image/Galaxy.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
});