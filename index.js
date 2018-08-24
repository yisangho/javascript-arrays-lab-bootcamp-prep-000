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
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  return name.concat(kittens)
}

function removeLastKitten() {
  kittens = kittens.pop();
  return kittens
}

function removeFirstKitten() {
  kittens = kittens.slice(0);
  return kittens
}
