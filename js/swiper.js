const swiper1 = new Swiper(".idc-swiper-1", {
    // Default parameters
    slidesPerView: 1,
    loop: true,
    direction: "horizontal",
    // Responsive breakpoints

    // autoplay: {
    //     delay: 5000,
    // },
    pagination: {
        el: ".idc-swiper-pagination-1",
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
    slidesPerView: 1,
    spaceBetween: 27,
    loop: true,
    grabCursor: true,
    direction: "horizontal",
    // Responsive breakpoints
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1020: {
            slidesPerView: "auto",
            spaceBetween: 27,
        },
        1340: {
            slidesPerView: "auto",
            spaceBetween: 27,
        },
    },
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".idc-swiper-pagination-2",
        clickable: true,
        type: "bullets",
    },
});

const swiperMobile = new Swiper(".idc-swiper-mobile", {
    // Default parameters
    slidesPerView: 1,
    loop: true,
    direction: "horizontal",
    // Responsive breakpoints

    pagination: {
        el: ".idc-swiper-pagination-3",
        clickable: true,
        type: "bullets",
    },
});
