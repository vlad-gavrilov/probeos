const os = require('os');

const info = {
  getCommonInfo() {
    return [
      ['Архитектура', os.arch()],
      ['Порядок байтов', os.endianness()],
      ['Свободная память (байт)', os.freemem()],
      ['Всего памяти (байт)', os.totalmem()],
      ['Свободная память (ГБ)', Math.floor((1000 * os.freemem()) / 1073741824) / 1000],
      ['Всего памяти (ГБ)', Math.round((1000 * os.totalmem()) / 1073741824) / 1000],
      ['Домашняя директория', os.homedir()],
      ['Имя хоста', os.hostname()],
      ['Средняя загрузка за последнюю 1 минуту', os.loadavg()[0]],
      ['Средняя загрузка за последние 5 минут', os.loadavg()[1]],
      ['Средняя загрузка за последние 15 минут', os.loadavg()[2]],
      ['Платформа', os.platform()],
      ['Версия ядра', os.release()],
      ['Временная директория', os.tmpdir()],
      ['Тип ОС', os.type()],
      ['Время работы (часы)', Math.round(os.uptime() / 36) / 100],
      ['Пользователь uid', os.userInfo().uid],
      ['Пользователь gid', os.userInfo().gid],
      ['Пользователь имя', os.userInfo().username],
      ['Домашняя директория пользователя', os.userInfo().homedir],
      ['Командная оболочка', os.userInfo().shell],
    ];
  },
  getProcInfo() {
    const data = [];
    data.push(['Ядро']);
    data.push(['Модель']);
    data.push(['Частота']);
    data.push(['user mode']);
    data.push(['nice mode']);
    data.push(['sys mode']);
    data.push(['idle mode']);
    data.push(['irq mode']);
    os.cpus().forEach((item, i) => {
      data[0].push([i]);
      data[1].push(item.model.slice(0, 27));
      data[2].push(item.speed);
      data[3].push(item.times.user);
      data[4].push(item.times.nice);
      data[5].push(item.times.sys);
      data[6].push(item.times.idle);
      data[7].push(item.times.irq);
    });
    return data;
  },
  getNetworkInfo() {
    const data = [];
    data.push(['Интерфейс']);
    data.push(['Версия IP']);
    data.push(['Адрес']);
    data.push(['Макса сети']);
    data.push(['MAC-адрес']);
    data.push(['Внутренний']);
    data.push(['CIDR']);
    data.push(['Scope ID']);
    const interfaces = os.networkInterfaces();

    Object.keys(interfaces).forEach((currentInterface) => {
      let i = 0;
      while (i < 2) {
        data[0].push(currentInterface);
        data[1].push(interfaces[currentInterface][i].family);
        data[2].push(interfaces[currentInterface][i].address);
        data[3].push(interfaces[currentInterface][i].netmask);
        data[4].push(interfaces[currentInterface][i].mac);
        data[5].push(interfaces[currentInterface][i].internal ? 'Да' : 'Нет');
        data[6].push(interfaces[currentInterface][i].cidr);
        data[7].push((interfaces[currentInterface][i].scopeid === undefined) ? 'Отсутствует' : interfaces[currentInterface][i].scopeid);
        i += 1;
      }
    });

    return data;
  },
};

module.exports = info;
