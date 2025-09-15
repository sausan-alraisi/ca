// console
// window
// document

// console.log("test")


// alert("hi")
// window.alert("hi")
// this.alert("hi")
// console.log(this)

// var FirstName = 10
//  var x = 30

// var age = 10
// var price = 22.5
// var fname = "mohamed"
// var statusx  = true
// var fi = ['red','green']
// var ob =  {n:10,x:5}
// console.log(  typeof ob  )
// console.log(20 > 5)


// var colors = ['red','green','blue']

// console.log( colors.length  )



// let i = 20;

// for(let i=0;i<10;i++){
//     console.log(i) 
// }

// console.log(i)
// console.log(i)



// console.log(10+20)

// if(10<8){
//     console.log("success")
// }else if(){

// }else {
//     console.log("error")
// }

// var deg = prompt("deg ? ")

// if(deg <= 50){
//     console.log("f")
// }else if(deg >=50 && deg <= 60){
//     console.log("d")
// }
// else if(deg >=61 && deg <= 70){
//     console.log("c")
// }
// else if(deg >=71 && deg <= 90){
//     console.log("b")
// }else if(deg >=91 && deg <= 100){
//     console.log("a")
// }else {
//     console.log("error")
// }
// console.log(deg)



// for(var i=0;i<10;i++){
//     console.log(i)
// }


// var i =0
// while(i<10){
//     console.log(i)
//     i++
// }


// var i =0
// while(i<10){
//     console.log(i)
//     i++
// }

// function sayhi(n){
//     // console.log("HI "+n)
//     // console.log("tres")
//     return "hi "+n
// }




// console.log(sayhi("mohamed"))



// var sayhi = function(){
//     console.log("hi")
// }



// sayhi()



// mohamed is sd
// mohamed sd

// function removeword(txt,word){
//     var newword =  txt.replace(word,"")
//     console.log(newword)
// }



// function removeword(txt,word){
//     var newtxt=  txt.split(" ")
//     for(var i=0;i<newtxt.length;i++){
//         if(newtxt[i] == word){
//             newtxt[i] = " "
//         }
//     }
//     console.log(newtxt.join(" "))
// }


// removeword("mohamed is dd","mohamed")



// var user = { name:"mohamed",age:30 }

// console.log(user.name)

// var users = [
//     { name:"mohamed",age:30 },
//     { name:"ahmed",age:40 },
//     { name:"ramy",age:50 }
// ]

// for(var i=0;i<users.length;i++){
//     console.log("name is : "+users[i].name+" and age is : "+users[i].age)
// }

// console.log(users[1][])
// 01065469647
// function dobulen(n){
//     var num = n.replaceAll("0","00")
//     var num = num.replaceAll("1","11")
//     return num
// }

// console.log(dobulen('0106540696147'))


// var numbers =  [5,7,9,5,6,3,7,0]

// for(var i=0;i<numbers.length;i++){
//     if(numbers[i] % 3 == 0){
//         console.log(i+" => "+numbers[i])
//     }
// }


// get element
// set value 
// event



// var password = document.getElementById("password")
// var show = document.getElementById("show")

// show.onclick = function(){
//     if(password.type == "password"){
//         password.type = "text"
//         show.innerText = "hide"
//     }else {
//         password.type = "password"
//         show.innerText = "show"

//     }
// }


var text = document.getElementById("text")
var count = document.getElementById("count")
var result = document.getElementById("result")

text.onkeyup = function(){
    if(text.value.length >= 20){
       text.classList.add("dangor")  
    }else{
        text.classList.remove("dangor")  
    }
    result.innerText = text.value
    count.innerText = "count is : "+text.value.length
}