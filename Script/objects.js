function createProfile(fName, yo, nat, vacc) {
  var person = {
    firstName: fName,
    age: yo,
    nationality: nat,
    vaccinated: vacc,
  };
  console.log(person);
  }
  createProfile ("ahmed", 32, "DZ", true)