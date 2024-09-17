$(document).ready(function(){
    $('.slider').slick({
        dots: true,  // Точки навігації
        infinite: true,  // Бескінечне прокручування
        speed: 600,  // Швидкість анімації
        slidesToShow: 1,  // Відображати лише один слайд
        slidesToScroll: 1, 
        autoplay: false,  
        arrows: false 
    });
});
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: true
 });
 