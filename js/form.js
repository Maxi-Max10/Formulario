const form = document.querySelector("form");

const dni = document.getElementById("dni");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const domicilio = document.getElementById("domicilio");
const localidad = document.getElementById("localidad");
const codP = document.getElementById("codP");
const provincia = document.getElementById("provincia");
const sexoM = document.getElementById("sexoM");
const sexoF = document.getElementById("sexoF");
const estudios1 = document.getElementById("estudios1");
const estudios2 = document.getElementById("estudios2");
const estudios3 = document.getElementById("estudios3");
const estudios4 = document.getElementById("estudios4");
const estudios5 = document.getElementById("estudios5");
const cursos = document.getElementById("cursos");
const listI = document.querySelectorAll(".form-input");

/**                         hvshdvhsdvhasvahs                       */

form.addEventListener("submit", (e) => {
    var condition = validarF();
    if (!condition) {
        e.preventDefault();        
              
    }else{
        alert('enviado correctamente');
        
    }    
    
});

function validarF() {
    let condition = true;

    listI.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    if(dni.value.length < 1 || dni.value.trim() == "" || isNaN(dni.value)){
        mostrar_mensaje("dni", "*DNI inválido")
        condition = false;
      /*  let element = document.querySelector(".dni"); AÑADO ESTA CLASE AL DIV
        element.lastElementChild.innerHTML = "*Campo vacío"; LE DIGO QUE TOME AL ULTIMO HIJO <p> */
    }

    if(nombre.value.length < 1 || nombre.value.trim() == ""){
        mostrar_mensaje("nombre", "*Nombre inválido")
        condition = false;
    }
    if(apellido.value.length < 1 || apellido.value.trim() == ""){
        mostrar_mensaje("apellido", "*Apellido inválido")
        condition = false;
    }
    if(domicilio.value.length < 1 || domicilio.value.trim() == ""){
        mostrar_mensaje("domicilio", "*Domicilio inválido")
        condition = false;
    }
    if(localidad.value.length < 1 || localidad.value.trim() == ""){
        mostrar_mensaje("localidad", "*Localidad inválido")
        condition = false;
    }
    if(codP.value.length < 1 || codP.value.trim() == "" || isNaN(codP.value)){
        mostrar_mensaje("codP", "*Cod.P inválido")
        condition = false;
    }
    if(provincia.value.length < 1 || provincia.value.trim() == ""){
        mostrar_mensaje("provincia", "*Provincia inválido")
        condition = false;
    }
    if(!sexoM.checked && !sexoF.checked){
        mostrar_mensaje("sexoM", "*Seleccione una opción")
        condition = false;        
    }else {
        mostrar_mensaje("sexoM", "")
    }
    if(!estudios1.checked && !estudios2.checked && !estudios3.checked && !estudios4.checked && !estudios5.checked){
        mostrar_mensaje("estudios1", "*Seleccione estudios correspondientes")  
        condition = false;   
    }else{
        mostrar_mensaje("estudios1", "")        
    }
    if(cursos.value == ""){
        mostrar_mensaje("cursos", "*Seleccione una o más opciones")
        condition = false;
    }else{
        mostrar_mensaje("cursos", "")
        
    }
    return condition;
    
}

function mostrar_mensaje(claseI, mensaje){
    let element = document.querySelector(`.${claseI}`);
    element.lastElementChild.innerHTML = mensaje;
}
