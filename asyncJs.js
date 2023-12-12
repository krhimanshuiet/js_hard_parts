// const num = 3;
// function multiplyBy2(inputNumber){
//     const result = inputNumber*2;
//     return result
// }
// const output = multiplyBy2(num);
// const newOutPut = multiplyBy2(10)
// function printHello(){
//     console.log("hello")   
// }
// setTimeout(printHello,0);
// console.log("me first");
// function printHello(){
//     console.log("Hello");
// }
// function blockFor1Sec(){ 
// }
// blockFor1Sec();
// console.log("Me first");
// function display(data){
//     console.log(data);
// }
// const futuredata = fetch('https://twitter.com/will/tweets/1');
// futuredata.then(display);
// // console.log(d.then((data) => console.log(data)))
// console.log("me first");

const c = Date.now();
function display(data){console.log(data, Date.now()-c);}
function printHello(){console.log('hello');}
function blockFor300ms(){console.log("blocked for 300ms");}

setTimeout(printHello,0)
const futureData = fetch('https://twitter.com/will/tweets/1')
futureData.then(display)
blockFor300ms()
console.log("me first",Date.now());