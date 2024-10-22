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
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listener for the button click
document.getElementById("backToTop").addEventListener("click", topFunction);
