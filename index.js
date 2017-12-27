const app = "I don't do much."

var kittens = array["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array) {
  return kittens.push("Ralph");
}

function destructivelyPrependKitten() {
  return kittens.unshift("Ralph");
  
}

function destructivelyRemoveLastKitten() {
  return kittens.pop("Garfield");
  
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift("Milo");
  
}

function appendKitten() {
  var moreKittens = [...kittens, "Ralph"];
  return moreKittens;
}

function prependKitten() {
  var moreKittens = ["Ralph", ...kittens];
  return moreKittens;
}