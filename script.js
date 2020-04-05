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


    

let slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
    displaySlides(slide_index += n);
}
function currentSlide(n) {
    displaySlides(slide_index = n);
}
function displaySlides(n) {
    let i;
    let slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}



function expandMenu() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

dummyFunction()
  //this denotes a function requiring back-end functionality not yet built