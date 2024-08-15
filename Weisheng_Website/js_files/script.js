//All Javascript Functions for Weisheng's Website
// Navigation Toggle Function
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('nav-open');
});

// Preloader Function
var loader = document.getElementById("preloader");
function showPreloader() {
    document.body.classList.add('loading'); 
    loader.style.display = "flex"; 
}

function hidePreloader() {
    loader.style.display = "none";
    document.body.classList.remove('loading'); 
}

window.addEventListener("load", function() {
    showPreloader();
    setTimeout(hidePreloader, 2000); 
});


//About.Html
console.log("JavaScript is working!");

window.addEventListener('scroll', function() {
    const picture = document.getElementById('main-picture');
    const aboutSection = document.getElementById('about-section').getBoundingClientRect();
    const journeySection = document.getElementById('journey-section').getBoundingClientRect();
    const visionSection = document.getElementById('vision-section').getBoundingClientRect();

    console.log("Scroll event detected", window.scrollY);

    if (aboutSection.top <= 100 && aboutSection.bottom > 100) {
        picture.src = "../images_files/Ws_picture1.jpg"; // Image for the about section
        console.log("Displaying picture 1 (About section)");
    } else if (journeySection.top <= 100 && journeySection.bottom > 100) {
        picture.src = "../images_files/Ws_picture2.jpg"; // Image for the journey section
        console.log("Displaying picture 2 (Journey section)");
    } else if (visionSection.top <= 100 && visionSection.bottom > 100) {
        picture.src = "../images_files/Ws_picture3.jpg"; // Image for the vision section
        console.log("Displaying picture 3 (Vision section)");
    }
});

