exports.largestPrimeFactor = function (n) {
  let primeNumber = 2;
  // do your work here
  while (primeNumber <= n) {
    if (n % primeNumber == 0) {
      n /= primeNumber;
    } else {
      primeNumber++;
    }
  }
  return primeNumber;
};
