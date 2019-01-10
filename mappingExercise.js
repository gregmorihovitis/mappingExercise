var words = ["ground", "control", "to", "major", "tom"];

function map(wordList, usedFunction){
  let returnArray = [];

  wordList.forEach(function (currentWord){
    returnArray.push(usedFunction(currentWord));
  });

  console.log(returnArray);
}



map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});