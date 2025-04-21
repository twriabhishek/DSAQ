// A 
// A B
// A B C
// A B C D
// A B C D E
function pattern14(n) {
  for (let i = 1; i <= n; i++) {
    let alpha = "A".charCodeAt(0);
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(alpha).toString()+" ");
      alpha = alpha + 1;
    }
    process.stdout.write("\n");
  }
}

const n = 5;
pattern14(n);