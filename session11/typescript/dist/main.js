// let x:number = 30
// x = 50
// let firstname:string = "eslam"
// console.log(firstname)
// let codestatus:boolean = true
// let colors:[string] = ['red','green','blue']
// let colors:Array<any> = ['red','green','blue',55]
// let users:Array<string> = []
// users.push("ahmed") 
// console.log(users)
let data = [10, "mohamed", true];
// enum gender  {
//     male=1,
//     female=2
// }
// console.log(gender.female)
// enum stateCode {
//     notInitialized=0,
//     connectionEstablished =1,
//     requestReceived =2,
//     processingRequest=3,
//     responseIsReady=4
// }
// enum statusCode  {
//     success=200,
//     created=201,
//     badRequest=400,
//     notFound=404
// }
// console.log(statusCode.notFound)
// let text:HTMLElement|null = document.getElementById("text")
// let firstname:any= true
// function sayhi(fname:string):string
// {
//     return "hi "+fname
// }
// interface user {
//     color:string
// }
// class person implements user {
//     color:string = "red"   
//     sayhi(){
//         console.log("hi "+this.color)
//     }
// }
function loop(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let colors = ['red', 'green'];
let items = [1, 25, 6, 5];
loop(colors);
loop(items);
export {};
