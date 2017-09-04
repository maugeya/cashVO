$(() => {
  console.log('js loaded');

  $('.nav-link').on('click', scrollToSection);
  $('.navbar-brand').on('click', scrollToSection);

  function scrollToSection () {

    const section = $(this).attr('href');
    $('body', 'html').animate({
      scrollTop: $(section).offset().top
    }, 1300);
  }


  $(function () {
    $(window).scroll(updateHeader).trigger('scroll');

    function updateHeader() {
      const viewportHeight = $(window).height();
      const scrollTop = $(window).scrollTop();

      if(scrollTop >= viewportHeight) {
        $('nav').addClass('translucent');
      } else {
        $('nav').removeClass('translucent');
      }
    }
  });




















});
