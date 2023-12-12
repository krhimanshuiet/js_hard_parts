// object - store function withe their associated data
// this is the principle of  encaptulation - and its going to 
// transform how we can reason about our code 


// const user1 = {
//     name:"will",
//     score:3,
//     increment:function(){user1.score++}
// };
// user1.increment();

// const user2 = {};
// user2.name ="tim"
// user2.score =6
// user2.increment=function(){user2.score++}



// const user3 = Object.create(null);
// user3.name = 'eva';
// user3.score = 9;
// user3.increment = function(){
//     user3.score++;
// }


// generate objects using functions

// function userCreator(name,score){
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function(){
//         newUser.score++;
//     }
//     return newUser;
// }

// const user1 = userCreator('hks',90);
// const user2 = userCreator('mks',80);
// user1.increment();

// using the prototype chain

// function userCreator(name,score){
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser
// }

// const userFunctionStore = {
//     increment:function(){
//         function addOne(){
//             this.score++
//         }
//         addOne.call(this)
//     },
//     login:function(){
//         console.log("logged in");
//     }
// }

// const user1 = userCreator('will',90);
// const user2 = userCreator('tim',70);
// console.log(Object.hasOwnProperty('create'));
// user1.increment();
// console.log(new Map(Object.entries(user1.__proto__)));


//  using the prototype chain

// function userCreator(name,score){
//     this.name = name;
//     this.score = score;
// };


// userCreator.prototype.increment = function(){
//     this.score++;
// }

// userCreator.prototype.login = function(){
//     console.log("logged in sucessfully");
// }
// const user1 =  new userCreator('will',9)
// user1.increment();

function multiplyBy2(num){
    return num*2;
}

multiplyBy2.stored = 5;

console.log(multiplyBy2.stored);

// class syntactic sugar

class UserCreator{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    increment (){
        this.score++;
    }
    login(){
        console.log("logged in sucessfully");
    }
}

const user2 = new UserCreator('hks',98)
user2.increment();
 