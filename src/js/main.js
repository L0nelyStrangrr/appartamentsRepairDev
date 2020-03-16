    var swiper = new Swiper('.swiper-container.swiper1', {
      navigation: {
        nextEl: '#tab1 .swiper-button-next',
        prevEl: '#tab1 .swiper-button-prev',
      },
    });

    var swiper2 = new Swiper('.swiper-container.swiper2', {
      navigation: {
        nextEl: '#tab2 .swiper-button-next',
        prevEl: '#tab2 .swiper-button-prev',
      },
    });

    var swiper3 = new Swiper('.swiper-container.swiper3', {
      navigation: {
        nextEl: '#tab3 .swiper-button-next',
        prevEl: '#tab3 .swiper-button-prev',
      },
    });

  

  document.querySelector('.calculator__slider').firstElementChild.addEventListener('click', function(){
    document.querySelector('.calculator__slider').querySelector('span').innerHTML--
    if (+document.querySelector('.calculator__slider').querySelector('span').innerHTML < 1) {
      document.querySelector('.calculator__slider').querySelector('span').innerHTML = 1;
    }
  })

  document.querySelector('.calculator__slider').lastElementChild.addEventListener('click', function(){
    document.querySelector('.calculator__slider').querySelector('span').innerHTML++
  })

    $('.faq__opener').on('click', function(){
      var opener = $(this).children('div')
      console.log(opener)
      if (opener.html() == "+") {
        opener.html('-');
      } else {
        opener.html('+');
      }
      opener.toggleClass('active')
      // opener.toggle(function() {
      //   opener.html('+')}, function() {
      //     opener.html('-')})
      $(this).closest('.faq__question').find('.faq__answer').toggleClass('faq__answer-active')
    })

    $(document).ready(function() {
      $('.header__nav a').on("click", function(e) {
          e.preventDefault();
          var hrefid = $(this).attr('href'),
              top = $(hrefid).offset().top;
  
          $('body, html').animate({scrollTop: top}, 1200);    
      });
  });

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 600) {
          document.querySelector('.header__bottom').classList.add('header__bottom-sticky');
         }
        else if (window.pageYOffset < 600) {
          document.querySelector('.header__bottom').classList.remove('header__bottom-sticky');
          }})

          $(document).on('click', '.portfolio__category', function(e){
            e.preventDefault();
            var tabId = $(this).attr('href');
            $(this).addClass('active');
            $(tabId).show(400);
            $(tabId).siblings('.tab').hide(400);
        });

    