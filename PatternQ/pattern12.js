// 1             1 
// 1 2         2 1
// 1 2 3     3 2 1
// 1 2 3 4 4 3 2 1
function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    //Star
    for (let j = 1; j <= i; j++) process.stdout.write(j.toString()+" ");
    //Space
    for (let j = 1; j <= 2 * (n - i); j++) process.stdout.write("  ");
    //Star
    for (let j = 1; j <= i; j++) process.stdout.write((i-j+1).toString()+" ");
    process.stdout.write("\n");
  }
}

const n = 5;
pattern12(n);
