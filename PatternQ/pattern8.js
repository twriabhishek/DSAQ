// *********
//  ******* 
//   *****  
//    ***   
//     *
function pattern8(n){
    for(let i=0; i<n; i++){
        //Space
        for(let j=0; j<i; j++){
            process.stdout.write(" ")
        }
        //Star
        for(let j=0; j<(2*n-2*i-1); j++){
            process.stdout.write("*")
        }
        //Space
        for(let j=0; j<i; j++){
            process.stdout.write(" ")
        }
        process.stdout.write("\n")
    }
}

const n=5
pattern8(n)