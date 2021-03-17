function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Steely Dan",
      title: "Josie",
      release_year: 1972,
      id: 1214,
      formats: {
        1: "CD",
        2: "LP",
        3: "USB",
      },
    },
  };
  return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;
