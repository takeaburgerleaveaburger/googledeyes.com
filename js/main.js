var search = document.querySelector('nav form');
var searchInput = search.querySelector('input');
var searchButton = search.querySelector('button');

var tigOle = document.querySelector('#tig-ole-bitties');
var tigOleL = tigOle.querySelector('#lefty');
var tigOleR = tigOle.querySelector('#righty');

searchButton.addEventListener('click', keepFocus);
search.addEventListener('mouseleave', removeFocus);

function keepFocus(e) {

	if(!searchInput.classList.contains('focused')) {
		searchInput.classList.add('focused');
	}

}

function removeFocus(e) {

	if(e.target.nodeName.toLowerCase() == 'form') {
		searchInput.classList.remove('focused');
	}
	
}