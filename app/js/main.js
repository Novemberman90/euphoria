$(function() {
  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('html').toggleClass('lock');
  });

    $(document).on('click', function(e) {
      // Проверяем, что клик не произошел по меню или кнопке
      if (!$(e.target).closest('.menu__list, .menu__btn').length) {
        $('.menu__list').removeClass('menu__list--active');
        $('.menu__btn').removeClass('menu__btn--active');
        $('html').removeClass('lock');
      }
    });
  /* my-account */

  //order-details
    $('.active-order__btn').on('click', function(e) {
      e.preventDefault();
      $('.order-details').show();
      $('.my-orders').hide();
      const breadcrumb = $(this).data('breadcrumb');
    $('.breadcrumbs__link-curent').text(breadcrumb);
    });
    $('.order-details__title').on('click', function(e) {
      e.preventDefault();
      $('.order-details').hide();
      $('.my-orders').show();
      const breadcrumb = $(this).data('breadcrumb');
    $('.breadcrumbs__link-curent').text(breadcrumb);
    });

    $('.order-details__delet-btn').on('click', function() {
      $(this).closest('.order-details__item-cart').remove();
    });


    // my-orders-tabs 
    $('.my-orders-tabs__item').on('click', function(e) {
      e.preventDefault();
      $('.my-orders-tabs__item').removeClass('my-orders-tabs__item--active');
      $(this).addClass('my-orders-tabs__item--active');

      $('.my-orders-tabs__content-item').removeClass('my-orders-tabs__content-item--active');
      $($(this).attr('href')).addClass('my-orders-tabs__content-item--active');
    });

  //wishlist 

  function updateWishlist() {
  const wishlistItems = $('.wishlist__item');

  if (wishlistItems.length === 0) {
    $('.wishlist-empty').show();
    $('.my-account__fotter').show();
    $('.account-tabs__link.account-tabs__link--active').toggleClass('account-tabs__show-footer');
  } else {
    $('.wishlist-empty').hide();
    $('.my-account__fotter').hide();
    $('.account-tabs__link').removeClass('account-tabs__show-footer');
  }
  }
  $('.wishlist__delet-btn').on('click', function() {
    $(this).closest('.wishlist__item').remove();
    updateWishlist();
  });
  updateWishlist();
  
  // tabs item 
  function showMyAccontFooter(element) {

    if(element.hasClass('account-tabs__link')&&element.hasClass('account-tabs__link--active')&&element.hasClass('account-tabs__show-footer')) {
      $('.my-account__fotter').show();
      } else {
        $('.my-account__fotter').hide();
      }
  }

  $('.account-tabs__link').on('click', function(e) {
    e.preventDefault();
    $('.account-tabs__link').removeClass('account-tabs__link--active');
    $(this).addClass('account-tabs__link--active');

    $('.account-tabs__content-item').removeClass('account-tabs__content-item--active');
    $($(this).attr('href')).addClass('account-tabs__content-item--active');

    const breadcrumb = $(this).data('breadcrumb');
    $('.breadcrumbs__link-curent').text(breadcrumb);

    

    let clickedElement = $(this);
    showMyAccontFooter(clickedElement);
  });
  showMyAccontFooter($('.account-tabs__link.account-tabs__link--active'));



  // My Info change section
  $('.personal-adress__title-link').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.personal-info').hide().siblings().show();

    const breadcrumb = $(this).data('breadcrumb');
    $('.breadcrumbs__link-curent').text(breadcrumb);
  });
  $('.delivery-person__btn').on('click', function() {
    $(this).closest('.personal-info').hide().siblings().show();
    
    const breadcrumb = $(this).data('breadcrumb');
    $('.breadcrumbs__link-curent').text(breadcrumb);
  });

  // personal-adress
    $(function (params) {
      let currentlyEditing = null;
      $('.personal-info__btn').on('click', function() {
          const $input = $(this).siblings('input');
          
          if ($input.prop('readonly')) {
            // Если input readonly, делаем его редактируемым
            $input.prop('readonly', false).trigger( "focus" );
            $input.css('background-color', '#fff');
            $(this).text('Save'); // Меняем текст кнопки на "Save"
            currentlyEditing = $input;
          } else {
            // Если input редактируемый, возвращаем обратно readonly
            $input.prop('readonly', true);
            $input.css('background-color', '#f5f5f5');
            $(this).text('Change'); // Возвращаем текст кнопки на "Change"
            currentlyEditing = null;
          }
        });
        
        $(document).on('click', function(event) {
        if (currentlyEditing && !$(event.target).closest('.personal-info__item').length) {
        // Если клик был вне блока с input, блокируем поле
        currentlyEditing.prop('readonly', true);
        currentlyEditing.css('background-color', '#f5f5f5');
        currentlyEditing.siblings('.personal-info__btn').text('Change');
        currentlyEditing = null;
        }
       });
    });
  

  
  
  /* sing up / modal */
  /* email */
  $(function(params) {
    const $emailInput = $('#email');
    const $errorMessage = $('.modal__user-error-email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    $emailInput.on('blur', function (params) {
      const emailValue = $emailInput.val().trim();
      if (emailValue === '') {
        $errorMessage.show();
      } else if (!emailPattern.test(emailValue)) {
        $errorMessage.show();
      } else {
        $errorMessage.hide();
      }
    });
  });

  /* login / modal */
/* security-code */

  $('.modal__password-security').on('click', function() {
    const passwordField = $('#password-login, #new-pass');
    const passwordFieldType = passwordField.attr('type');

     // Если тип поля пароль, меняем его на текст для показа
    if (passwordFieldType === 'password') {
      passwordField.attr('type', 'text');
      $('.modal__password-hide').hide();
      $('.modal__password-show').show();
       // Меняем иконку на "глаз с чертой"
    } else {
      passwordField.attr('type', 'password');
      $('.modal__password-hide').show();
      $('.modal__password-show').hide();
       // Меняем иконку обратно на обычный глаз
    }
  });

  /* checkout page */
  /* security-code */
  $('.payment-method__security-code-open').hide();
    $('.payment-method__security-code-box').on('click', function() {
      const passwordField = $('#security-code');
      const passwordFieldType = passwordField.attr('type');

      // Если тип поля пароль, меняем его на текст для показа
      if (passwordFieldType === 'password') {
        passwordField.attr('type', 'text');
        $('.payment-method__security-code-close').hide();
        $('.payment-method__security-code-open').show();
        // Меняем иконку на "глаз с чертой"
      } else {
        passwordField.attr('type', 'password');
        $('.payment-method__security-code-open').hide();
        $('.payment-method__security-code-close').show();
        // Меняем иконку обратно на обычный глаз
      }
  });

  // payment-method item
  $('.payment-method__content').hide();

    $('input[type="radio"]:checked').each(function() {
      if($(this).prop('checked')) {
        $(this).closest('.payment-method__item').find('.payment-method__content').show();
      }
    });

   $('.payment-method__radio').on('change', function () {
    $('.payment-method__content').slideUp(300);    

     $(this).closest('.payment-method__item').find('.payment-method__content').slideDown(300);
   });


  /* card page */
  //Quantity

  $(function() {
    function updateSubtotal(card) {
     let $card = $(card);
     let price =  parseFloat($card.find('.card-product__cost').data('cost'));
     let quantity = parseInt($card.find('.card-product__quantity-input input').val(), 10);

        if (isNaN(price) || isNaN(quantity)) {
          $card.find('.card-product__subtotal').text('$0.00');
          return;
        }

     let subtotal = price * quantity;
  
     $card.find('.card-product__subtotal').text('$' + subtotal.toFixed(2));

     // После обновления отдельной карточки, обновляем общую сумму
     updateTotal();
   }

  function updateTotal() {
    let total = 0;
    let discount = 5; // скидка

   $('.card-product__item').each(function() {
    let subTotalText = $(this).find('.card-product__subtotal').text();
    let subtotal = parseFloat(subTotalText.replace('$', ''));

        if(!isNaN(subtotal)) {
          total += subtotal;
        }
     });

    let discountTotal = total - discount; // Применяем фиксированную скидку
    if (discountTotal < 0) {
      discountTotal = 0; // Не допускаем отрицательную сумму
    }

    if ($('.card-product__item').length === 0) {
      // Если карточек нет, ставим обе суммы в $0.00
      $('.cart-footer__subtotal').text('$0.00');
      $('.cart-footer__grandtotal').text('$0.00');
    } else {
      // Иначе выводим рассчитанные значения
      $('.cart-footer__subtotal').text('$' + discountTotal.toFixed(2));
      $('.cart-footer__grandtotal').text('$' + total.toFixed(2));
    }

   /*  $('.cart-footer__subtotal').text('$' + discountTotal.toFixed(2));
    $('.cart-footer__grandtotal').text('$' + total.toFixed(2)); */
  

     // Обновление суммы при изменении количества
    }
    
    $('.card-product__quantity-input input').on('input', function () {
    updateSubtotal($(this).closest('.card-product__item'));
    });
  
   // Обновление суммы при клике на кнопки плюс/минус
   $('.jq-number__spin').on('click', function () {
    let $input = $(this).siblings('.jq-number__field').find('input');
    let currentValue = parseInt($input.val(), 10);
  
    let minValue = parseInt($input.attr('min'), 10);
    let maxValue = parseInt($input.attr('max'), 10);
  
    if ($(this).hasClass('plus') && currentValue < maxValue) {
      $input.val(currentValue);
    } else if ($(this).hasClass('minus') && currentValue > minValue) {
      $input.val(currentValue - 1);
    }

    updateSubtotal($(this).closest('.card-product__item'));
   });

   // При загрузке пересчитываю стоимость
   $('.card-product__item').each(function() {
    updateSubtotal($(this));
   });

     // Обработчик удаления карточки
  $('.card-product__action').on('click', function() {
    $(this).closest('.card-product__item').remove(); // Удаляем карточку
    updateTotal(); // Пересчитываем общую сумму
  });

  // Инициализация суммы для всех карточек при загрузке страницы
  $('.card-product__item').each(function() {
    updateSubtotal(this);
  });

     // Рассчитываем общую сумму при загрузке страницы
    updateTotal();
  });


    $('.card-product__quantity-input, .delivery-form__postal-select, .header-register__langauge-select').styler();


  /* product-page */
    $('.product-tabs__top-item').on('click', function(e) {
      e.preventDefault();
      $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
      $(this).addClass('product-tabs__top-item--active');

      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });

    $('.product-slide__thumb').slick({
      asNavFor: '.product-slide__big',
      infinite: false,
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
    });
    $('.product-slide__big').slick({
      asNavFor: '.product-slide__thumb',
      infinite: false,
      draggable: false,
      fade: true,
      appendArrows: '.product-slide__arrws',
      nextArrow:'<button type="button" class="slick-next"><svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.20263 5.31578C7.9444 5.51267 7.57545 5.46294 7.37856 5.2047L4.44463 1.35659C4.37158 1.30823 4.26493 1.30823 4.19189 1.35659L1.25796 5.2047C1.06107 5.46294 0.692119 5.51267 0.433882 5.31578C0.175646 5.11889 0.125913 4.74994 0.322801 4.4917L3.26686 0.630317C3.30121 0.585256 3.3532 0.522894 3.42522 0.463225C3.93831 0.0380759 4.6982 0.0380759 5.2113 0.463225C5.28331 0.522894 5.33531 0.585256 5.36966 0.630317L8.31372 4.4917C8.5106 4.74994 8.46087 5.11889 8.20263 5.31578Z" fill=""/></svg></button>' ,
      prevArrow:'<button type="button" class="slick-prev"><svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.20263 5.31578C7.9444 5.51267 7.57545 5.46294 7.37856 5.2047L4.44463 1.35659C4.37158 1.30823 4.26493 1.30823 4.19189 1.35659L1.25796 5.2047C1.06107 5.46294 0.692119 5.51267 0.433882 5.31578C0.175646 5.11889 0.125913 4.74994 0.322801 4.4917L3.26686 0.630317C3.30121 0.585256 3.3532 0.522894 3.42522 0.463225C3.93831 0.0380759 4.6982 0.0380759 5.2113 0.463225C5.28331 0.522894 5.33531 0.585256 5.36966 0.630317L8.31372 4.4917C8.5106 4.74994 8.46087 5.11889 8.20263 5.31578Z" fill=""/></svg></button>',
    });

  /* shop filters */

    $('.footer-categories__list').hide();
    $('.footer-categories__title').on('click', function() {
      $(this).next().slideToggle();
      $(this).toggleClass('footer-categories__title--active');
     /*  $('.menu__list.footer-categories__list').toggleClass('footer-categories__list--active'); */
    });

    $('.filter-price__title-box, .filter-color__title-box, .filter-size__title-box, .filter-style__title-box').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('filter__title-box--hidden');
    });

    $('.filter__header').on('click', function() {
      $('.filter-category, .filter-price__form, .filter-color__form, .filter-size__form, .filter-style__list').slideToggle();

      $('.filter-price__title-box, .filter-color__title-box, .filter-size__title-box, .filter-style__title-box').toggleClass('filter__title-box--hidden');
    });


    $('.shop-content__filter-btn').on('click', function() {
      $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active')
        $(this).addClass('shop-content__filter-btn--active')
    });

    $('.button-new').on('click', function () {
      $('.product-item').addClass('product-item--list');
      $('.shop-content__inner').addClass('shop-content__nogrid');
    });

    $('.feedback__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 2, 
    infinite: true,
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
 
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });

    $('.filter-price__input').ionRangeSlider({
    type: "double",
     prefix: "$",
     onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
     },
     onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
      /* $('.filter-price__from').text(data.from) - так я указываю атрибут у класса с какого эоемента нужно принимать значение */
     }
  });

  /* index */

    $(".star").rateYo({
    starWidth: "20px",
    normalFill: '#ececec',
    ratedFill: "#EDD146",
    readOnly: true,

  });

  $('.arrival__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 3, 
    infinite: true,
    /* centerMode: true, */
   /*  variableWidth: true, */
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5857 7L1.58569 7M6.58569 13L1.2928 7.70711C0.902277 7.31658 0.902277 6.68342 1.2928 6.29289L6.58569 0.999999" stroke="#3C4242" stroke-width="1.6" stroke-linecap="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H14M9 1L14.2929 6.29289C14.6834 6.68342 14.6834 7.31658 14.2929 7.70711L9 13" stroke="#3C4242" stroke-width="1.6" stroke-linecap="round"/></svg></button>',
      responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
/*     {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }, */
    {
      breakpoint: 861,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 478,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
  });


  $('.top-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><svg width="23.869629" height="44.069016" viewBox="0 0 23.8696 44.069" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="Vector" d="M23.36 43.57C23.21 43.72 23.02 43.85 22.81 43.93C22.6 44.02 22.38 44.06 22.16 44.06C21.93 44.06 21.71 44.02 21.5 43.93C21.3 43.85 21.11 43.72 20.95 43.57L0.5 23.23C0.34 23.07 0.21 22.88 0.13 22.68C0.04 22.47 0 22.25 0 22.03C0 21.81 0.04 21.59 0.13 21.38C0.21 21.17 0.34 20.99 0.5 20.83L20.95 0.49C21.27 0.17 21.7 0 22.16 0C22.61 0 23.04 0.17 23.36 0.49C23.68 0.81 23.86 1.24 23.86 1.69C23.86 2.14 23.68 2.57 23.36 2.89L4.11 22.03L23.36 41.17C23.52 41.32 23.65 41.51 23.73 41.72C23.82 41.92 23.86 42.14 23.86 42.37C23.86 42.59 23.82 42.81 23.73 43.02C23.65 43.22 23.52 43.41 23.36 43.57Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="23.869629" height="44.069016" viewBox="0 0 23.8696 44.069" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="Vector" d="M0.5 0.49C0.65 0.34 0.84 0.21 1.05 0.12C1.26 0.04 1.48 0 1.7 0C1.93 0 2.15 0.04 2.36 0.12C2.56 0.21 2.75 0.34 2.91 0.49L23.36 20.83C23.52 20.99 23.65 21.17 23.73 21.38C23.82 21.59 23.86 21.81 23.86 22.03C23.86 22.25 23.82 22.47 23.73 22.68C23.65 22.89 23.52 23.07 23.36 23.23L2.91 43.57C2.59 43.89 2.16 44.06 1.7 44.06C1.25 44.06 0.82 43.89 0.5 43.57C0.18 43.25 0 42.82 0 42.37C0 41.92 0.18 41.49 0.5 41.17L19.75 22.03L0.5 2.89C0.34 2.74 0.21 2.55 0.13 2.34C0.04 2.14 0 1.92 0 1.69C0 1.47 0.04 1.25 0.13 1.04C0.21 0.84 0.34 0.65 0.5 0.49Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/></svg></button>' ,
  });
  
  /* Автоматический отступ main от header */
  $(function (params) {
    function mainMargin(){
      // Вычисляем высоту header
      const headerHeight = $('.header').outerHeight();

      // Применяю оступ для main равный высоте header
      $('.main').css('margin-top', headerHeight + 'px');
    }
    // вызываю функцию при загрузке страницы
    $(document).ready(function (params) {
      mainMargin();
    });
    
    // обновляю отступ при изминеии окна
    $(window).resize(function () {
      mainMargin();
    });
  });
});

/* шаблон для создания карточек */
  /*   class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
          this.src = src;
          this.alt = alt;
          this.title = title;
          this.descr = descr;
          this.price = price;
          this.parent = document.querySelector(parentSelector);
          this.classes = classes;
        }

        render() {
          const element = document.createElement('div');
          
          if(this.classes.length === 0) {
            this.element = $('.product__item');
            element.classList.add(this.element);
          } else {
            this.classes.forEach(className => element.classList.add(className));
          }
          element.innerHTML = 
              `<button class="product__item-btn" type="submit"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.99486 4.93014C8.49535 3.18262 5.99481 2.71255 4.11602 4.31275C2.23723 5.91295 1.97273 8.5884 3.44815 10.481C4.67486 12.0545 8.38733 15.3732 9.60407 16.4474C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4474C11.6024 15.3732 15.3149 12.0545 16.5416 10.481C18.017 8.5884 17.7848 5.89611 15.8737 4.31275C13.9626 2.72938 11.4944 3.18262 9.99486 4.93014Z"
              stroke="#807D7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg></button>
          <img class="product__img" src=${this.src} alt=${this.alt}>
          <div class="product__content">
            <div class="product__content-box">
              <h4 class="product__content-title">${this.title}</h4>
              <p class="product__content-text">${this.descr}</p>
            </div>
            <p class="product__price">$ ${this.price}</p>
          </div>`
          this.parent.append(element);
        }
      }

    new MenuCard(
        "images/limelight-3.avif",
        "woman clothing",
        'Levender Hoodie with ....',
        'Nike’s  Brand',
        119,
        '.shop-content__inner',
        'product__item',
    ).render(); */
