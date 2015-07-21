module.exports = function words(input) {
  var obj = {}
  input.trim().split(/[\s]|[\t]|[\n]/).forEach(function(el) {
    if (obj.hasOwnProperty(el)) {
      ++obj[el];
    } else {
      obj[el] = 1;
    }
  });
  if (obj[""]) {
    delete obj[""]
  };
  return obj;
};
