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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Function to change background image
function changeBackgroundImage() {
    const images = [
        'background1.jpg',
        'background2.jpg',
        'background3.jpg',
        'background4.jpg',
        'background5.jpg'
    ]; // Array of image URLs
    const randomImage = images[Math.floor(Math.random() * images.length)]; // Pick a random image
    document.body.style.backgroundImage = url('${randomImage}'); // Set the background image
}

// Call the function on page load
window.onload = function() {
    changeBackgroundImage();
};
