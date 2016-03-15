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

			if(box[0].innerHTML === box[1].innerHTML) {
				box[0].classList.add("high");
				box[1].classList.add("high");
			}
	};


// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + 1;
// };
// //console.log('blah', getRandomNumber(1, 9));
	

// var box = document.querySelectorAll(".box");


// // function updateBlock(){
// // 	for (var count = 0; count < box.length; count++) {
// // 		box[count].innerHTML = getRandomNumber(1,3)	
// // 		box[count].classList.remove('high')
// // 	}
// // }

// // function highlightMatching() {
// // 	for (var x = 0; x < box.length; x++) {
// // 		if(box[x].innerHTML === box[x+1].innerHTML) {
// // 			box[x].classList.add('high');
// // 			box[x].classList.add('high');
// // 		}
// // 	}
// // }

// updateBlock();
// highlightMatching();