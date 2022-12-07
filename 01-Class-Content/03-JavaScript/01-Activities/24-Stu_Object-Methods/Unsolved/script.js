var chosenPet = "Mackie";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log(
      "Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend."
    );
  },
};

//Debug the code below
function dogMessage() {
<<<<<<< HEAD
   console.log("Congrats!" + chosenPet + ", a great dog, is available for adoption!");
   shelter.apptMessage();
=======
  console.log(
    "Congrats! " + chosenPet + ", a great dog, is available for adoption!"
  );
  shelter.apptMessage();
>>>>>>> bb621db58849168fe54ae2a476167f50edfffd37
}

function catMessage() {
  console.log(
    "Congrats! " + chosenPet + ", an awesome cat, is available for adoption!"
  );
  shelter.apptMessage;
}

<<<<<<< HEAD
if (shelter.cats.Includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.Includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + shelter.dogs[0] + ". or our featured cat, " + shelter.cats[1]);
=======
if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log(
    "Check out our featured dog, " +
      shelter.dogs[0] +
      ". or our featured cat, " +
      shelter.cats[1]
  );
>>>>>>> bb621db58849168fe54ae2a476167f50edfffd37
}
