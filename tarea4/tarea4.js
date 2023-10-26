const $listaNumeros = document.querySelectorAll("li");
const $promedio = document.querySelector("#promedio");
const $numeroMasChico = document.querySelector("#numero-chico");
const $numeroMasGrande = document.querySelector("#numero-grande");
const $numeroRepetido = document.querySelector("#numero-repetido");

let sumaPromedio = 0;
let numeros = [];
for (let i = 0; i < $listaNumeros.length; i++) {
    sumaPromedio += Number($listaNumeros[i].textContent);
    numeros.push(Number($listaNumeros[i].textContent));
}

$promedio.innerText = `El promedio es ${sumaPromedio / $listaNumeros.length}`;
$numeroMasChico.innerText = `El numero mas chico es ${Math.min(...numeros)}`;
$numeroMasGrande.innerText = `El numero mas grande es ${Math.max(...numeros)}`;

// ========================================================================================

let arrayNumerosRepetidos = [14, 10, 9, 15, 14, 11, 15, 10, 10, 10];
let numeroQueMasSeRepite = 0;
let vecesQueSeRepite = 0;

for (let i = 0; i < arrayNumerosRepetidos.length; i++) {
    let contador = 0;

    for (let j = 0; j < arrayNumerosRepetidos.length; j++) {
        if (arrayNumerosRepetidos[i] === arrayNumerosRepetidos[j]) {
            contador++;
        }
    }

    if (contador > vecesQueSeRepite) {
        numeroQueMasSeRepite = arrayNumerosRepetidos[i];
        vecesQueSeRepite = contador;
    }
}

$numeroRepetido.textContent = `El numero que mas se repite es ${numeroQueMasSeRepite}, se repite ${vecesQueSeRepite} veces`;
