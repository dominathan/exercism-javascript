module.exports = function Anagram(word) {
  var mainWord = sortWords(word);
  function sortWords(w) {
    return w.toLowerCase().split("").sort().join("");
  }

  var matches = function(words) {
    if (typeof words === 'string') {
      words = [].slice.call(arguments);
    }
    return words.filter(anagramWord);
  };

  function anagramWord(dif) {
    var test = dif.toLowerCase();
    return mainWord === sortWords(test) && word.toLowerCase() !== test;
  }

  return {
    matches: matches
  }
};
