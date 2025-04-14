//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  *
//  *  *  *  *  *
function pattern1(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            process.stdout.write(" * ")
        }
        process.stdout.write("\n")
    }
}

const n=5
pattern1(n)