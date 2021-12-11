function generateSum(n1, n2) {
  var sum = n1 + n2;
  console.log(sum);
}

generateSum(7, 2);

// conditionner pour que les deux n soit numbers

function generateSum(n1, n2, n3) {
  if (typeof n1 == "number") {
    if (typeof n2 == "number") {
      if (typeof n3 == "number") {
      } else {
        console.log("n3 is not numer");
      }
      var sum = n1 + n2 + n3;
      console.log(sum);
    } else {
      console.log("n2 must be number");
    }
  } else {
    console.log("n1 must be number");
  }
}
generateSum(7, 2, 6);
