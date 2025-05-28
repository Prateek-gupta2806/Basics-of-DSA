
function pattern1 (n) {for (let row = 1; row<= n; row +=1) {
    let str = "";
    let spaces = n-row;
    /* we will concatinate the spaces*/
    for (let j=1; j<= spaces ; j+= 1){
        str += " ";
    }
    /*after spaces concatination we will concatinate stars*/
    for ( let k=1; k<= 2*row-1; k+= 1){
        str += "*";
    }
    console.log(str);
   };
 };
 
 
 
 function pattern2 (n) {for (let row = 1; row <= n-1 ; row +=1){
   let str = ""
   for (let j=1; j<= row ; j+= 1){
       str += " ";
   }
   let star = n-row
   for ( let k=1; k<= 2*star-1; k+= 1){
       str += "*";
   };
   console.log(str);
 };
 };
 
 
 
 
 function patternMentos (n) {
     pattern1(n);
     pattern2(n);
 };
 
 patternMentos (5);