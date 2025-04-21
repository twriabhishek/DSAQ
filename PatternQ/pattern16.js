// A 
// B B
// C C C
// D D D D
// E E E E E
function pattern16(n) {
  let alpha = "A".charCodeAt(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(alpha).toString() + " ");
    }
    alpha = alpha + 1;
    process.stdout.write("\n");
  }
}

const n = 5;
pattern16(n);
