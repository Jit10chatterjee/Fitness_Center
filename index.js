
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}

function hideShow1() {
    var x = document.getElementById("hiding-para1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function hideShow2() {
    var x = document.getElementById("hiding-para2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function hideShow3() {
    var x = document.getElementById("hiding-para3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function collapseNavbar() {
    var x = document.getElementById("collapse-bar1");
    var y = document.getElementById("nav-icon");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.color = "white";
    } else {
        x.style.display = "none";
        y.style.color = "red";
    }
}

var courseSlides = 1;
showDivs(courseSlides);

function plusDivs(n) {
    showDivs(courseSlides += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("aa-courses-desc-box");
    if (n > x.length) { courseSlides = 1 }
    if (n < 1) { courseSlides = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[courseSlides - 1].style.display = "block";
}
