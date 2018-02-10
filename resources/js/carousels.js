$(document).ready(function(){
      $('.gallery-carousel').slick({
        dots: true,
        arrows: false,
      });
    });

    $(document).ready(function(){
          $('.header-carousel').slick({
            autoplay: true,
            arrows: false,
            autoplaySpeed: 5000
          });
        });

        $('.testimonials-carousel').slick({
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          dots: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 6
              }
            }
          ]
        });

        $('.testimonials-carousel-tablet').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        });

        $('.testimonials-carousel-mobile').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        });


        $(document).ready( function(){

            $('.dropdown').click( function(event){
                event.stopPropagation();
                $('.dropdown-content').toggle();
            });

            $(document).click( function(){
                $('.dropdown-content').hide();
            });

        });
