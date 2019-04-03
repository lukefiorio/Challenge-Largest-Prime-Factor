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

/* lukes best version
function largestPrime4(n) {
  let primeNumber = 0;
  // do your work here
  let isPrime = [2];

  for (let i = 3; i <= Math.floor(n / 2); i++) {
    let newPrime = 1;
    for (let j = 0; (j < isPrime.length) && (newPrime === 1); j++) {
      if (i % isPrime[j] === 0) newPrime = 0;
    }
    if (newPrime === 1) isPrime.push(i);
  }

  for (let k = isPrime.length - 1; (k >= 0) && (primeNumber === 0); k--) {
    if (n % isPrime[k] === 0) primeNumber = isPrime[k];
  }

  return primeNumber;
}
*/

//console.time("V4");
//console.log(largestPrime4(734873));
//console.timeEnd("V4");
