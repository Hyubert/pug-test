(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var circleAnim = function () {
  if (!document.getElementById('how-work-section')) return;

  var howWorkSection = document.getElementById('how-work-section');

  var waypoint = new Waypoint({
    element: document.getElementById('how-work-section'),
    offset: '50%',
    handler: function(direction) {
      if (direction === 'down') {

        // do something
        var howWorkCartList = document.querySelectorAll('.cart-how-work');

        for (var i = 0; i < howWorkCartList.length; i++) {
          animateSvgCircle(howWorkCartList[i], i);
        }

        this.enabled = false;
      }
    }
  })


  function animateSvgCircle (el, i) {
    var elem = el,
        circle = elem.querySelector('.cart-how-work__circle');

    var curentValue = +elem.getAttribute('data-dashoffset'),
        defaultValue = 314;

    // var accelerator = (i+1) * 2;

    var animateLoop = setInterval(function () {

      circle.setAttribute('stroke-dashoffset', --defaultValue);

      if (defaultValue <= curentValue) { clearInterval(animateLoop);}
    }, 1000 / 480); // 2.08ms
    // }, 1000 / 60);

    // function step(time) {
    //
    //   setTimeout(function() {
    //     if (defaultValue >= curentValue) {
    //       requestAnimationFrame(step);
    //     }
    //     // Drawing code goes here
    //     circle.setAttribute('stroke-dashoffset', defaultValue--);
    //   }, 1000 / 60);
    //
    // }
    // requestAnimationFrame(step);

  }

};

window.addEventListener('load', circleAnim);
