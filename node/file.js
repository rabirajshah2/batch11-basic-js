const fs = require("fs");
const read = fs.readFile("./rabi.txt", (err, data) => {
  if (err) console.log("Error from fs file  :", err);
  const bufferResult = Buffer.from(data);
  const result = bufferResult.toString();
  console.log(result);
});

const readUsingSync = fs.readFileSync("./rabi.txt");
const resultInBuffer = Buffer.from(readUsingSync);
const actualResult = resultInBuffer.toString();
console.log(actualResult);

const update = fs.writeFile("./rabi.txt", "Hello Rabi Raj Sah", (err) => {
  if (err) console.log("Error from fs file  :", err);
  console.log("The file has been written");
});

const create = fs.writeFile("./hello.txt", "Hello World", (err) => {
    if (err) console.log("Error from fs file  :", err);
    console.log("The new file has been created");
  });

const deleteFile = fs.writeFile("./abc.txt", "./def.txt", (err) => {
  if (err) console.log("Error from fs file  :", err);
  console.log("The new file has been created");
});
