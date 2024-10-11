function calcbmi(){
  debugger;
  var h = document.getElementById("h").value;
  var w = document.getElementById("w").value;
  var bmi = w / h ** 2;
  document.getElementById("m").innerHTML = bmi.toFixed(2);

}