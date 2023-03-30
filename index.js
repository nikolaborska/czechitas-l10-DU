'use strict';


const startTimer = (e) => {
	e.preventDefault()
	let time = Number(document.querySelector('.time-input').value)

	const secondsElm = document.querySelector('.alarm__seconds')
	const ringElm = document.querySelector('.alarm')

	// pro opakované použití
	ringElm.classList.remove('alarm--ring')

	secondsElm.textContent = String(time)

	const odpocet = () => {
		if (time > 0) {
			time -= 1
			secondsElm.textContent = String(time)
		}
		if (time <= 0) {
			clearInterval(casovac)
			ringElm.classList.add('alarm--ring')
			document.querySelector('audio').play()
		}
	}

	const casovac = setInterval(odpocet, 1000)
}

const formularElm = document.querySelector('.controls')
formularElm.addEventListener('submit', startTimer)