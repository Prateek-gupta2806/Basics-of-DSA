console.log("Making new file");

/*Q3  for a value "n" make pattern 
 if n = 3 

      *
     **
    ***      */

/*solution:- FIRST YOU WILL CONCATINATE SPACE AND THEN CONCATINATE STAR. USING DIFFRENT LOOPS.*/

function pattern3 (n) {for (let row = 1; row<= n; row +=1) {
   let str = "";
   let spaces = n-row;
   /* we will concatinate the spaces*/
   for (let j=1; j<= spaces ; j+= 1){
       str += " ";
   }
   /*after spaces concatination we will concatinate stars*/
   for ( let k=1; k<= row; k+= 1){
       str += "*";
   }
   console.log(str);
  };
};



/* output 
     *
    **
   ***
  ****
 *****
******      */

/* Q4 Print the pattern  pyrAMID */

function pattern4 (n) {for (let row = 1; row<= n; row +=1) {
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
























      