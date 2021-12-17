/* PERSONAL HOMEPAGE */

console.log('Welcome to my personal homepage!')


// DEBOUNCE
function debounce(func, wait, immediate) {
	let timeout
	return function() {
		let context = this 
        let args = arguments
		let later = function() {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		let callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}

// SCROLLING

function scrolling() {
    let effects = document.querySelector('.effects')
    let facetop = document.querySelector('.facetop')
    let facelinks = document.querySelector('.face-links')
    let posY = window.pageYOffset
    effects.style.transform = `scale(${(posY * 0.0025)})`
    facetop.style.transform = `translateY(${posY}px)`
    facelinks.style.transform = `scale(${posY > 100 ? 1 : 0})`

}

if (document.querySelector('.home')) {
    scrolling()
    window.addEventListener('scroll', debounce(scrolling, 5))
}



// OFFSCREEN MENU
function nav(tgl = 'toggle', cls = 'nav-active') {
    if (document.querySelector(`.${tgl}`)) {
        document.querySelector(`.${tgl}`).addEventListener('click', 
            () => { document.body.classList.toggle(cls) }
        )
    }
} 
nav()



jQuery('toggle').click(function(){
   jQuery(this).toggleClass('active');
});
