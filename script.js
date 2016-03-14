
function getRandonNumber(min, max) {
  return Math.floor(Math.random() * (9 - 1)) + 1;
};
var range = getRandonNumber(1,9);
document.getElementById("box1").innerHTML = range;
