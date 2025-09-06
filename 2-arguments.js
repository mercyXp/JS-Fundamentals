const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
// To run this script, use the command: node 2-arguments.js arg1 arg2
// Replace arg1 and arg2 with your desired arguments.