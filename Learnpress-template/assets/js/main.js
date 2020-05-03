

$(document).ready(function(){
/* sticky navbar onscroll*/

$(window).on("scroll",function() {
        if ($(this).scrollTop() > 20) {
            $('.header-top-content').addClass("navbar-fixed-top");
        }
        else {
            $('.header-top-content').removeClass("navbar-fixed-top");
        }
    });


/* owl carosel*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/* counter up*/

 $('.counter').counterUp({
                delay: 10,
                time: 1000
   });




$('.owl-carousel').owlCarousel({
   
   autoplay:false,
});




     
   












});