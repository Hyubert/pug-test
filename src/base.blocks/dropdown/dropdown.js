var Dropdown = function (el){
  var that = this;
  this.el = el;
  this.state = 'close';

  this.open = function () {
    el.classList.add('dropdown--active');
    this.state = 'open';

  };

  this.close = function () {
    el.classList.remove('dropdown--active');
    this.state = 'close';

  };

  this.toggle = function () {
    if (this.state === 'open') {
      this.close();
    } else {
      this.open();
    }
  }

  return {
    name: 'Dropdown',
    el: this.el,
    state: this.state,
    toggle: this.toggle,
    open: this.open,
    close: this.close,
  }
};

// var dropdown = new Dropdown(document.querySelector('.dropdown'))

// var dropdownList = document.querySelectorAll('.dropdown');
//
// for (var i = 0; i < dropdownList.length; i++) {
//   new Dropdown(dropdownList[i])
// }

var dropdownList = document.querySelectorAll('.dropdown');
var dropdown = [];
var screebWidth = window.innerWidth || document.body.clientWidth;

for (var i = 0; i < dropdownList.length; i++) {
  dropdown.push(new Dropdown(dropdownList[i]))
}

function hundler (e) {
  if (!e.target.classList.contains('dropdown__toggle')) return;
  e.preventDefault();

  for (var j = 0; j < dropdown.length; j++) {
    dropdown[j].close()
  }

  this.toggle();
}


// for (var i = 0; i < dropdown.length; i++) {
//   dropdown[i].el.addEventListener('click', hundler.bind(dropdown[i]))
// }

function mouseoverHundler (e) {
  this.open();
}

function mouseoutHundler (e) {
  this.close();
}

for (var i = 0; i < dropdown.length; i++) {

  if (screebWidth < 768) {
    dropdown[i].el.addEventListener('click', hundler.bind(dropdown[i]))
  } else {
    dropdown[i].el.addEventListener('mouseover', mouseoverHundler.bind(dropdown[i]))
    dropdown[i].el.addEventListener('mouseout', mouseoutHundler.bind(dropdown[i]))
  }

}


// el.addEventListener('click', function (e) {
//   if (e.target.classList.contains('dropdown__toggle')) {
//     e.preventDefault();
//     if (el.classList.contains('dropdown--active')) {
//       that.close()
//     } else {
//       that.open()
//     }
//   };
// })
