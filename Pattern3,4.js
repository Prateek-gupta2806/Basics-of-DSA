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

/* Q5 inverted pyramid..?*/
function pattern5 (n) {for (let row = 1; row<= n; row +=1) {
    let str = "";
    
    /* we will concatinate the spaces*/
   
    /*after spaces concatination we will concatinate stars*/
    for ( let k=1; k<= n-(row-1); k+= 1){
        str += "*";
    }
    for (let j=1; j<= row-1 ; j+= 1){
        str += " ";
    }
    console.log(str);
   };
 };

 /* output 
    *****
    ****
    ***
    **
    *           */  

/* Q5 easy solution :- Just dont print spaces think of only stars 

ans:- */ 

function pattern51 (n) {for (let row = 1; row<= n; row +=1) {
    let str = "";
    
   
    /*after spaces concatination we will concatinate stars*/
    for ( let k=1; k<= n-(row-1); k+= 1){
        str += "*";
    }
   
    
    console.log(str);
   };
 };


 


























      