
function getRandonNumber(min, max) {
  return Math.floor(Math.random() * (3 - 1)) + 1;
};

	var random = getRandonNumber(1,3);
	var randomTwo = getRandonNumber(1,3);
	var randomThree = getRandonNumber(1,3);

	var box = document.querySelectorAll(".box");
	// document.getElementById("box1").innerHTML = range;

	for (var count = 1; count < box.length; count++){
		box[0].innerHTML = random;
		box[1].innerHTML = randomTwo;
		box[2].innerHTML = randomThree;
	};

