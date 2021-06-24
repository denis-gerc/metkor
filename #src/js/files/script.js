// Counter //================================================
window.onscroll = function () {
	let windowPos = window.scrollY;
	let counterPos = document.querySelector('.counter').offsetTop;
	let scrollTrigger = counterPos - window.innerHeight + 200;
	if (windowPos >= scrollTrigger) {
		const counters = document.querySelectorAll('.counter__number');
		const speed = 551; // The lower the slower
		​
		counters.forEach(counter => {
			const updateCount = () => {
				const target = +counter.getAttribute('data-target');
				const count = +counter.innerText;
				const inc = target / speed;​
				// Check if target is reached
				if (count < target) {
					counter.innerText = Math.ceil(count + inc);
					setTimeout(updateCount, 100);
				} else {
					counter.innerText = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}
			};​
			updateCount();
		});
	}
}

// Rellax parallax==========================
document.addEventListener('DOMContentLoaded', () => {
	var rellax = new Rellax('.rellax', {
		center: true
	});
});