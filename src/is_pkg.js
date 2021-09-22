/**
 * When a script is compiled using `pkg` and then run, `process.pkg` is
 * populated.  This value is undefined if the script is run via
 * node <scriptname>.  Thus we can use this property's presence to determine
 * if the script is currently running via node cli or a pkg-compiled
 * executable.
 */
const isPkg = () => !!process.pkg;

module.exports = isPkg;
