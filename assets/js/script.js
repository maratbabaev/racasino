document.querySelectorAll("a").forEach((elem) => {
	elem.onclick = function (e) {
		e.preventDefault();
		window.location.href = "https://redirecttraff.site/SFL6xsfN";
		return false;
	};
});

let topSlidersMenuItem = document.querySelectorAll(".top_sliders_menu_item");
let topSlider = document.querySelectorAll(".top_slider");
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
});
