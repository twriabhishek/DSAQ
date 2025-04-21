// A B C D E 
// A B C D
// A B C
// A B
// A
function pattern15(n) {
  for (let i = n; i >= 1; i--) {
    let alpha = "A".charCodeAt(0);
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(alpha).toString() + " ");
      alpha = alpha + 1;
    }
    process.stdout.write("\n");
  }
}

const n = 5;
pattern15(n);
