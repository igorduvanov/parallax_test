document.addEventListener("mousemove", parallax);

function parallax(event) {
	this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
		const position = shift.getAttribute("value");
		const x = (window.innerWidth - event.pageX * position) / 90;
		const y = (window.innerHeight - event.pageY * position) / 90;

		shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
}

const toggleParallaxVisibility = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			document.querySelectorAll(".parallax-wrap span").forEach((shift) => {
				shift.style.display = "none";
				const initialX = shift.getAttribute("data-initial-x");
				const initialY = shift.getAttribute("data-initial-y");
				shift.style.transform = `translateX(${initialX}px) translateY(${initialY}px)`; // Reset the transform style to initial position
			});
		} else {
			document.querySelectorAll(".parallax-wrap span").forEach((shift) => {
				shift.style.display = "block";
			});
		}
	});
};

const observer = new IntersectionObserver(toggleParallaxVisibility);
observer.observe(document.querySelector(".end_text"));
