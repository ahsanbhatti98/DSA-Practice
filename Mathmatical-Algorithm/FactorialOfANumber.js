const findFactorailMyAppraoch = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * findFactorailMyAppraoch(n - 1);
  }
};

// console.log("=>>>>", findFactorailMyAppraoch(4));

const forLoopFactorailMyAppraoch = (n) => {
  let result = 1;
  if (n <= 1) return result;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(forLoopFactorailMyAppraoch(3))