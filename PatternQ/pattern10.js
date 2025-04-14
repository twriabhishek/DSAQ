// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
function pattern10(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<=i;j++){
            process.stdout.write("*")
        }
        process.stdout.write("\n")
    }
    for(let i=1; i<n; i++){
        for(let j=0; j<(n-i);j++){
            process.stdout.write("*")
        }
        process.stdout.write("\n")
    }
}

const n=5
pattern10(n)