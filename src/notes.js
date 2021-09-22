const io = require("./io");
const log = require("./log");

/**
 * List all notes
 */
const list = () => {
  const notes = io.read();

  debugger;

  console.log("Saved Notes:");
  notes.forEach((note) => console.log(` - ${note.title}`));
};

/**
 * Show a single note by title
 *
 *  @param  {String}  title   The title of the note to show
 */
const show = (title) => {
  const notes = io.read();
  const note = notes.find((item) => item.title === title);

  if (!note) {
    log.error(`No note found with title '${title}'`);
    process.exit(1);
  }

  console.log("Title: " + note.title);
  console.log(note.body);
};

/**
 * Add a note to storage
 *
 * The note will not be written if the title already exists
 *
 * @param   {String}  title  The title of the note (required)
 * @param   {String}  body   The body of the note
 */
const add = ({ title, body }) => {
  const notes = io.read();

  if (notes.some((item) => item.title === title)) {
    log.error(`Note with title '${title}' already exists`);
    process.exit(1);
  }

  notes.push({ title, body });
  io.save(notes);
  log.success("Note saved successfully");
};

/**
 * Remove a note from storage
 *
 * If the title is blank or not present in the data source, an error message
 * will be printed.
 *
 * @param   {String}  title  The title of the note
 */
const remove = (title) => {
  if (!title) {
    log.error("Title must be provided");
    process.exit(1);
  }

  const notes = io.read();
  if (!notes.some((item) => item.title === title)) {
    log.error(`Note with title '${title}' does not exist`);
    process.exit(1);
  }

  io.save(notes.filter((item) => item.title !== title));
  log.success("Note deleted");
};

module.exports = {
  list: list,
  show: show,
  add: add,
  remove: remove,
};
