function Humburger (el) {
	var el = document.querySelector(el) ||  document.querySelector('.humburger'),
			state = 'Inactive';

	function open () {
		el.classList.add('humburger--active');
		state = 'Active';
	}

	function close () {
		el.classList.remove('humburger--active');
		state = 'Inactive';
	}

	el ? el.addEventListener('click', function () {
		el.classList.toggle('humburger--active');
	}) : console.log('Error: "Element humburger not found"');

	function getState () {
		return state;
	}

	return {
		el: el,
		open: open,
		close: close,
		state: getState
	}
};
