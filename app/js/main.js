$(function(){

    $(".rateYo").rateYo({
        rating: 4.5,
        starWidth: "12px",
        readOnly: true
      });

    $('.product-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
    });


    var mixer = mixitup('.class');

    
});