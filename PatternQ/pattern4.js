// 1 
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
function pattern4(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<=i;j++){
            process.stdout.write((i+1).toString()+" ")
        }
        process.stdout.write("\n")
    }
}

const n=5
pattern4(n)