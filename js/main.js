function controlInputs(){
    if ((document.forms['frmConversor'].RGB.value ==="")&& (document.forms['frmConversor'].HEX.value==="")){
        alert("Both fields empty.\nNo conversion will be done.");
    }
}
function cambiaBoton(){
    //Cambia el color de fondo del boton dependiendo de si alguno de los input texts tiene contenido o no.
    if ((document.forms['frmConversor'].RGB.value !=="") || (document.forms['frmConversor'].HEX.value!=="")){
        document.forms['frmConversor'].boton.style.backgroundColor= "#52b788";
    }else if ((document.forms['frmConversor'].RGB.value ==="") && (document.forms['frmConversor'].HEX.value ==="")){
        document.forms['frmConversor'].boton.style.backgroundColor= "#e56b6f";
    }
}
function vaciaRGB(){
    if(document.forms['frmConversor'].HEX.value !==""){
        document.forms['frmConversor'].RGB.value="";
        cambiaBoton();
    }
}
function vaciaHEX(){
    if(document.forms['frmConversor'].RGB.value !==""){
        document.forms['frmConversor'].HEX.value="";
        cambiaBoton();
    }
}
function convertirValores(){
    controlInputs();
    if(document.forms['frmConversor'].HEX.value===""){
        //ESTE ES EL IF QUE COMPRUEBA EL VALOR DE HEX VACIO PARA TRABAJAR EN RGB
        var RGB = document.forms['frmConversor'].RGB.value;
        document.forms['frmConversor'].HEX.value=RGB;
    }else if (document.forms['frmConversor'].RGB.value ===""){
        //ESTE ES EL IF QUE COMPRUEBA EL VALOR DE RGB VACIO PARA TRABAJAR EN HEX
        var HEX = document.forms['frmConversor'].HEX.value;
        document.forms['frmConversor'].RGB.value=HEX;
    }
    // ELEMENTO PARA ENCENDER LA TARJETA PANTONE document.getElementById('tarjetaColorCSS').style.visibility= "visible";
}