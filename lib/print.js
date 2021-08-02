const { table } = require('table');
const info = require('./probe');

const dictionary = global.dict;

/**
 * An object containing all the system information
 */
module.exports = {
  /**
   * Prints common information about the system to the console
   */
  commonInfo() {
    console.log(dictionary.commonInfo);
    console.log(table(info.getCommonInfo()));
  },
  /**
   * Prints processor information to the console
   */
  procInfo() {
    console.log(dictionary.processorInfo);
    console.log(table(info.getProcInfo()));
  },
  /**
   * Prints network information to the console
   */
  networkInfo() {
    console.log(dictionary.interfacesInfo);
    console.log(table(info.getNetworkInfo()));
  },
};
