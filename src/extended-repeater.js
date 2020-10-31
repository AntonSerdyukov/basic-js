const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str=String(str);
  if (str==null) str='null';
  let { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options;
  let output = '';
  let outputAddition = '';

  if (addition!==undefined) {
    if (!additionRepeatTimes) additionRepeatTimes = 1;
    for (let i = 0; i < additionRepeatTimes; i++) {
      outputAddition += addition;
      if (i < additionRepeatTimes - 1) {
        outputAddition += additionSeparator;
      }
    }
  }

  output = '';

  if (!repeatTimes) repeatTimes = 1;
  for (let j = 0; j < repeatTimes; j++) {

    output += str.toString() + outputAddition;
    if (j < repeatTimes - 1) {
      output += separator.toString();
    }

  }

  return output;
};
  