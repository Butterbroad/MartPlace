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
    
    $('.slider__feed-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        variableWidth: true,
    });


    var mixer = mixitup('.class');

    
});