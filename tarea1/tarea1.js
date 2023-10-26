const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const salarioAnualUsuario = Number(
        document.querySelector("#salario-usuario").value
    );
    const salarioMensualUsuario = document.querySelector("#salario-mensual");
    salarioMensualUsuario.value = calcularSalarioMensual(salarioAnualUsuario);
});

function calcularSalarioMensual(salarioAnual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioAnual / cantidadMesesEnUnAnio;
}
