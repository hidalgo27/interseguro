
import Vue from 'vue'
import axios from "axios"
import tienda from "./../store/common"

var usuarioInactivo = false;
var time;

let objJWT = JSON.parse(localStorage.getItem("jwt"))
function getUsuarioActivo() {
    console.log('Entro')
    axios.post(process.env.baseURL + 'manage/v1/remarketing/send/' + objJWT.common.codigoRemarketingGenerado)
        .then(function (response) {
            usuarioInactivo = true
        })
        .catch(function (error) {
        })
        .then(function () {
        })
}

function logout() {
    objJWT = JSON.parse(localStorage.getItem("jwt"))

    if (objJWT.common.nuevoProducto == false) {
        if (objJWT.common.email !== null) {
            if (objJWT.common.email.includes("test_")) {
                console.log("ooooooooooo");
            } else {
                if (objJWT.common.codigoRemarketingGenerado) {
                    console.log(usuarioInactivo)
                    if (usuarioInactivo == false) {
                        console.log("U-getUsuarioActivo");
                        getUsuarioActivo()
                    } else {
                        console.log("-o-o-o-o-o-o");
                    }
                } else { }
            }
        }
    }
}

window.addEventListener("beforeunload", function (e) {
    console.log(window.location.pathname)
    if (window.location.pathname == '/vehicular/' ||
        window.location.pathname == '/vehicular/app/' ||
        window.location.pathname == '/vehicular/majorel/in' ||
        window.location.pathname == '/vehicular/majorel/out' ||
        window.location.pathname == '/vehicular/majorel/lead' ||
        window.location.pathname == '/vehicular/biznes/lead') {
        console.log("-o-o-oo-o-o-o-")
    } else {
        objJWT = JSON.parse(localStorage.getItem("jwt"))
        var confirmationMessage = "\o/";
        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        logout()
        return confirmationMessage;
    }

});



var inactivityTime = function () {
    usuarioInactivo = false;
    window.onload = resetTimer;
    document.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer;
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;
    document.onscroll = resetTimer;
    document.onkeypress = resetTimer;

    function resetTimer() {
        clearTimeout(time)
        time = setTimeout(logout, 300000)
    }

};
console.log("-----------------")
inactivityTime()

let seconds = 5000;
let myVar;
function initTimer() {
    myVar = setTimeout(() => {
        if (window.location.pathname == '/vehicular/' ||
            window.location.pathname == '/vehicular/app/' ||
            window.location.pathname == '/vehicular/majorel/in' ||
            window.location.pathname == '/vehicular/majorel/out' ||
            window.location.pathname == '/vehicular/majorel/lead' ||
            window.location.pathname == '/vehicular/biznes/lead') {
            console.log("-o-o-oo-o-o-o-2222")
        } else {
            objJWT = JSON.parse(localStorage.getItem("jwt"))
            logout()
        }
    }, seconds);
}
function handleVisibilityChange() {
    if (document.hidden) {
        initTimer();
    } else {
        clearTimeout(myVar);
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);