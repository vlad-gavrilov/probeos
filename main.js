const inquirer = require('inquirer');
const argv = require('minimist')(process.argv.slice(2));
const print = require('./print');

function prompt(question) {
  inquirer.prompt(question)
    .then((ans) => {
      switch (ans.usersSelection) {
        case 'Получить общую информацию':
          print.commonInfo();
          prompt(question);
          break;
        case 'Получить информацию о процессоре':
          print.procInfo();
          prompt(question);
          break;
        case 'Получить информацию о сетевом интерфейсе':
          print.networkInfo();
          prompt(question);
          break;
        case 'Получить всю информацию о системе':
          print.commonInfo();
          print.procInfo();
          print.networkInfo();
          prompt(question);
          break;
        case 'Выход':
          console.log('Пока!');
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
    message: 'Выберите действие:',
    choices: [
      'Получить общую информацию',
      'Получить информацию о процессоре',
      'Получить информацию о сетевом интерфейсе',
      'Получить всю информацию о системе',
      'Выход',
    ],
    filter(val) {
      return val;
    },
  }];

  prompt(question);
}
