let form = document.getElementById("form");
let input = document.getElementById("lgaInput");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (input.value.trim() === "") {
    return alert("Add Local governemnet");
  }

  let plateNumber = `${generateFirstTwoLetters()}-${generateThreeRandomNumbers(
    0,
    999
  )}-${input.value.substring(0, 3)}`;
  alert(plateNumber);
  input.value = "";
});

let generateThreeRandomNumbers = (min, max) => {
  let digits;
  for (var i = 0; i < 3; i++) {
    digits = Math.floor(Math.random() * max) + min;
  }
  return parseInt(digits);
};

let generateFirstTwoLetters = () => {
  var text = "";
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 2; i++) {
    text += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return text;
};
