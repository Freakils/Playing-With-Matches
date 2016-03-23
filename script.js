
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (4 - 1)) + 1;
};

	var box = document.querySelectorAll(".box");
	// document.getElementById("box1").innerHTML = range;

function reloadPage() {
	for (var count = 0; count < box.length; count++){
		box[count].innerHTML = getRandomNumber(1,4);
		box[count].classList.remove("high");
		var msg = document.getElementById("para");
			msg.innerHTML = "...";
	}
			// Row - 1
			if(box[0].innerHTML === box[1].innerHTML) {
				box[0].classList.add("high");
				box[1].classList.add("high");
				var msg = document.getElementById("para");
					msg.innerHTML ="Row1" + "-" + "two numbers are matching : " + box[1].innerHTML + "'s";
			}

			if(box[1].innerHTML === box[2].innerHTML) {
				box[1].classList.add("high");
				box[2].classList.add("high");
				var msg = document.getElementById("para");
					msg.innerHTML ="Row1" + "-" + "two numbers are matching : " + box[2].innerHTML + "'s";
			}

			if(box[0].innerHTML === box[2].innerHTML) {
				box[0].classList.add("high");
				box[2].classList.add("high");
				var msg = document.getElementById("para");
					msg.innerHTML ="Row1" + "-" + "two numbers are matching : " + box[0].innerHTML + "'s";
			}

			if(box[0].innerHTML === box[1].innerHTML && box[1].innerHTML === box[2].innerHTML && box[0].innerHTML === box[2].innerHTML) {
				var msg = document.getElementById("para");
					msg.innerHTML ="Row1" + "-" + "three numbers are matching : " + box[2].innerHTML + "'s";
			}

					// Row - 2
					if(box[3].innerHTML === box[4].innerHTML) {
						box[3].classList.add("high");
						box[4].classList.add("high");
						var msg = document.getElementById("paragra");
							msg.innerHTML ="Row2" + "-" + "two numbers are matching : " + box[4].innerHTML + "'s";
					}

					if(box[4].innerHTML === box[5].innerHTML) {
						box[4].classList.add("high");
						box[5].classList.add("high");
						var msg = document.getElementById("paragra");
							msg.innerHTML ="Row2" + "-" + "two numbers are matching : " + box[5].innerHTML + "'s";
					}

					if(box[3].innerHTML === box[5].innerHTML) {
						box[3].classList.add("high");
						box[5].classList.add("high");
						var msg = document.getElementById("paragra");
							msg.innerHTML ="Row2" + "-" + "two numbers are matching : " + box[5].innerHTML + "'s";
					}

					if(box[3].innerHTML === box[4].innerHTML && box[4].innerHTML === box[5].innerHTML && box[3].innerHTML === box[5].innerHTML) {
						var msg = document.getElementById("paragra");
							msg.innerHTML ="Row2" + "-" + "three numbers are matching : " + box[5].innerHTML + "'s";
					}

							// Row - 3
							if(box[6].innerHTML === box[7].innerHTML) {
								box[6].classList.add("high");
								box[7].classList.add("high");
								var msg = document.getElementById("paragraph");
									msg.innerHTML ="Row3" + "-" + "two numbers are matching : " + box[7].innerHTML + "'s";
							}

							if(box[7].innerHTML === box[8].innerHTML) {
								box[7].classList.add("high");
								box[8].classList.add("high");
								var msg = document.getElementById("paragraph");
									msg.innerHTML ="Row3" + "-" + "two numbers are matching : " + box[8].innerHTML + "'s";
							}

							if(box[6].innerHTML === box[8].innerHTML) {
								box[6].classList.add("high");
								box[8].classList.add("high");
								var msg = document.getElementById("paragraph");
									msg.innerHTML ="Row3" + "-" + "two numbers are matching : " + box[8].innerHTML + "'s";
							}

							if(box[6].innerHTML === box[7].innerHTML && box[7].innerHTML === box[8].innerHTML && box[6].innerHTML === box[8].innerHTML) {
								var msg = document.getElementById("paragraph");
									msg.innerHTML ="Row3" + "-" + "three numbers are matching : " + box[5].innerHTML + "'s";
							}
};
reloadPage();

var relBut = document.getElementById("but");
	relBut.addEventListener("click",function(){
		reloadPage();
	});
// console.log(relBut);