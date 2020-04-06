let myDate = new Date();
let hrs = myDate.getHours();
let greet;
if (hrs < 12)
    greet = 'Good morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good evening';
document.getElementById('guestGreeting').innerHTML =
    `${greet}, jam enthusiast. <br/> Here's what's currently in the pantry. </br> Orders are first come first served, </br> so pick up the phone!`;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//this denotes a function requiring back-end functionality not yet built
dummyFunction()
