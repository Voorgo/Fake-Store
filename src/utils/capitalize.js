const capitalize = (str) => {
  if (str !== undefined) {
    const newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
  }
  return;
};

export default capitalize;
