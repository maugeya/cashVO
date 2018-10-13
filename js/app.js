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
  (function() {
    var btn = document.getElementsByClassName('audioFile');
    var audio = document.querySelector('audio');

    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function() {
        const fileName = this.id;
        if ($(this).hasClass('fa-play')) {
          $(this).removeClass('fa-play');
          $(this).addClass('fa-pause');
          audio.src = `https://s3-eu-west-1.amazonaws.com/cash-vo/${fileName}.mp3`;
          audio.play();
        } else {
          $(this).removeClass('fa-pause');
          $(this).addClass('fa-play');
          audio.pause();
        }
      });
    }
  })();
});
