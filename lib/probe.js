const os = require('os');

const dictionary = global.dict;

/**
 * An object containing all the system information
 */
const info = {
  /**
   * Generates a 2-dimensional array of common information about the system
   *
   * @returns {String[][]} Common information
   */
  getCommonInfo() {
    return [
      [dictionary.architecture, os.arch()],
      [dictionary.byteOrder, os.endianness()],
      [dictionary.freeMemory, os.freemem()],
      [dictionary.totalMemory, os.totalmem()],
      [dictionary.freeMemoryGB, Math.floor((1000 * os.freemem()) / 1073741824) / 1000],
      [dictionary.totalMemoryGB, Math.round((1000 * os.totalmem()) / 1073741824) / 1000],
      [dictionary.homedir, os.homedir()],
      [dictionary.hostname, os.hostname()],
      [dictionary.averageLoad1, os.loadavg()[0]],
      [dictionary.averageLoad5, os.loadavg()[1]],
      [dictionary.averageLoad15, os.loadavg()[2]],
      [dictionary.platform, os.platform()],
      [dictionary.kernelVersion, os.release()],
      [dictionary.tmpDir, os.tmpdir()],
      [dictionary.osType, os.type()],
      [dictionary.uptimeHours, Math.round(os.uptime() / 36) / 100],
      [dictionary.uid, os.userInfo().uid],
      [dictionary.gid, os.userInfo().gid],
      [dictionary.username, os.userInfo().username],
      [dictionary.userHomedir, os.userInfo().homedir],
      [dictionary.shell, os.userInfo().shell],
    ];
  },
  /**
   * Generates a 2-dimensional array of processor information
   *
   * @returns {String[][]} Processor information
   */
  getProcInfo() {
    const data = [];
    data.push([dictionary.core]);
    data.push([dictionary.model]);
    data.push([dictionary.frequency]);
    data.push([dictionary.userMode]);
    data.push([dictionary.niceMode]);
    data.push([dictionary.sysMode]);
    data.push([dictionary.idleMode]);
    data.push([dictionary.irqMode]);
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
  /**
   * Generates a 2-dimensional array of network information
   *
   * @returns {String[][]} Network information
   */
  getNetworkInfo() {
    const data = [];
    data.push([dictionary.interface]);
    data.push([dictionary.ipVersion]);
    data.push([dictionary.address]);
    data.push([dictionary.netmask]);
    data.push([dictionary.macAddress]);
    data.push([dictionary.internal]);
    data.push([dictionary.cidr]);
    data.push([dictionary.scopeId]);
    const interfaces = os.networkInterfaces();

    Object.keys(interfaces).forEach((currentInterface) => {
      let i = 0;
      while (i < 2) {
        data[0].push(currentInterface);
        data[1].push(interfaces[currentInterface][i].family);
        data[2].push(interfaces[currentInterface][i].address);
        data[3].push(interfaces[currentInterface][i].netmask);
        data[4].push(interfaces[currentInterface][i].mac);
        data[5].push(interfaces[currentInterface][i].internal ? dictionary.yes : dictionary.no);
        data[6].push(interfaces[currentInterface][i].cidr);
        data[7].push(
          interfaces[currentInterface][i].scopeid === undefined
            ? dictionary.absent
            : interfaces[currentInterface][i].scopeid,
        );
        i += 1;
      }
    });

    return data;
  },
};

module.exports = info;
