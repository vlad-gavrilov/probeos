const inquirer = require('inquirer');
const argv = require('minimist')(process.argv.slice(2));
global.dict = require('./internationalization')(argv.lang ?? 'en');
const print = require('./print');

const dictionary = global.dict;

function prompt(question) {
  inquirer.prompt(question)
    .then((ans) => {
      switch (ans.usersSelection) {
        case dictionary.getCommonInfo:
          print.commonInfo();
          prompt(question);
          break;
        case dictionary.getProcessorInfo:
          print.procInfo();
          prompt(question);
          break;
        case dictionary.getInterfacesInfo:
          print.networkInfo();
          prompt(question);
          break;
        case dictionary.getAllInfo:
          print.commonInfo();
          print.procInfo();
          print.networkInfo();
          prompt(question);
          break;
        case dictionary.exit:
          console.log(dictionary.farewell);
          break;
        default:
          break;
      }
    });
}

if (argv.c || argv.info === 'common' || argv.i === 0) {
  print.commonInfo();
} else if (argv.p || argv.info === 'proc' || argv.i === 1) {
  print.procInfo();
} else if (argv.n || argv.info === 'network' || argv.i === 2) {
  print.networkInfo();
} else {
  const question = [{
    type: 'list',
    name: 'usersSelection',
    message: dictionary.selectAction,
    choices: [
      dictionary.getCommonInfo,
      dictionary.getProcessorInfo,
      dictionary.getInterfacesInfo,
      dictionary.getAllInfo,
      dictionary.exit,
    ],
    filter(val) {
      return val;
    },
  }];

  prompt(question);
}
