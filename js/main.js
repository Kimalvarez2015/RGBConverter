function ControlInputs(){
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
function Convertir(){
    ControlInputs();
    if (document.forms['frmConversor'].RGB.value ===""){
        alert("RGB empty! HEX IS "+ document.forms['frmConversor'].HEX.value );
    }else if(document.forms['frmConversor'].HEX.value===""){
        var RGB = document.forms['frmConversor'].RGB.value;
        alert(RGB);
    }
}