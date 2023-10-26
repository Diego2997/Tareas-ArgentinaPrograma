function bienvenidaUsuario() {
    const bienvenidaUsuario = document.querySelector("#bienvenida-usuario");
    const nombreDeUsuario = document.querySelector("#nombre-usuario").value;
    bienvenidaUsuario.innerText += ` ${nombreDeUsuario}`;
}
function mostrarDatos() {
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector(
        "#segundo-nombre-usuario"
    ).value;
    const apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;
    const infoUsuario = document.querySelector("#info-usuario");
    infoUsuario.innerText = `${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} ${edadUsuario}`;
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    bienvenidaUsuario();
    mostrarDatos();
});
