// 1 
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

function pattern11(n){
    let x = 1
    for(let i=0; i<n; i++){
        for(let j=0; j<=i;j++){
            process.stdout.write(x.toString()+" ")
            x = x == 0 ? 1 : 0
        }
        process.stdout.write("\n")
    }
}

const n=5
pattern11(n)