//      A     
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA
function pattern17(n){
    for(let i=0; i<n; i++){
        let alpaha = "A".charCodeAt(0)-1
        let half = Math.ceil((2*i+1)/2)
        
        //Space
        for(let j=0; j<(n-i); j++){
            process.stdout.write(" ");
        }
        //Star
        for(let j=0; j<(2*i+1); j++){            
            if(j<half){
                process.stdout.write((String.fromCharCode(++alpaha).toString()))
            }else{
                process.stdout.write((String.fromCharCode(--alpaha)).toString())
            }
        }
        //Space
        for(let j=0; j<(n-i); j++){
            process.stdout.write(" ");
        }
        process.stdout.write("\n")
    }
}
let n = 5
pattern17(n)