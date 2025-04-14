// 1 2 3 4 5 
// 1 2 3 4
// 1 2 3
// 1 2
// 1
function pattern6(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<(n-i);j++){
            process.stdout.write((j+1).toString()+" ")
        }
        process.stdout.write("\n")
    }
}

const n=5
pattern6(n)