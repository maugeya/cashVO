$(() => {
  console.log('js loaded');

  $('.nav-link').on('click', scrollToSection);
  $('.navbar-brand').on('click', scrollToSection);
  $('.icon').on('click', scrollToSection);

  function scrollToSection() {
    const section = $(this).attr('href');
    $('body', 'html').animate(
      {
        scrollTop: $(section).offset().top - 40
      },
      1300
    );
  }

  $(function() {
    $(window)
      .scroll(updateHeader)
      .trigger('scroll');

    function updateHeader() {
      const viewportHeight = $(window).height();
      const scrollTop = $(window).scrollTop();

      if (scrollTop >= viewportHeight) {
        $('nav').addClass('translucent');
        // $('nav').removeClass('topbar');
      } else {
        $('nav').removeClass('translucent');
        // $('nav').addClass('topbar');
      }
    }
  });

  (function() {
    var quotes = $('.quotes');
    var quoteIndex = -1;

    function showNextQuote() {
      ++quoteIndex;
      quotes
        .eq(quoteIndex % quotes.length)
        .fadeIn(2000)
        .delay(2000)
        .fadeOut(2000, showNextQuote);
    }

    showNextQuote();
  })();

  $(function() {
    var imgHeight = '';

    // Define a resize function
    function setImgHeight() {
      imgHeight = $('.carousel .carousel-item.active img').height();
      $('.carousel-img').height(imgHeight);
    }

    // Initialize the height
    // setTimeout to wait until the image is loaded
    setTimeout(function() {
      setImgHeight();
    }, 1000);

    // Recalculate the height if the screen is resized
    $(window).resize(function() {
      setImgHeight();
    });
  });

  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 500);
});
