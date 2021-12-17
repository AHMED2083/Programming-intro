
var person = {
    firstName : "ahmed",
    age : 32,
    nationality : "DZ",
    vaccinated : true,
  }
  
function createProfile (fName, yo, nat, vacc) {
    var person = {
        firstName : fName,
        age : yo,
        nationality : nat,
        vaccinated : vacc
    }
    console.log(person);
}

createProfile("ahmed", 31, "DZ", true);
createProfile("ANIBAL", 18, "TUN", true);
createProfile("SAMIR", 33, "MAR", false);
createProfile("NASRI", 36, "QATAR", true);