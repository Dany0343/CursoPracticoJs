let nombre = "Oscar";
let apellido = "Bucio"; 
let usuario = "Dany0343";
let edad = 21;
let correo = "oscarbucio2001@gmail.com";
let mayorEdad = true;
let ahorrado = 39939294329;
let deudas = 0;



console.log(`El nombre es: ${nombre} ${apellido}`);
console.log(`El dinero real es: ${ahorrado - deudas}`);




const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


function fullName (name, lastname, nickname) {
    return `Mi nombre es: ${name + lastname}, pero prefiero que me digas ${nickname}.`;
}
const name = prompt("Introduce tu nombre");
const lastname = prompt("Introduce tus apellidos");
const nickname = prompt("Introduce tu nickname");

name = fullName(name,lastname,nickname);
console.log(name);










const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


const tipoDeSuscripcion = "Basic";
if(tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else {
    console.log("No tienes ningun tipo de suscripción, wow");
}

let userSuscripton = 'Expert';
let suscriptions = ["Free", "Basic", "Expert", "ExpertPlus"];
let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

suscriptions.forEach(element => {
    if(userSuscripton == element) {
        let index = suscriptions.indexOf(element);
        console.log(`Tu tipo de suscripción es: ${userSuscripton}. ${infoSuscripción[index]}`);
    }
});








for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}



let i = 0;
while(i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

let i = 10;
while(i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

while(true){
    let response = parseInt(prompt("Cuanto es 2 + 2"));

    if(response === 4) {
        console.log("Correcto!");
        break
    }
    else {
        console.log("Intentalo de nuevo");
    }
}



let array = [{nombre:"hola", casa:"infona"}];
console.log(array)

let obj = {
    nombre: [1,2,3],
    edad: [23,43,23]
}

console.log(obj.nombre[0]);







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

