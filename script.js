function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (4 - 1)) + 1;
};

	var box = document.querySelectorAll(".box");
	// document.getElementById("box1").innerHTML = range;

	for (var count = 0; count < box.length; count++){
		box[count].innerHTML = getRandomNumber(1,4);
	}
		// box[count+1].innerHTML = getRandomNumber(1,4);
		// box[2].innerHTML = randomThree;

			if(box[1].innerHTML === box[2].innerHTML) {
				box[1].classList.add("high");
				box[2].classList.add("high");
			}

			if(box[0].innerHTML === box[1].innerHTML) {
				box[0].classList.add("high");
				box[1].classList.add("high");
			}

			if(box[0].innerHTML === box[2].innerHTML) {
				box[0].classList.add("high");
				box[2].classList.add("high");
			}

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + 1;
// };
// //console.log('blah', getRandomNumber(1, 9));
	

// var box = document.querySelectorAll(".box");

// updateBlock();
// highlightMatching();