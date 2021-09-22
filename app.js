const yargs = require("yargs");
const notes = require("./src/notes");

yargs.scriptName("node app.js");

// ADD command
yargs.command({
  command: "add",
  aliases: ["new", "create"],
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const { title, body } = argv;
    notes.add({ title, body });
  },
});

// REMOVE command
yargs.command({
  command: "remove",
  aliases: ["delete", "destroy"],
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.remove(argv.title);
  },
});

// SHOW command
yargs.command({
  command: "show",
  describe: "Show a note",
  handler(argv) {
    notes.show(argv.title);
  },
});

// LIST command
yargs.command({
  command: "list",
  aliases: ["index"],
  describe: "List all notes",
  handler(argv) {
    notes.list();
  },
});

yargs.help();
yargs.parse();
