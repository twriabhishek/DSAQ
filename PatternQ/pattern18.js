function pattern18(n) {
  for (let i = 1; i <= n; i++) {
    let currentLetter = String.fromCharCode("A".charCodeAt(0)+n-i)
    for (let j = 1; j <= i; j++) {
        process.stdout.write(currentLetter.toString())
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0)+1)
    }
    console.log()
  }
}
let n = 5;
pattern18(n);
