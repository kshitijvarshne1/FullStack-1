var x = document.getElementById("h");
function sub() {
  var val = x.innerHTML;
  if (val - 1 >= 0) {
    x.innerText = val - 1;
  }
}
function add() {
  var val = x.innerHTML;

  x.innerText = parseInt(val) + 1;
}
