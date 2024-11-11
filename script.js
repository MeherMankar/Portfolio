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
        './image/IMG_20241111_171030_035.jpg',
        './image/IMG_20241111_171028_509.jpg',
        './image/IMG_20241111_171004_020.jpg',
        './image/IMG_20241111_171002_817.jpg',
        './image/IMG_20241111_170932_117.jpg',
        './image/IMG_20241111_170929_570.jpg',
        './image/IMG_20241111_170854_302.jpg',
        './image/IMG_20241111_170852_446.jpg',
        './image/IMG_20241111_170825_698.jpg',
        './image/IMG_20241111_170824_997.jpg'
    ]; // Array of image URLs
    const randomImage = images[Math.floor(Math.random() * images.length)]; // Pick a random image
    document.body.style.backgroundImage = url('${randomImage}'); // Set the background image
}

// Call the function on page load
window.onload = function() {
    changeBackgroundImage();

    // Add click event to the button
    const backToTopButton = document.getElementById("backToTop");
    backToTopButton.onclick = topFunction; // Set the click event for the button
};
