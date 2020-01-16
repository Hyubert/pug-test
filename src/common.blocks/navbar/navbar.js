;(function () {
  if (!document.querySelector('.navbar')) return;

  var navbar = document.querySelector('.navbar'),
      nav = navbar.querySelector('.nav');
  var humburger = new Humburger('.humburger');


  humburger.el.addEventListener('click', function () {
    if ( nav.classList.contains('nav--active') ) {
      nav.classList.remove('nav--active');
    } else {
      nav.classList.add('nav--active');
    }
  })
})();
