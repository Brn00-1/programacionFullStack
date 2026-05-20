console.log("Hola mundo");

let nombre = prompt("¿Cómo te llamas?"); 
console.log("Hola " + nombre);

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
console.log("La suma de " + numero1 + " y " + numero2 + " es: " + (numero1 + numero2));

let edad = parseInt(prompt("¿Cuántos años tienes?"));
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}


let numero = parseInt(prompt("Ingresa un número para verificar si es par o impar:"));
if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}



let numeros = prompt("Ingresa una lista de números separados por comas:");
console.log("el numero mayor es: " + Math.max(...numeros.split(",").map(Number)));


let nota = parseFloat(prompt("Ingresa tu nota (1-10):"));
if (nota >= 5 && nota < 5) {
    console.log("Insuficiente");
} else if (nota >= 5 && nota < 7) {
    console.log("Aceptable");
} else if (nota >= 8 && nota < 10) {
    console.log(" Muy Bien");
}



let contador = 1;
for (; contador <= 10; contador++) {
    console.log("Contador: " + contador);
}

console.log("Números pares del 1 al 20:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}



let contraseña=prompt("Ingresa tu contraseña:");
if (contraseña === "1234") {
    console.log("Correcto.");
} else {
    console.log("Incorrecta.");
}


let sistema = prompt("dame un numero ");
while (sistema > 0) {
    console.log("dame un numero ");
    sistema = prompt("dame un numero ");
  
    if (sistema == 0) {
        console.log("fin del programa");

}     
}


let numero3 = parseFloat(prompt("Ingresa el primer número:"));
let numero4 = parseFloat(prompt("Ingresa el segundo número:"));
console.log("La suma de " + numero3 + " y " + numero4 + " es: " + (numero3 + numero4));
console.log("La resta de " + numero3 + " y " + numero4 + " es: " + (numero3 - numero4));
console.log("La multiplicación de " + numero3 + " y " + numero4 + " es: " + (numero3 * numero4));
console.log("La división de " + numero3 + " y " + numero4 + " es: " + (numero3 / numero4));

