
/*Pattern12*/


function pattern12 (n) {
    
let num = 0;
    
    for (let row = 1; row <= n; row +=1) {
    let str = "";
    for (let i =1; i<=row; i=i+1) {
        num = num + 1
        str += num + ' ' ;
        
    }
    console.log(str);
    
   };
 };
 

 /*leran ABCD pattern*/
 
 function pattern13 (n) {
    for (let row = 1; row <= n; row +=1) {
        let str = "";
        
        for (let i =1; i<=row; i=i+1) {
            str += + ' ' ;
            
        }
        console.log(str);
        
       };
 }