// problem with this approach is its only checks for 2
const primeNumberMyApproach = (n) => {
  if (n < 2) return false;
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

// console.log(primeNumberMyApproach(103));
// console.log(primeNumberMyApproach(9));
// console.log(primeNumberMyApproach(4));

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    console.log(i, "i=>>>n", n);
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(5));
// console.log(isPrime(5));
// console.log(isPrime(4));
