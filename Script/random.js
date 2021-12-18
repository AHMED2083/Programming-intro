function max(n1, n2) {
  if (typeof n1 === Number && typeof n2 === Number) {
    if (n1 > n2) {
      console.log(n1 + " > " + n2);
    } else if (n1 < n2) {
      console.log(n1 + " < " + n2);
    } else {
      console.log(n1 + " = " + n2);
    }
  } else {
    console.log("n1 or n2 must be number");
  }
}

// max(4, 15);
var dzScore = document.getElementById("scoreDZ");
var tnScore = document.getElementById("scoreTN");
var prdBTN = document.getElementById("prdBTN")

function predictScoreDZ (){
  return Math.round(Math.random() * 4)
}

function predictScoreTN (){
  return Math.round(Math.random() * 4)
}

dzScore.style.textAlign = "center"
dzScore.style.fontSize = "30px"
tnScore.style.textAlign = "center"
tnScore.style.fontSize = "30px"
dzScore.innerHTML = "0"
tnScore.innerHTML = "0"

function btnClicked(){
  var dz = predictScoreDZ();
  var tn = predictScoreTN();
  dzScore.innerHTML = dz;
  tnScore.innerHTML = tn;
}

prdBTN.addEventListener("click", btnClicked)