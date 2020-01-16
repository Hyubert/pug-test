var Modal = function (el) {
	var modal = el;

	var close = modal.querySelector('.close'),
			content = modal.querySelector('.modal__content');

	function modalOpen () {
		modal.classList.add('modal--open');
	}

	function modalClose () {
		modal.classList.remove('modal--open');
	}

	close ? close.addEventListener('click', function () {
		modalClose();
	}) : null;

	modal.addEventListener('click', function (e) {
		if (!e.target.closest('.modal__dialog')) {
			modalClose();
		}
	});

	return {
		open: modalOpen,
		close: modalClose,
		content: content
	};
}


// data-modal="#id"

;(function () {
	if ( document.querySelector('[data-modal]') == null ) return;

	var modalList = document.querySelectorAll('[data-modal]'),
			currentSelector = '',
			currentModal;

	Array.prototype.forEach.call(modalList, function (item) {
		currentSelector = item.getAttribute('data-modal');
		currentModal = new Modal(document.querySelector(currentSelector));
		item.addEventListener('click', currentModal.open);
	})

})();
