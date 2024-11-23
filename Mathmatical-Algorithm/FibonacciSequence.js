const myApproachfibonacciSequence = (number) => {
  let initailArray = [0, 1];
  for (let i = 0; i < number - 2; i++) {
    let sum = initailArray[i] + initailArray[i + 1];
    initailArray.push(sum);
  }
  return initailArray;
};

// console.log(myApproachfibonacciSequence(0));

const akashApproachfibonacciSequence = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

// console.log(akashApproachfibonacciSequence(0));

const myApproachfibonacciSequenceRecursion = (n) => {
  if (n < 2) {
    return n;
  }
  return (
    myApproachfibonacciSequenceRecursion(n - 1) +
    myApproachfibonacciSequenceRecursion(n - 2)
  );
};

console.log(myApproachfibonacciSequenceRecursion(5));
