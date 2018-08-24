// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens = kittens.slice(kittens, kittens.length-1);
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens = kittens.shift();
  return kittens
}

function appendKitten(name) {
  return kittens.push(name)
}

function prependKitten(name) {
  return kittens.push(name)
}
