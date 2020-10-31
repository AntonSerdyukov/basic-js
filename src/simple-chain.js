const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    if (value === undefined) this.arr.push("")
    this.arr.push(String(value));
    return this;
  },

  removeLink(position) {
    if (this.arr[position - 1] === undefined) {
      this.arr = [];
      throw new Error();
    }

    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let result = this.arr.map(elem => "( " + elem + " )").join("~~");
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
