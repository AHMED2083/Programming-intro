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

function predictResultFinal (){
  var algeriaScore = Math.round(Math.random() * 4);
  var tunisiaScore = Math.round(Math.random() * 4);
  console.log("Algeria " + algeriaScore + " - " + tunisiaScore + " Tunisa");
}

predictResultFinal()
