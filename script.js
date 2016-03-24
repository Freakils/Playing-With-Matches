
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

	var box = document.querySelectorAll(".box");
	// document.getElementById("box1").innerHTML = range;

function reloadPage() {
	window.location.reload();
}
var update = function() {
	for (var count = 0; count < box.length; count++){
		box[count].innerHTML = getRandomNumber(1,9);
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
							msg.innerHTML ="Row2" + "-" + "two numbers are matching : " + box[3].innerHTML + "'s";
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
									msg.innerHTML ="Row3" + "-" + "two numbers are matching : " + box[6].innerHTML + "'s";
							}

							if(box[6].innerHTML === box[7].innerHTML && box[7].innerHTML === box[8].innerHTML && box[6].innerHTML === box[8].innerHTML) {
								var msg = document.getElementById("paragraph");
									msg.innerHTML ="Row3" + "-" + "three numbers are matching : " + box[8].innerHTML + "'s";
							}

// Column - 1
	if(box[0].innerHTML === box[3].innerHTML) {
		box[0].classList.add("high");
		box[3].classList.add("high");
		var msg = document.getElementById("col");
			msg.innerHTML ="Column1" + "-" + "two numbers are matching : " + box[3].innerHTML + "'s";
	}

	if(box[3].innerHTML === box[6].innerHTML) {
		box[3].classList.add("high");
		box[6].classList.add("high");
		var msg = document.getElementById("col");
			msg.innerHTML ="Column1" + "-" + "two numbers are matching : " + box[6].innerHTML + "'s";
	}

	if(box[0].innerHTML === box[6].innerHTML) {
		box[0].classList.add("high");
		box[6].classList.add("high");
		var msg = document.getElementById("col");
			msg.innerHTML ="Column1" + "-" + "two numbers are matching : " + box[0].innerHTML + "'s";
	}
	
	if(box[0].innerHTML === box[3].innerHTML && box[3].innerHTML === box[6].innerHTML && box[0].innerHTML === box[6].innerHTML) {
		var msg = document.getElementById("col");
			msg.innerHTML ="Column1" + "-" + "three numbers are matching : " + box[6].innerHTML + "'s";
	}

			// Column - 2
			if(box[1].innerHTML === box[4].innerHTML) {
				box[1].classList.add("high");
				box[4].classList.add("high");
				var msg = document.getElementById("colum");
					msg.innerHTML ="Column2" + "-" + "two numbers are matching : " + box[4].innerHTML + "'s";
			}

			if(box[4].innerHTML === box[7].innerHTML) {
				box[4].classList.add("high");
				box[7].classList.add("high");
				var msg = document.getElementById("colum");
					msg.innerHTML ="Column2" + "-" + "two numbers are matching : " + box[4].innerHTML + "'s";
			}

			if(box[1].innerHTML === box[7].innerHTML) {
				box[1].classList.add("high");
				box[7].classList.add("high");
				var msg = document.getElementById("colum");
					msg.innerHTML ="Column2" + "-" + "two numbers are matching : " + box[7].innerHTML + "'s";
			}
			
			if(box[1].innerHTML === box[4].innerHTML && box[4].innerHTML === box[7].innerHTML && box[1].innerHTML === box[7].innerHTML) {
				var msg = document.getElementById("colum");
					msg.innerHTML ="Column2" + "-" + "three numbers are matching : " + box[7].innerHTML + "'s";
			}

					// Column - 3
					if(box[2].innerHTML === box[5].innerHTML) {
						box[2].classList.add("high");
						box[5].classList.add("high");
						var msg = document.getElementById("column");
							msg.innerHTML ="Column3" + "-" + "two numbers are matching : " + box[5].innerHTML + "'s";
					}

					if(box[5].innerHTML === box[8].innerHTML) {
						box[5].classList.add("high");
						box[8].classList.add("high");
						var msg = document.getElementById("column");
							msg.innerHTML ="Column3" + "-" + "two numbers are matching : " + box[8].innerHTML + "'s";
					}

					if(box[2].innerHTML === box[8].innerHTML) {
						box[2].classList.add("high");
						box[8].classList.add("high");
						var msg = document.getElementById("column");
							msg.innerHTML ="Column3" + "-" + "two numbers are matching : " + box[2].innerHTML + "'s";
					}
					
					if(box[2].innerHTML === box[5].innerHTML && box[5].innerHTML === box[8].innerHTML && box[2].innerHTML === box[8].innerHTML) {
						var msg = document.getElementById("column");
							msg.innerHTML ="Column3" + "-" + "three numbers are matching : " + box[8].innerHTML + "'s";
					}

// Diagonal -1
if(box[0].innerHTML === box[4].innerHTML) {
	box[0].classList.add("high");
	box[4].classList.add("high");
	var msg = document.getElementById("dia");
		msg.innerHTML ="Diagonal1" + "-" + "two numbers are matching : " + box[0].innerHTML + "'s";
}

if(box[4].innerHTML === box[8].innerHTML) {
	box[4].classList.add("high");
	box[8].classList.add("high");
	var msg = document.getElementById("dia");
		msg.innerHTML ="Diagonal1" + "-" + "two numbers are matching : " + box[4].innerHTML + "'s";
}

if(box[0].innerHTML === box[8].innerHTML) {
	box[0].classList.add("high");
	box[8].classList.add("high");
	var msg = document.getElementById("dia");
		msg.innerHTML ="Diagonal1" + "-" + "two numbers are matching : " + box[8].innerHTML + "'s";
}
					
if(box[0].innerHTML === box[4].innerHTML && box[4].innerHTML === box[8].innerHTML && box[0].innerHTML === box[8].innerHTML) {
	var msg = document.getElementById("dia");
		msg.innerHTML ="Diagonal1" + "-" + "three numbers are matching : " + box[8].innerHTML + "'s";
}

		// Diagonal -2
		if(box[2].innerHTML === box[4].innerHTML) {
			box[2].classList.add("high");
			box[4].classList.add("high");
			var msg = document.getElementById("diago");
				msg.innerHTML ="Diagonal2" + "-" + "two numbers are matching : " + box[2].innerHTML + "'s";
		}

		if(box[4].innerHTML === box[6].innerHTML) {
			box[4].classList.add("high");
			box[6].classList.add("high");
			var msg = document.getElementById("diago");
				msg.innerHTML ="Diagonal2" + "-" + "two numbers are matching : " + box[4].innerHTML + "'s";
		}

		if(box[2].innerHTML === box[6].innerHTML) {
			box[2].classList.add("high");
			box[6].classList.add("high");
			var msg = document.getElementById("diago");
				msg.innerHTML ="Diagonal2" + "-" + "two numbers are matching : " + box[6].innerHTML + "'s";
		}
							
		if(box[2].innerHTML === box[4].innerHTML && box[4].innerHTML === box[6].innerHTML && box[2].innerHTML === box[6].innerHTML) {
			var msg = document.getElementById("diago");
				msg.innerHTML ="Diagonal2" + "-" + "three numbers are matching : " + box[8].innerHTML + "'s";
		}			

};
update();

// var relBut = document.getElementById("but");
// 	relBut.addEventListener("click",function(){
// 		update();
// 	});
// console.log(relBut);