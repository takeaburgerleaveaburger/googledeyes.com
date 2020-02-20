var search = document.querySelector('nav form');
var searchInput = search.querySelector('input');
var searchButton = search.querySelector('button');

var tigOle = document.querySelector('#tig-ole-bitties');
var tigOleL = tigOle.querySelector('#lefty');
var tigOleR = tigOle.querySelector('#righty');
var tigOleLPup = tigOleL.querySelector('.pupil');
var tigOleRPup = tigOleR.querySelector('.pupil');

document.addEventListener('mouseenter', eyesFollow);
document.addEventListener('mouseleave', wobbleBaby);

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

function eyesFollow(e) {
	// eyes follow mouse/touch positions code here
}

function wobbleBaby(e) {
	tigOleL.classList.remove('wobble');
	tigOleR.classList.remove('wobble');

	tigOleLPup.classList.remove('wobble');
	tigOleRPup.classList.remove('wobble');

	setTimeout(function() {
		tigOleL.classList.add('wobble');
		tigOleR.classList.add('wobble');

		tigOleLPup.classList.add('wobble');
		tigOleRPup.classList.add('wobble');
	}, 100);
}
}