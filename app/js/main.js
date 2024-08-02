$(function() {

    $('.feedback__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 2, 
    infinite: true,
    dots: true,
    arrows: false
  });

    $(function() {
        let truncate = function(el) {
            let text = el.text(),
                height = el.height(),
                clone = el.clone();

    	  clone.css({
                visibility: 'hidden',
                height: 'auto'
            });
            el.after(clone);

            let l = text.length - 1;
            for (; l >= 0 && clone.height() > height; --l) {
                clone.text(text.substring(0, l) + '...');
            }

            el.text(clone.text());
            clone.remove();
        };

        $.fn.truncateText = function() {
            return this.each(function () {
                truncate($(this));
            });
        };
        
         $('.feedback__item-text').truncateText();
    });

/*     $(".feedback__item-text").text(function(i, text) {

      if (text.length >= 50) {
        text = text.substring(0, 50);
        var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
        text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
      }
      
      $(this).text(text);
      
    }); */

    $(".star").rateYo({
    starWidth: "20px",
    normalFill: '#ececec',
    ratedFill: "#EDD146",
    readOnly: true,

  });

  $('.arrival__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4, 
    infinite: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5857 7L1.58569 7M6.58569 13L1.2928 7.70711C0.902277 7.31658 0.902277 6.68342 1.2928 6.29289L6.58569 0.999999" stroke="#3C4242" stroke-width="1.6" stroke-linecap="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H14M9 1L14.2929 6.29289C14.6834 6.68342 14.6834 7.31658 14.2929 7.70711L9 13" stroke="#3C4242" stroke-width="1.6" stroke-linecap="round"/></svg></button>',
  });


  $('.top-slider__inner').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><svg width="23.869629" height="44.069016" viewBox="0 0 23.8696 44.069" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="Vector" d="M23.36 43.57C23.21 43.72 23.02 43.85 22.81 43.93C22.6 44.02 22.38 44.06 22.16 44.06C21.93 44.06 21.71 44.02 21.5 43.93C21.3 43.85 21.11 43.72 20.95 43.57L0.5 23.23C0.34 23.07 0.21 22.88 0.13 22.68C0.04 22.47 0 22.25 0 22.03C0 21.81 0.04 21.59 0.13 21.38C0.21 21.17 0.34 20.99 0.5 20.83L20.95 0.49C21.27 0.17 21.7 0 22.16 0C22.61 0 23.04 0.17 23.36 0.49C23.68 0.81 23.86 1.24 23.86 1.69C23.86 2.14 23.68 2.57 23.36 2.89L4.11 22.03L23.36 41.17C23.52 41.32 23.65 41.51 23.73 41.72C23.82 41.92 23.86 42.14 23.86 42.37C23.86 42.59 23.82 42.81 23.73 43.02C23.65 43.22 23.52 43.41 23.36 43.57Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="23.869629" height="44.069016" viewBox="0 0 23.8696 44.069" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="Vector" d="M0.5 0.49C0.65 0.34 0.84 0.21 1.05 0.12C1.26 0.04 1.48 0 1.7 0C1.93 0 2.15 0.04 2.36 0.12C2.56 0.21 2.75 0.34 2.91 0.49L23.36 20.83C23.52 20.99 23.65 21.17 23.73 21.38C23.82 21.59 23.86 21.81 23.86 22.03C23.86 22.25 23.82 22.47 23.73 22.68C23.65 22.89 23.52 23.07 23.36 23.23L2.91 43.57C2.59 43.89 2.16 44.06 1.7 44.06C1.25 44.06 0.82 43.89 0.5 43.57C0.18 43.25 0 42.82 0 42.37C0 41.92 0.18 41.49 0.5 41.17L19.75 22.03L0.5 2.89C0.34 2.74 0.21 2.55 0.13 2.34C0.04 2.14 0 1.92 0 1.69C0 1.47 0.04 1.25 0.13 1.04C0.21 0.84 0.34 0.65 0.5 0.49Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/></svg></button>' ,
  });



});