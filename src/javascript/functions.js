
/// <summary>Removes HTML brackets from a string.</summary>
/// <param name="s" type="Number">The string to filter.</param>
/// <returns type="string">The string without HTML.</returns>
export function sanitiseHtml(s) {
  return s.replace(/(&nbsp;|<([^>]+)>)/ig, "");
}

// JS smoothscroll function
$(function () {
  $('.js-scroll-trigger').click(function () {
    var id = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(id).offset().top
    }, 1000);

    // Prevent default behavior of link
    return false;
  });
})

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#sideNav'
});

// Adds scolled class to navbar when scrolled past view height
$(function () {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    window.pageYOffset > $(window).height() ? navbar.classList.add("scrolled") : navbar.classList.remove("scrolled");
  });
});

// Checks to see if the navbar is exapnded and collapses it when the screen is scrolled
$(function () {
  window.addEventListener('scroll', () => {
      $('.navbar-collapse').collapse('hide');
  });
});