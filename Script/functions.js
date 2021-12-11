// function login(User, PassWord) {
//   if (User == "ahmed" && PassWord == 123) {
//     console.log("succeful");
//   } else {
//     console.log("error");
//   }
// }
// login("ahmed", 123);

var originalUesrName = "AHMED";
var originalPassWord = 1234;

function login(UesrName, PassWord) {
  if (UesrName == originalUesrName) {
    if (PassWord == originalPassWord) {
      console.log("login succefuly");
    } else {
      console.log("Wrong password");
    }
  } else {
    console.log("not exist in DB");
  }
}
login("sdhjsdh", 123);
login("AHMED", 23468);
login("AHMED", 1234);

// #4 moyenne

var studentList = [14, 11, 11, 10, 5];

function calculateMoy() {
  var sum = 0;
  for (var i = 0; i < studentList.length; i++) {
    sum = sum + studentList[i];
  }
  var moy = sum / studentList.length;
  console.log(moy);
  
  }
}

calculateMoy();