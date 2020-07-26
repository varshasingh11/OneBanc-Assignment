var typed = new Typed('.typing', {
  strings: ['REWARDS','SAVINGS','INVESTMENTS','FOREX','ANALYTICS','CARDS','PAYMENTS','LOANS','SUPPORT'],
    loop: true,
  typeSpeed: 30,
    backSpeed: 40,
    backDelay:1000,
});

var $content = $('.menu-content');

function showContent(selector) {
  $content.hide();
  $(selector).show();
}

$('.menu').on('click', '.menu-btn', function(e) {
  showContent(e.currentTarget.hash);
  e.preventDefault();
});

// show '#about' content only on page load (if you want)
showContent('#home');
