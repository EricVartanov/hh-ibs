const swiper1 = new Swiper(".idc-swiper-1", {
    // Default parameters
    slidesPerView: 1,
    loop: true,
    direction: "horizontal",
    // Responsive breakpoints

    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".idc-swiper-pagination",
        clickable: true,
        type: "bullets",
    },

    navigation: {
        nextEl: ".idc-swiper-button-next",
        prevEl: ".idc-swiper-button-prev",
    },
});

const swiper2 = new Swiper(".idc-swiper-2", {
    // Default parameters
    slidesPerView: 4.5,
    spaceBetween: 27,
    loop: true,
    cursorGrab: true,
    direction: "horizontal",
    // Responsive breakpoints

    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".idc-swiper-pagination",
        clickable: true,
        type: "bullets",
    },

    
});