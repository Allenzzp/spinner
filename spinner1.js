// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

const ani = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 100;
for (let element of ani) {
  setTimeout(() => {
    process.stdout.write("\r" + element + "   ");
  }, time);
  time += 200;
}
setTimeout(() => {
  process.stdout.write('\n'); 
}, time);