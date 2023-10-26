const $horasInput = document.querySelector("#horas-input");
const $minutosInput = document.querySelector("#minutos-input");
const $segundosInput = document.querySelector("#segundos-input");
const $botonCalcular = document.querySelector("#boton-calcular");
const $horasTotales = document.querySelector("#horas-totales");
const $minutosTotales = document.querySelector("#minutos-totales");
const $segundosTotales = document.querySelector("#segundos-totales");
const $cantidadVideos = document.querySelector("#cantidad-videos");

let cantidadVideos = 0;

$botonCalcular.onclick = function () {
    const horas = Number($horasInput.value);
    const minutos = Number($minutosInput.value);
    const segundos = Number($segundosInput.value);

    let horasTotales = Number($horasTotales.value);
    let minutosTotales = Number($minutosTotales.value);
    let segundosTotales = Number($segundosTotales.value);

    horasTotales += horas;
    minutosTotales += minutos;
    segundosTotales += segundos;

    const UNIDAD_SEGUNDOS_MINUTOS = 60;

    while (segundosTotales >= UNIDAD_SEGUNDOS_MINUTOS) {
        segundosTotales -= UNIDAD_SEGUNDOS_MINUTOS;
        minutosTotales++;
    }

    while (minutosTotales >= UNIDAD_SEGUNDOS_MINUTOS) {
        minutosTotales -= UNIDAD_SEGUNDOS_MINUTOS;
        horasTotales++;
    }

    $horasTotales.value = horasTotales;
    $minutosTotales.value = minutosTotales;
    $segundosTotales.value = segundosTotales;

    cantidadVideos++;
    $cantidadVideos.value = cantidadVideos;
};
