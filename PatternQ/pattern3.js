// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
function pattern3(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<=i;j++){
            process.stdout.write((j+1).toString()+" ")
        }
        process.stdout.write("\n")
    }
}

const n=5
pattern3(n)