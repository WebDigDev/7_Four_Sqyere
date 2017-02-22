$(function() {

// Попап-форма

  $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
// Появление окна thanks
  $('.call__me').click(function() {
      $('.thanks').addClass('thanks__show');
      return false
  });

  $('.thanks__sh').click(function() {
      $('.thanks').rempveClass('thanks__show');
      return false
  });

// Плавное появление блока по клику

  $('.our__advants-item').click(function() {
    var w = $(window).width();
    if (w < 480) {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open').find('.our__advants-item-description-tetx ').slideUp().end().find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      }  else {
        $(this).addClass('open').find('.our__advants-item-description-tetx ').slideDown().end().find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
    }
  });
// Удаление display:none по resize
  $(window).resize(function(){
    var w = $(window).width();
    if (w > 480) {
      $('.our__advants-item-description-tetx').removeAttr('style');
    }
  });

//Карусель

  $(".owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      // autoHeight: true,
      autoplayTimeout: 10000,
      onInitialized: function() {
        $('.our__results-load1').addClass('loading');
      },
      onChange: function(){
        $('.our__results-load1').removeClass('loading');
        setTimeout(function() {
          $('.our__results-load1').addClass('loading')
        },10);
      }
  });

//Выравнивание блоков по высоте

  if ($(window).width() > 480) {
    $(".price__item-text").equalHeights();
    $(".price__item-title ").equalHeights();
  }

// Scrool to id

    $("a[href*='#top']").mPageScroll2id();

//
//   // Попапы в галерее
//
//   $('.image-popup-vertical-fit').magnificPopup({
// 		type: 'image',
// 		closeOnContentClick: true,
// 		mainClass: 'mfp-img-mobile',
// 		image: {
// 			verticalFit: true
// 		}
//
// 	});
//   // Попап для видео
//
//   $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
// 		disableOn: 200,
// 		type: 'iframe',
// 		mainClass: 'mfp-fade',
// 		removalDelay: 160,
// 		preloader: false,
//
// 		fixedContentPos: false
// 	});
//
//   // Попап для форм
//
// 	$('.popup-with-form').magnificPopup({
// 		type: 'inline',
// 		preloader: false,
// 		focus: '#name',
//
// 		// When elemened is focused, some mobile browsers in some cases zoom in
// 		// It looks not nice, so we disable it:
// 		callbacks: {
// 			beforeOpen: function() {
// 				if($(window).width() < 700) {
// 					this.st.focus = false;
// 				} else {
// 					this.st.focus = '#name';
// 				}
// 			}
// 		}
// 	});
//
//   $('.popup-with-zoom-anim').magnificPopup({
// 		type: 'inline',
//
// 		fixedContentPos: false,
// 		fixedBgPos: true,
//
// 		overflowY: 'auto',
//
// 		closeBtnInside: true,
// 		preloader: false,
//
// 		midClick: true,
// 		removalDelay: 300,
// 		mainClass: 'my-mfp-zoom-in'
// 	});
//
//   // Галерея(из маленькой большую в главном окне)
//
//   $('.popup-product__gallery-box').on('click', '.popup-product__gallery-item:not(.active)', function() {
//        var imgPath = $(this).children('img').attr('src');
//        var oldImage = $('.popup-product__gallery-big-photo img');
//        var newImage = $('<img src="' + imgPath + '">');
//        newImage.hide();
//        $('.popup-product__gallery-big-photo').append(newImage);
//        newImage.fadeIn(600);
//        oldImage.fadeOut(600, function() {
//            $(this).remove();
//        });
//        $(this).addClass('active').siblings().removeClass('active');
//    });
//    $('.popup-product__gallery-item:first').click();
//
//
//     //Карусель
//
//     $(".owl-carousel").owlCarousel({
//         loop: true,
//         items: 1,
//         autoplay: true,
//     });
//
//     //Scrool to id
//
//     $("a[href*='#up']").mPageScroll2id();
//
//     // Анимация при скроле
//
//     var w = $(window).width();
//       if (w > 768) {
//               $(".quality__item").animated("fadeInUp");
//       };
//
//       // Появление прокрутки вверх при скролле
//       $(function(f){
//         var element = f('.footer__up');
//         f(window).scroll(function(){
//           element['fade'+ (f(this).scrollTop() > 2000 ? 'In': 'Out')](200);
//       });
//   });
//
//     // Табы
//
//     $('.arwe2016__tub-btn').on('click', 'button:not(.active)', function() {
//         $(this)
//             .addClass('active').siblings().removeClass('active')
//             .closest('.arwe2016').find('.arwe2016__tub-item ').removeClass('active').eq($(this).index()).addClass('active');
//     });
//
// 		//Мобильное меню
//
//     $('.header__top-menu-btn ').click(function() {
//         $('.header__top-menu').toggleClass('header__top-menu-active');
// 				return false
//     });
//
//     $(document).on('click', function(e) {
//         if (!$(e.target).closest(".header__top-menu").length) {
//           $('.header__top-menu').removeClass('header__top-menu-active');
//
//         }
//         e.stopPropagation();
//
//     });
//
//
//     $('.close ').click(function() {
//         $('.header__top-menu').removeClass('header__top-menu-active');
//         return false
//     });
//
//
//     // Телефон в хедере
//
//
//     $('.header__contacts-link  ').click(function() {
//         $('.header__contacts-mail').toggleClass('header__contacts-mail-visible');
//         return false
//     });
//
//     $(document).on('click', function(e) {
//         if (!$(e.target).closest(".header__contacts-mail").length) {
//           $('.header__contacts-mail').removeClass('header__contacts-mail-visible');
//
//         }
//         e.stopPropagation();
//
//     });
//
//     //Стилизация форм
//
//     $('input, select').styler();
//
//     //Выравнивание блоков по высоте
//
//     // $(".price__item-text").equalHeights();
//     // $(".price__item-title ").equalHeights();
//     // $(".news__text h4").equalHeights();
//     // $(".news__text p").equalHeights();
//     // $(".links__item span").equalHeights();
//
//     //popup
//
//     // $('.popup-with-move-anim').magnificPopup({
//     // 	type: 'inline',
//     //
//     // 	fixedContentPos: false,
//     // 	fixedBgPos: true,
//     //
//     // 	overflowY: 'auto',
//     //
//     // 	closeBtnInside: true,
//     // 	preloader: false,
//     //
//     // 	midClick: true,
//     // 	removalDelay: 300,
//     // 	mainClass: 'my-mfp-slide-bottom'
//     // });
//
//     // $("a[href=#callback]").click(function() {
//     // 	$("#callback .formname").val($(this).data("form"));
//     // })
//
//     //SVG Fallback
//     if (!Modernizr.svg) {
//         $("img[src*='svg']").attr("src", function() {
//             return $(this).attr("src").replace(".svg", ".png");
//         });
//     };
//
//     //E-mail Ajax Send
//     //Documentation & Example: https://github.com/agragregra/uniMail
//     $("#form").submit(function() { //Change
//         var th = $(this);
//         $.ajax({
//             type: "POST",
//             url: "mail.php", //Change
//             data: th.serialize()
//         }).done(function() {
//             $(".success").addClass("visible");
//             setTimeout(function() {
//                 // Done Functions
//                 th.trigger("reset");
//                 $(".success").removeClass("visible");
//                 $.magnificPopup.close();
//             }, 3000);
//         });
//         return false;
//     });
//
//     //Chrome Smooth Scroll
//     try {
//         $.browserSelector();
//         if ($("html").hasClass("chrome")) {
//             $.smoothScroll();
//         }
//     } catch (err) {
//
//     };
//
//     $("img, a").on("dragstart", function(event) {
//         event.preventDefault();
//     });
//
// });
//
//
// /*
// var form = popup.querySelector("form");
// */
//
//
//     //Стилизация форм
//
//
//
//
//     // Ренджи
//
//
//     // $( function() {
//     //     $( "#slider-range" ).slider({
//     //       range: true,
//     //       min: 0,
//     //       max: 500,
//     //       values: [ 75, 300 ],
//     //       slide: function( event, ui ) {
//     //         $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//     //       }
//     //     });
//     //     $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//     //       " - $" + $( "#slider-range" ).slider( "values", 1 ) );
 });
