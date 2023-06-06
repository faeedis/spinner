const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const delay = 200;

for (let i = 0; i < spinnerChars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerChars[i]}   `);
  }, delay * i);
}
