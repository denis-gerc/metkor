//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) {}

let sliderObjectsMetro = new Swiper('.portfolio-slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.portfolio-slider__pagging',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.portfolio-slider__button-next',
		prevEl: '.portfolio-slider__button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
		},
		560: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		870: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		// 1268: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 30,
		// },
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


let sliderObjects = new Swiper('.objects-slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.objects-slider__pagging',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.objects-slider__button-next',
		prevEl: '.objects-slider__button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
		},
		560: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		870: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		// 1268: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 30,
		// },
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


let sliderPartners = new Swiper('.partners__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 5,
	spaceBetween: 20,
	autoHeight: true,
	speed: 800,
	touchRatio: 1,
	simulateTouch: true,
	loop: true,
	swipe: true,
	//preloadImages: false,
	//lazy: true,

	// Dotts
	// pagination: {
	// 	el: '.slider-quality__pagging',
	// 	clickable: true,
	// },

	// Arrows
	navigation: {
		nextEl: '.more__item_next',
		prevEl: '.more__item_prev'
	},
	// Autoplay
	autoplay: {
		delay: 3000,
	},

	// breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: true,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 15,
			autoHeight: true,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	}

	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});