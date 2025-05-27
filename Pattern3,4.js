console.log("Making new file");

/*Q3  for a value "n" make pattern 
 if n = 3 

      *
     **
    ***      */

/*solution:- FIRST YOU WILL CONCATINATE SPACE AND THEN CONCATINATE STAR. USING DIFFRENT LOOPS.*/

function pattern (n) {for (let row = 1; row<= n; row +=1) {
   let str = "";
   let spaces = n-row;
   for (let j=1; j<= spaces ; j+= 1){
       str += " ";
   }
   for ( let k=1; k<= row; k+= 1){
       str += "*";
   }
   console.log(str);
  };
};

pattern (6);