// setTimeout( () => {
//     console.log("السلام عليكم");
//     setTimeout(() => {
//         console.log("Ciao");
//         setTimeout(() => {
//             console.log("Hi");
//             setTimeout(() => {
//                 console.log("Bonjour");
//                 setTimeout(() => {
//                     console.log("안녕");
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

let greetings = ["السلام عليكم", "Ciao", "Hi", "Bonjour","안녕"]

// async function time1 (message) {
//     await setTimeout(() => {console.log(message)},1000)
// };

// time1("السلام عليكم")
// time1("Ciao")
// time1("Hi")
// time1("Bonjour")
// time1("안녕")
// time1("hi")


function time2 (list) {
    for (greet in list){
        setTimeout(() => {console.log(greet)}, 1000)
    }
};

let greeting = new Promise (function(resolve){
    
    myResolve(time2(greetings))
    

})

async function display (list, delay){
    await function print (list) {
        return new Promise (function(resolve){
            resolve(time2(list))
        })
    };
};