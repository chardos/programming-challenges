
helpers = {};

helpers.sortNumerically = (arr, order) => {
  if(order == 'asc'){
    var sortedArr = arr.sort(function(a, b) {
      return a - b;
    });
  }
  else if (order == 'desc'){
    var sortedArr = arr.sort(function(a, b) {
      return b - a;
    });
  }
  return sortedArr;
}
helpers.uniq = (arr) => {
  var o = {}, a = [], i, e;
  for (i = 0; e = arr[i]; i++) {o[e] = 1};
  for (e in o) {a.push (e)};
  return a;
}

module.exports = helpers;
