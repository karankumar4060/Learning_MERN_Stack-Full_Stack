// console.log("Hello World");
// console.log("im karan");


// let a = 10;
// let b = 20;
// // let sum = a + b;
// // let output="The sum of a and b is: " +(a+b) +"amount";
// // console.log(output);

// ********************************************************************************************
// // TEMPLATE LITERAL


// let output =`the total : ${a+b} rupee`;
// console.log(output);
// ***********************************************************************************


// PRACTICE QUESTION 1

// let col='green';
// if(col==='red'){
//     console.log("stop");
// }else if(col==="yellow"){
//     console.log("wait");
// }else{
//     console.log("go");
// }


// *********************************************************************************


// PRACTICE QUESTION 2

// let str="axkaran";
// if(str[0]=="a" && str.length > 3){
//     console.log("good");
// }else{
//     console.log("bad");
// }


// **********************************************************************************




// let msg="help!";
// let new_mag=msg.trim().toUpperCase();
// console.log(new_mag);


// let name="ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("College","University"));




// ******************************************************************


// let student =['karan', 'kumar','jsff'];
// student.push('abcdef');
// student.push('xyz');
// student.pop();

// student.unshift('sumit'); // add from start
// student.unshift('arvind'); 
// student.shift();  // delete from end


// **************************************************************************


//Splice

// let color=['red', 'blue', 'green', 'black', 'white'];
// console.log(color);
// console.log(color.splice(4));
// console.log(color);
// console.log(color.splice(0,1));
// console.log(color);
// console.log(color.splice(0,1, 'grey','orange'));
// console.log(color);


// output 

// script.js:82 (5) ['red', 'blue', 'green', 'black', 'white']
// script.js:83 ['white']
// script.js:84 (4) ['red', 'blue', 'green', 'black']
// script.js:85 ['red']
// script.js:86 (3) ['blue', 'green', 'black']
// script.js:87 ['blue']
// script.js:88 (4) ['grey', 'orange', 'green', 'black']





// console.log(color.sort());


// practice

// let start=['jan', 'july', 'mar', 'aug'];
// console.log(start.splice(0, 2, 'july', 'june'));
// console.log(start);




// **************************************************************


// favorite movie

// let movie="abcd";
// let guess=prompt("guss the movie");

// while((movie!=guess) && (guess != 'quit')){

//     console.log("wrong");
//     guess=prompt("try again guss the movie");

// }










// *********************************************************************

// TO DO LIST

let todo=[];
let req=prompt("pls enter your request");

while(true){
    if(req=='quit'){
        console.log("quiting app");
        break;
    }

    if(req=="list"){
        console.log("--------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("--------------------");        
    }else if(req=="add"){
        let task=prompt("enter your tack u want to add");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let ind=prompt("enter your tack index");
        todo.splice(ind,1);
        console.log("task added");
    }


    req=prompt("pls enter your request");

}
