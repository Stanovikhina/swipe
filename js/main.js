
$('.carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
});



var swiper = new Swiper('.swiper-container', {
    pagination: {
    el: '.swiper-pagination',
    },
});    


new Glide('.glide').mount()