const en = {
  // main.js
  selectAction: 'Select an action:',
  getCommonInfo: 'Get common information',
  getProcessorInfo: 'Get processor information',
  getInterfacesInfo: 'Get network interfaces information',
  getAllInfo: 'Get all information',
  exit: 'Exit',
  farewell: 'Bye!',
  // print.js
  commonInfo: 'Common information',
  processorInfo: 'Processor information',
  interfacesInfo: 'Network interfaces information',
  // common
  architecture: 'Architecture',
  byteOrder: 'Byte order',
  freeMemory: 'Free memory (bytes)',
  totalMemory: 'Total memory (bytes)',
  freeMemoryGB: 'Free memory (GB)',
  totalMemoryGB: 'Total memory (GB)',
  homedir: 'Home directory',
  hostname: 'Host name',
  averageLoad1: 'Average load for the last 1 minute',
  averageLoad5: 'Average load for the last 5 minutes',
  averageLoad15: 'Average load for the last 15 minutes',
  platform: 'Platform',
  kernelVersion: 'Kernel version',
  tmpDir: 'Temporary directory',
  osType: 'OS type',
  uptimeHours: 'Uptime (hours)',
  uid: 'User ID (uid)',
  gid: 'Group ID (gid)',
  username: 'Username',
  userHomedir: 'User\'s home directory',
  shell: 'Shell',
  // processor
  core: 'Core',
  model: 'Model',
  frequency: 'Frequency',
  userMode: 'User mode',
  niceMode: 'Nice mode',
  sysMode: 'Sys mode',
  idleMode: 'Idle mode',
  irqMode: 'Irq mode',
  // network
  interface: 'Interface',
  ipVersion: 'IP version',
  address: 'Address',
  netmask: 'Netmask',
  macAddress: 'MAC address',
  internal: 'Internal',
  cidr: 'CIDR',
  scopeId: 'Scope ID',
  // other
  yes: 'Yes',
  no: 'No',
  absent: 'Absent',
};

const ru = { ...en };
Object.assign(ru, {
  // main.js
  selectAction: 'Выберите действие:',
  getCommonInfo: 'Получить общую информацию',
  getProcessorInfo: 'Получить информацию о процессоре',
  getInterfacesInfo: 'Получить информацию о сетевых интерфейсах',
  getAllInfo: 'Получить всю информацию о системе',
  exit: 'Выход',
  farewell: 'Пока!',
  // print.js
  commonInfo: 'Общая информация о системе:',
  processorInfo: 'Информация о процессоре:',
  interfacesInfo: 'Информация о сетевых интерфейсах:',
  // common
  architecture: 'Архитектура',
  byteOrder: 'Порядок байтов',
  freeMemory: 'Свободная память (байт)',
  totalMemory: 'Всего памяти (байт)',
  freeMemoryGB: 'Свободная память (ГБ)',
  totalMemoryGB: 'Всего памяти (ГБ)',
  homedir: 'Домашняя директория',
  hostname: 'Имя хоста',
  averageLoad1: 'Средняя загрузка за последнюю 1 минуту',
  averageLoad5: 'Средняя загрузка за последние 5 минут',
  averageLoad15: 'Средняя загрузка за последние 15 минут',
  platform: 'Платформа',
  kernelVersion: 'Версия ядра',
  tmpDir: 'Временная директория',
  osType: 'Тип ОС',
  uptimeHours: 'Время работы (часы)',
  uid: 'Идентификатор пользователя (uid)',
  gid: 'Идентификатор группы (gid)',
  username: 'Имя пользователя',
  userHomedir: 'Домашняя директория пользователя',
  shell: 'Командная оболочка',
  // processor
  core: 'Ядро',
  model: 'Модель',
  frequency: 'Частота',
  // network
  interface: 'Интерфейс',
  ipVersion: 'Версия IP',
  address: 'Адрес',
  netmask: 'Маска сети',
  macAddress: 'MAC-адрес',
  internal: 'Внутренний',
  // other
  yes: 'Да',
  no: 'Нет',
  absent: 'Отсутствует',
});

const langs = {
  en,
  ru,
};

module.exports = (lang) => langs[lang] ?? langs.en;
