


/*Q8 print the pattern  you can go to screen and print it to check the result

for n = 3              *
                      ***
                     *****  
                      ***
                       * 

*/




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

/*Q8 new PATTERN */


/*SOlution :-

Row no = (n-1)/2

Left star = right star = row number. 
spaces logic = N- 2*row. 



*/

 function upper (n) {for (let row = 1; row <= (n-1)/2; row +=1) {
    let str = "";
    for (let i =1; i<=row; i+=1) {
        str+= "*";
    }
    let spaces = n-2*row;
    for (let j=1; j<= spaces ; j+= 1){
        str += " ";
    }
    for ( let k=1; k<= row; k+= 1){
        str += "*";
    }
    console.log(str);
   };
 };
 
 
 
 function mid (n) { 
    for (let row = 1; row <=1; row +=1 ) {
      let str = "";
    for (let i =1; i<=n; i+=1) {
        str+= "*";
    }
     console.log(str);
 };
};

 
 function lower (n) {for (let row = 1; row<= (n-1)/2; row +=1) {
    let str = "";
    let spaces = 2*row-1;
    let star = (n-spaces)/2;
    for (let i =1; i<=star; i+=1) {
        str+= "*";
    }
    
    for (let j=1; j<= spaces ; j+= 1){
        str += " ";
    }
    for ( let k=1; k<= star; k+= 1){
        str += "*";
    }
    console.log(str);
   };
 };
 


 function patternMentos1 (n) {
    upper(n);
    mid(n);
    lower(n);
};



/* Tasks  
1. Patterns complete 
2. Namaste JS next video..
3. Madam video age.. 
4. Notes dekhne hai ki ab kaise revise krne hai.....
***/



 
 