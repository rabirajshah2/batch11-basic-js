const os = require("os");
const cpu = os.cpus();
const memoryByte = os.totalmem();
const memoryGb = memoryByte / Math.pow(1024, 3);
console.log(cpu);
console.log(memoryByte);
console.log(memoryGb);

