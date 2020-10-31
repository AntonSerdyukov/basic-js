const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error();

  let resultArr = [];

  const discardNext = (i) => {
    i += 1;

    return (arr[i + 1] === '--double-prev' || arr[i + 1] === '--discard-prev')
      ? i + 1
      : i;
  };

  const doubleNext = (i) => {
    if ((i + 1) < arr.length) {
      resultArr.push(arr[i + 1]);
    }
  };

  const doublePrev = (i) => {
    if (i - 1 >= 0) {
      resultArr.push(arr[i - 1]);
    }
  };

  const discardPrev = () => {
    resultArr.pop();
  };

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case '--discard-next':
        i = discardNext(i);
        break;
      case '--double-next':
        doubleNext(i);
        break;
      case '--double-prev':
        doublePrev(i);
        break;
      case '--discard-prev':
        discardPrev();
        break;
      default:
        resultArr.push(arr[i]);
    }
  }

  return resultArr;
};
