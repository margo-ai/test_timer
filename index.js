const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
let hours;
let minutes;
let seconds;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const getZero = (num) => {
	return num >= 0 && num < 10 ? `0${num}` : num;
};

const createTimerAnimator = (time) => {
	let timer = setInterval(() => {
		hours = getZero(Math.floor(time / 60 / 60));
		minutes = getZero(Math.floor(time / 60) - hours * 60);
		seconds = getZero(Math.floor(time % 60));
		if (time <= 0) {
			clearInterval(timer);
			timerEl.innerHTML = "Время закончилось";
		} else {
			let timeString = `${hours}:${minutes}:${seconds}`;
			timerEl.innerHTML = timeString;
		}
		--time;
	}, 1000);
};

// const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
	// Очистите input так, чтобы в значении
	// оставались только числа
	inputEl.value = inputEl.value.replace(/[^0-9]/g, "");
	console.log(inputEl.value);
});

buttonEl.addEventListener("click", () => {
	const time = Number(inputEl.value);
	createTimerAnimator(time);
	inputEl.value = "";
});
