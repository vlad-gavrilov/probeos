const { table } = require('table');
const info = require('./probe');

module.exports = {
  commonInfo() {
    console.log('Общая информация о системе:');
    console.log(table(info.getCommonInfo()));
  },

  procInfo() {
    console.log('Информация о процессоре:');
    console.log(table(info.getProcInfo()));
  },

  networkInfo() {
    console.log('Информация о сетевых интерфейсах:');
    console.log(table(info.getNetworkInfo()));
  },
};
