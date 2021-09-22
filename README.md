# notes-cli--nodejs

## About The Project

A (very) basic node command line script to serve as an introduction to node.js scripting. This application maintains an internal store of quick notes and provides a command line interface for viewing, adding, and removing said notes.

This script was initially written as part of [The Complete Node.js Developer Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728904) by [Andrew Mead](https://mead.io). Code is restructured from the instructor's. I find renaming variables and modifying modules means code functionality must be digested as opposed to simply parroting the instructor's work in order to extend and debug the end result.

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ddankel/notes-cli--nodejs.git
   ```
2. Install yarn packages
   ```sh
   yarn install
   ```

## Usage

    node app.js [command]

    Commands:
      node app.js add     Add a new note                      [aliases: new, create]
      node app.js remove  Remove a note                   [aliases: delete, destroy]
      node app.js show    Show a note
      node app.js list    List all notes                            [aliases: index]

    Options:
      --version  Show version number                                       [boolean]
      --help     Show help                                                 [boolean]

## License

Distributed under the MIT License. See [LICENSE.txt](LICENSE.txt) for more information.

## Contact

Project Link: [https://github.com/ddankel/notes-cli--nodejs](https://github.com/ddankel/notes-cli--nodejs)

## References

Adapted from: [The Complete Node.js Developer Course by Andrew Mead](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728904)
