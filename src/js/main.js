// Header Nav Tab hiding After scroll
jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 50) { jQuery("header").addClass("cst-fixed"); }
        else { jQuery("header").removeClass("cst-fixed"); }
    });
});

// Preloader Javascript
jQuery(window).on("load", function () {
    "use strict";
    $("#preloader").fadeOut(1000);
});

// Spiderman Banner
var thumbs = new Swiper(".thumbs", {
    centeredSlidesBounds: true,
    slidesPerView: 2,
    direction: 'horizontal',
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
});
var slider = new Swiper(".main-slider", {
    spaceBetween: 1000,
    initialSlide: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "coverflow",
    speed: 1000,
    loop: true,
    thumbs: {
        swiper: thumbs,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});

gsap.from(".intro .spider img", {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
})
gsap.from(".intro .hand", {
    y: 1000,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
})
gsap.from(".intro h2", {
    y: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    delay: 1,
})
gsap.from(".thumbs .swiper-slide", {
    x: 1000,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    delay: 1,
})

// Parallax Mouse Hover Effect
let mainslider = document.querySelector(".main-slider");
let spidey = document.querySelectorAll(".parallax");


mainslider.onmousemove = function (e) {
    // console.log(e.pageX,e.pageY);
    let X = e.pageX;
    let Y = e.pageY;

    spidey[0].style.transform = "translate(" + X / 100 * 2 + "px," + Y / 100 * 2 + "px)";
    spidey[1].style.transform = "translate(" + X / 100 * 4 + "px," + Y / 100 * 6 + "px)";
    spidey[2].style.transform = "translate(" + X / 100 * 6 + "px," + Y / 100 * 5 + "px)";
    spidey[3].style.transform = "translate(" + X / 100 * 3 + "px," + Y / 100 * 4 + "px)";
    spidey[4].style.transform = "translate(" + X / 100 * 1 + "px," + Y / 100 * 3 + "px)";
    spidey[5].style.transform = "translate(" + X / 100 * 4 + "px," + Y / 100 * 3 + "px)";
}