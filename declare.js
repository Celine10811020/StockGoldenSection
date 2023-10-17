var input;
var limitUp;
var upTwo;
var upOne;
var middle;
var downOne;
var downTwo;
var limitDown;

document.getElementById("calculate").onclick = function() {calculate()};
document.getElementById("input").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    document.getElementById("calculate").click();
  }
});
