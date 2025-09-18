// var x

// console.log(x)



// x = 10

// console.log(x)
// let x = 10


// var i = 20


// for(let i=0;i<10;i++){
//     console.log(i)
// }


// console.log(i)
// console.log(i)


// let x = 20
// console.log(window)

// const PI = 22/7

// PI = 50

// console.log(PI)



// let fname = "mohamed"
// let lname = "amr"
// console.log(" my f name is : "+fname+" and l name is "+lname)
// console.log(`my f name is : ${fname} and l name is ${lname}`)


// let user = {
//     name:"batikha",
//     age:40,
//     address:"cairo"
// }





// let {age} = user


// console.log(age)






// let colors = ["red","green","blue"]
// let [fcolor,scolor,tcolor] = colors
// console.log(fcolor)



// function sayhi(name = "mohamed"){
//     console.log(`say hi ${name}`)
// }

// sayhi()

// let numbers = [1,5,6,7,9]
// console.log( ...numbers)



// numbers.forEach(function(x){
//     console.log(x)
// })

// let result =  numbers.map(function(x){
//     return x;
// })

// console.log(result)



// let salray = [3000,5000,1000,200]

// let result = salray.map(function(s){
//     return s*0.9
// })

// console.log(result)

// let result = salray.filter(function(s){
//     return s>1000
// })

// console.log(result)



// let colors = ["red",'green','blue']


// for(let x of colors){
//     console.log(x)
// }


// let fname = "ahmed"

// for(let x of fname){
//     console.log(x)
// }


// let user = {
//     name:"eslam",
//     age:20
// }

// for(let x in user){
//     console.log(user[x])
// }

// let k = Object.keys(user)

// for(let i=0;i<k.length;i++){
//     console.log(user[k[i]])
// }



// function sayhi(name){
//     console.log(`hi ${name}`)
// }


// let sayhi = _ =>  {console.log(`hi `) }


// sayhi()

// let numbser = [1,54,8,9,6]

// let r = numbser.map((x)=>{
//     return x*20
// })



// console.log(this)



// function user(){
//     this.number = 0;
//     this.increment = function(){
//         setInterval(()=>{
//             this.number++
//             console.log(this.number)
//         },1000)
//     }
// }


// let u = new user
// u.increment()


// class user{
//     constructor(n,a){
//         this.name = n
//         this.age = a
//     }

//     getage = ()=>{
//         console.log(this.age)
//     }


//     getname = ()=>{
//         console.log(this.name)
//     }
// }


// let u = new user("mohamed",30)

// u.getname()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then( resp => resp.json() )
// .then( json => console.log(json) )

// import {username,getdata} from './user.js'


// console.log(getdata())


// console.log("test 1")

// setTimeout(()=>{
//     console.log("test 2 1500")
// },1500)

// console.log("test 3")
let result = document.getElementById("result")
let items = ["item1","item2"]


// function addNewItem(callback){
//     setTimeout(()=>{
//         items.push("item3")
//         callback()
//     },3000)
// }

// function showItems(){
//     let data = ""
//     setTimeout(()=>{
//         items.forEach((value)=>{
//             data+= `<li>${value}</li>`
//         })
//         result.innerHTML = data
//     },1000)
// }

// addNewItem(showItems)



function addNewItem(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            items.push("item3")
            res()
        },3000)
    })
    
}

function showItems(){
    let data = ""
    setTimeout(()=>{
        items.forEach((value)=>{
            data+= `<li>${value}</li>`
        })
        result.innerHTML = data
    },1000)
}



addNewItem().then(showItems)