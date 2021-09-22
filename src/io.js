const fs = require("fs");

const dataFile = ".notes_data.json";

/**
 * Read the collection of notes from the source data file
 *
 * @return  {Object}
 */
const read = () => {
  try {
    const buffer = fs.readFileSync(dataFile);
    const json = buffer.toString();
    return JSON.parse(json);
  } catch (e) {
    return [];
  }
};

/**
 * Write the collection of notes to the source file
 *
 * Note: This method calls JSON.stringify with the optional third
 * parameter (space), which causes stringify to format the resulting string for
 * readability purposes.  This increase the file size but given the scope of
 * this project and the data it's expected to contain that is acceptable.
 *
 * @param   {[type]}  payload  [payload description]
 *
 * @return  {[type]}           [return description]
 */
const save = (payload) => {
  const json = JSON.stringify(payload, null, 2);
  fs.writeFileSync(dataFile, json);
};

module.exports = {
  read: read,
  save: save,
};
