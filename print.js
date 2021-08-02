const { table } = require('table');
const info = require('./probe');

const dictionary = global.dict;

module.exports = {
  commonInfo() {
    console.log(dictionary.commonInfo);
    console.log(table(info.getCommonInfo()));
  },

  procInfo() {
    console.log(dictionary.processorInfo);
    console.log(table(info.getProcInfo()));
  },

  networkInfo() {
    console.log(dictionary.interfacesInfo);
    console.log(table(info.getNetworkInfo()));
  },
};
