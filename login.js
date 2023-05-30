const NOMBRE = document.getElementById("nombre");
const APPAT = document.getElementById("appat");
const APMAT = document.getElementById("apmat");
const CONTRASEÑA = document.getElementById("contraseña");
const SUBMIT = document.getElementById("submit");

let nombreUsuario = "";
let appatUsuario = "";
let apmatUsuario = "";
let contraseña = "";

NOMBRE.addEventListener("change", function () {
    nombreUsuario = NOMBRE.value;
});

APPAT.addEventListener("change", function () {
    appatUsuario = APPAT.value;
});

APMAT.addEventListener("change", function () {
    apmatUsuario = APMAT.value;
});

CONTRASEÑA.addEventListener("change", function () {
    contraseña = CONTRASEÑA.value;
});

SUBMIT.addEventListener("click", function () {
    if (nombreUsuario === "" || nombreUsuario === "" ||  nombreUsuario === ""  || contraseña === "") {
        alert("Rellena los campos requeridos");
    } else {
        localStorage.setItem("nombre", nombreUsuario);
        localStorage.setItem("appat", appatUsuario);
        localStorage.setItem("apmat", apmatUsuario);
        localStorage.setItem("contraseña", contraseña);
        window.location.href = "./productos.html";
    }
});