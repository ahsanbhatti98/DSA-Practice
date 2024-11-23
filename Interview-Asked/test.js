const find = (stringA, stringB) => {
  if (stringA?.length != stringB?.length) {
    return false;
  }

  let updateA = stringA?.split("")?.sort()?.join("");
  let updateB = stringB?.split("")?.sort()?.join("");

  return updateA == updateB;
};

console.log(find("acb", "bca"));
