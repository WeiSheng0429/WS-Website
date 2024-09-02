//Navigation Bar
document.getElementById('nav-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('nav-open');
    }
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

// Contact Form 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const services = document.getElementById('services').value;
    const projectDetails = document.getElementById('project-details').value;

    console.log('Form submitted:', {
        name,
        email,
        services,
        projectDetails
    });

    alert('Thank you for submitting the form, ' + name + '!');
    window.location.href = "index.html";
});
