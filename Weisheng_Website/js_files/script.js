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