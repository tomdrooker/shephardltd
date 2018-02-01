$(document).ready(function(){
      $('.your-class').slick({
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
                slidesToShow: 3
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

        $(document).ready( function(){

            $('.dropdown').click( function(event){
                event.stopPropagation();
                $('.dropdown-content').toggle();
            });

            $(document).click( function(){
                $('.dropdown-content').hide();
            });

        });
