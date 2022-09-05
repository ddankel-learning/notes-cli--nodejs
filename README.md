# notes

## About The Project

A (**very**) basic node command line script to serve as an introduction to node.js scripting. This application maintains an internal store of simple notes and provides a command line interface for viewing, adding, and removing said notes.

This script was initially written as part of [The Complete Node.js Developer Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728904) by [Andrew Mead](https://mead.io). However the code was structured differently from the instructor's. Renaming variables and modifying modules means code functionality must be digested and understood better than simply parroting the instructor's work.

## Getting Started

To run this script locally, perform the following steps:

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ddankel/notes-cli--nodejs.git
   ```
2. Install yarn packages
   ```sh
   yarn install
   ```
3. Run
   ```sh
   node app.js
   ```

### Compilation

This project is configured to be compiled using [pkg](https://github.com/vercel/pkg).

1. Install pkg
   ```sh
   npm install pkg -i
   ```
2. Compile
   ```sh
   pkg .
   ```

Default settings (build for node14, output to /dist) are configured in package.json and can be overwritten as needed.

## Usage

    Commands:
      add     Add a new note                      [aliases: new, create]
      remove  Remove a note                   [aliases: delete, destroy]
      show    Show a note
      list    List all notes                            [aliases: index]

    Options:
      --version  Show version number                           [boolean]
      --help     Show help                                     [boolean]

## Concerns

1. The script creates `.notes_data.json` in the directory it is executed from and stores the notes there. Were this script to be made production ready, a more appropriate centralized location (like the user's profile) would be used.
2. The executable built by `pkg` is prohibitively large. Were this script to see production use, further work would need to be done to reduce it to a more manageable size. See: [https://github.com/ddankel-learning/notes-cli--nodejs/issues/1](https://github.com/ddankel-learning/notes-cli--nodejs/issues/1)

## License

Distributed under the MIT License. See [LICENSE.txt](LICENSE.txt) for more information.

## Contact

Project Link: [https://github.com/ddankel-learning/notes-cli--nodejs](https://github.com/ddankel-learning/notes-cli--nodejs)
