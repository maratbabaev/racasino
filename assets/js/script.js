const setVh = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("load", setVh);
window.addEventListener("resize", setVh);

let topSlidersMenuItem = document.querySelectorAll(".top_sliders_menu_item");
let topSlider = document.querySelectorAll(".top_slider");
let contentSlider = document.querySelectorAll(".content_slider_swiper");
let burger = document.querySelector(".burger");
let header = document.querySelector(".header");
let main = document.querySelector(".main");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	header.classList.toggle("active");
	main.classList.toggle("bg-active");
	document.body.classList.toggle("hidden");
});

main.addEventListener("click", () => {
	burger.classList.remove("active");
	header.classList.remove("active");
	main.classList.remove("bg-active");
	document.body.classList.remove("hidden");
});

topSlidersMenuItem[0].classList.add("active");
topSlider[0].classList.add("active");

topSlidersMenuItem.forEach((s, i) => {
	s.addEventListener("click", () => {
		topSlidersMenuItem.forEach((el) => {
			el.classList.remove("active");
		});
		topSlider.forEach((el) => {
			el.classList.remove("active");
		});
		s.classList.add("active");
		topSlider[i].classList.add("active");
	});
	const swiper = new Swiper(topSlider[i], {
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: 5,
		spaceBetween: 7,
	});
});

contentSlider.forEach((s) => {
	let next;
	let prev;
	let slides = s.querySelectorAll(".swiper-slide");
	if (s.querySelector(".swiper-next")) {
		next = s.querySelector(".swiper-next");
		prev = s.querySelector(".swiper-prev");
	}
	let loop = true;
	if (slides.length < 6) {
		loop = false;
	}
	let slider = s.querySelector(".swiper");
	const swiper = new Swiper(slider, {
		loop: loop,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: 6,
		spaceBetween: 8,
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
	});
});
