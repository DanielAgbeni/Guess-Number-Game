const overlay = document.querySelector('.overlay');
const diff = document.querySelector('.diff');
const msg = document.querySelector('.message');
const btn1 = document.querySelector('.btn1');
const btn = document.querySelector('.check');
let user = document.querySelector('.user');
let number = document.querySelector('.number');
let show = document.querySelector('.show');

overlay.classList.remove('hidden');
btn1.addEventListener('click', () => {
	overlay.classList.add('hidden');
	diff.classList.add('hidden');

	// Innitialization of the game
	let score = 10;
	let highscore = 0;
	let compNumber = Math.trunc(Math.random() * 20) + 1;
	console.log(compNumber);
	const displayMsg = (message) => {
		msg.textContent = message;
	};
	document.querySelector('.score').textContent = score;
	const winCheck = () => {
		const guess = Number(document.querySelector('.guess').value);
		console.log(guess);
		user.textContent = guess;
		// When there is no input
		if (!guess) {
			displayMsg('Input a number');
		}
		// check if guess is correct
		else if (guess === compNumber) {
			displayMsg('🎉Yay you got it');
			number.textContent = compNumber;
			document.querySelector('.vs').textContent = '=';
			document.querySelector('body').style.background = 'url(celeb.gif)';
			if (score > highscore) {
				highscore = score;
				document.querySelector('.highscore').textContent = highscore;
			}
		}
		// when guess is wrong
		else if (guess !== compNumber && guess <= 20 && guess >= 0) {
			if (score > 0) {
				displayMsg(guess < compNumber ? 'Too Low' : 'Too high');
				score--;
				document.querySelector('.score').textContent = score;
			} else displayMsg('You loose');
		}
		// when the guess exceed limit
		else {
			displayMsg(' Number out of range');
			show.classList.remove('hide');
			show.addEventListener('click', () => {
				show.classList.add('hide');
			});
		}
	};
	btn.addEventListener('click', winCheck);
});
