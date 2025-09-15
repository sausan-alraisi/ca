// console.log(document)

// var tag = document.getElementsByTagName("div")


// tag[0].innerHTML = "<h1>hi mohamed </h1>"


// var result =  document.getElementById("result")
// result.innerText = "<h1>code academy</h1>"


// var test =  document.getElementsByClassName("test")
// console.log(test)


// var test = document.querySelectorAll("div")
// console.log(test)


// var result = document.getElementById("result")
// var click = document.getElementById("click")
// click.onclick = function(){
//     result.innerText = "hi hi hi hi"
// }

// var sliders = [
//     "imgs/2.webp",
//     "imgs/3.jpg",
//     "imgs/1.jpg"
// ]

// var next = document.getElementById("next")
// var img = document.getElementById("img")
// var i=0
// next.onclick = function(){
//     if(sliders.length<=i){
//         i=0
//     }
//    img.src =  sliders[i]
//    i++
// }


// var search = document.getElementById("search")
// var result = document.getElementById("result")
// search.onkeyup = function(){
//     var ajax = new XMLHttpRequest
//     ajax.open("GET","http://api.weatherapi.com/v1/current.json?key=b627adc120ca4636ad0162946243008&q="+search.value+"&aqi=no")
//     ajax.send()
//     ajax.onreadystatechange = function(){
//         if(ajax.readyState == 4){
//             var data = JSON.parse(ajax.response)
//             console.log(data.current.temp_c)
//             result.innerText = data.current.temp_c+" c"
//         }
//     }
// }




var click = document.getElementById("click")
var search = document.getElementById("search")
var img = document.getElementById("img")
var username = document.getElementById("username")
click.addEventListener("click",function(){
    var ajax = new XMLHttpRequest
    ajax.open("GET","https://api.github.com/users/"+search.value)
    ajax.send()
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            var data = JSON.parse(ajax.response)
            img.src = data.avatar_url
            username.innerText = data.name
        }
    }
})


// click.onclick = function (){
//     alert("test 1")
// }

// click.onclick = function (){
//     alert("test 2")
// }