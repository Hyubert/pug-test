var Collapse = function (elem) {

  var el = elem,
      elTitle = el.querySelector('.collapse__title-cont'),
      elContent = el.querySelector('collapse__content');


  function open () {
    el.classList.add('collapse--open');
  }

  function close () {
    el.classList.remove('collapse--open');
  }

  function toggle () {
    if ( el.classList.contains('collapse--open') ) {
      el.classList.remove('collapse--open');
    } else {
      el.classList.add('collapse--open');
    }
  }

  el ? elTitle.addEventListener('click', toggle) : null;

  return {
    open: open,
    close: close,
    toggle: toggle
  }
}


;(function () {

  if (!document.querySelector('.collapse')) return;

  var collapseList = document.querySelectorAll('.collapse')

  for (var i = 0; i < collapseList.length; i++) {
    new Collapse(collapseList[i]);
  }


})();
