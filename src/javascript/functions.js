
export function  sanitiseHtml(s) {
    /// <summary>Removes HTML brackets from a string.</summary>
    /// <param name="s" type="Number">The string to filter.</param>
    /// <returns type="string">The string without HTML.</returns>
    return s.replace(/(&nbsp;|<([^>]+)>)/ig, "");
}

$(function() {
    $('.js-scroll-trigger').click(function() {
      var id = $(this).attr('href');
      $('html,body').animate({
        scrollTop: $(id).offset().top
      }, 1000);

      // Prevent default behavior of link
      return false;
    });
  })

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
(jQuery); 

$(function() {
  const scrollUp = document.querySelector('.scrollUp');

  window.addEventListener('scroll', () => {
    window.pageYOffset > 100 ? scrollUp.classList.add("active") : scrollUp.classList.remove("active");
  });
});