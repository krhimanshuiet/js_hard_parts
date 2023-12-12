// execution of the code 
// const num = 3;
// function multiplyBy2(inputNumber){
//     const result =inputNumber*2;
//     console.log(result);
//     return result;
// }
// const output = multiplyBy2(num);
// const newOutput = multiplyBy2(10)
// // generalized function
// function tenSquared(){
//     return 10*10;
// }
// function nineSuquared(){
//     return 9*9;
// }
// // breaking coding principle dry - do not repeat yourself
// function squareNum(num){  // num - parameter (placeholder)
//     return num*num;
// }
// squareNum(900)  // 900 - argument
// function copyArrayAndMultiplyBy2(array){
//     const output = [];
//     for (let i = 0; i< array.length ;i++){
//         output.push(array[i]*2);
//     }
//     return output;
// }
// // console.log(copyArrayAndMultiplyBy2([1,6,5,3,4,9]));
// function copyArrayAndDivideBy2(array){
//     const output = [];
//     for (let i = 0; i< array.length ;i++){
//         output.push(array[i]/2);
//     }
//     return output;
// }
// console.log(copyArrayAndDivideBy2([1,6,5,3,4,9]));
// // generalize function
// function copyArrayAndManipulate(array,instructions){
//     const output = [];
//     for (let i = 0; i< array.length ;i++){
//         output.push(instructions(array[i]));
//     }
//     return output;
// }
// function multiplyBy2_1(input){
//     return input*2;
// }
// const multiplyBy2_2 = (input) => {input*2}
// const multiplyBy2_3 = (input) => input*2
// const multiplyBy2_4 = input => input * 2;
// console.log(copyArrayAndManipulate([1,2,5,6,9],multiplyBy2_4));
// console.log(copyArrayAndManipulate([1,2,5,6,9],input => 2*input));
// in js functions are called first class object
// closure

// function createFunction(){
//     function multiplyBy2(){
//         return num*2;
//     }

//     return multiplyBy2;
// }

// const generatedFunc = createFunction();
// const result = generatedFunc();

// function outer(){
//     let counter  =0;
//     function incrementCounter(){
//         counter++;
//     }
//     incrementCounter();
// }

// outer();


// function outer(){
//     let counter = 0;
//     function incrementCounter(){console.log("my name is ayansh");}
//     return incrementCounter;
// }

// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();

// function outer(){
//     let contentsnippet="Gun Reload gun reaload fire i";
//     console.log(contentsnippet);
// }
// outer() 

// calling functon in the same function call as it was defined

// function outer(){
//     let counter = 0;
//     function incrementCounter(){
//         counter++;
//     }
//     incrementCounter();
// }

// outer();



// clousers 

// function multiplyBy2 (inputNumber){
//     const result = inputNumber * 2;
//     return result;
// }

// const output = multiplyBy2(7)
// const newOutput = multiplyBy2(7)

// function createFunction(){
//     function multiplyBy2(num){
//         return num*2;
//     }

//     return multiplyBy2;
// }

// const genratedFunc = createFunction();
// const result = genratedFunc(2);
// console.log({result});

// function outer(){
//     const counter = 0;
//     function incrementCounter(){counter++;}
//     incrementCounter();
// }

// outer();



// function outer(callback){
//     let counter = 0;
    
//     function incrementCounter(){
//         counter++;
//         callback(counter)
//         return counter;
//     }
//     return incrementCounter;
// }



// const myNewFunction1 = outer((counter) => console.log({counter}));
// console.log(myNewFunction1);

// const c1 = myNewFunction1();
// const c2 = myNewFunction1();
// const c3 = myNewFunction1();
// const c4 = myNewFunction1();
// const c5 = myNewFunction1();

// console.log({c1,c2,c3,c4,c5});
// const myNewFunction2 = outer((counter) => console.log({counter}));
// myNewFunction2();
// myNewFunction2();






