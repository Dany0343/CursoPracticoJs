let obj = {
    nombre: "Oscar",
    edad: 21,
    escuela: "IPN",
}
function myFun(obj) {
    for(let element in obj) {
        console.log(element)
    }
}
myFun(obj);
