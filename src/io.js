const fs = require("fs");

const dataFile = "data/notes.json";

const read = () => {
  try {
    const buffer = fs.readFileSync(dataFile);
    const json = buffer.toString();
    return JSON.parse(json);
  } catch (e) {
    return [];
  }
};

const save = (payload) => {
  const json = JSON.stringify(payload, null, 2);
  fs.writeFileSync(dataFile, json);
};

module.exports = {
  read: read,
  save: save,
};
