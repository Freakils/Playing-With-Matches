function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (4 - 1)) + 1;
};

	var box = document.querySelectorAll(".box");
	// document.getElementById("box1").innerHTML = range;

	for (var count = 0; count < box.length; count++){
		box[count].innerHTML = getRandomNumber(1,4);
	}

			if(box[0].innerHTML === box[1].innerHTML) {
				box[0].classList.add("high");
				box[1].classList.add("high");
				var msg = document.getElementById("para");
				msg.innerHTML ="two numbers are matching : " + box[1].innerHTML + "'s";
			}


			if(box[1].innerHTML === box[2].innerHTML) {
				box[1].classList.add("high");
				box[2].classList.add("high");
				var msg = document.getElementById("para");
				msg.innerHTML ="two numbers are matching : " + box[2].innerHTML + "'s";
			}

			if(box[0].innerHTML === box[2].innerHTML) {
				box[0].classList.add("high");
				box[2].classList.add("high");
				var msg = document.getElementById("para");
				msg.innerHTML =" numbers are matching : " + box[0].innerHTML + "'s";
			}

			if(box[0].innerHTML === box[1].innerHTML && box[1].innerHTML === box[2].innerHTML && box[0].innerHTML === box[2].innerHTML) {
				var msg = document.getElementById("para");
				msg.innerHTML ="three numbers are matching : " + box[2].innerHTML + "'s";
			}
