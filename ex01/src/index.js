var myPet = {
  species: "Bulldog",
  name: "Glavonja",
  legs: 4,
  friends: ["kiki", "miki"],
};
function myFunction(myObj) {
  return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
