function controlInputsEjecucion(){
    var contLargoRGB = document.forms['frmConversor'].RGB.value;

    if ((document.forms['frmConversor'].RGB.value ==="")&& (document.forms['frmConversor'].HEX.value==="")){
        alert("Both fields empty.\nNo conversion will be done.");
    }else if(contLargoRGB.length ===11){
        convertirValores();
    
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
    if((document.forms['frmConversor'].HEX.value ==="") && (document.forms['frmConversor'].RGB.value !=="")){
        //ESTE ES EL IF QUE COMPRUEBA EL VALOR DE HEX VACIO PARA TRABAJAR EN RGB
        var RGB = document.forms['frmConversor'].RGB.value;
        var redRGB = Number(RGB.substr(0,3));
        var greenRGB = Number(RGB.substr(4,3));
        var blueRGB = Number(RGB.substr(8,3));
        //ASIGNACION DE VARIABLES POR SEPARADO PARA OPERAR CON ELLAS. FUNCION NUMBER CONVIERTE EN NUMERO.
        redRGB = redRGB.toString(16);
        greenRGB = greenRGB.toString(16);
        blueRGB = blueRGB.toString(16);
        //FUNCION TOSTRING PARA CONVERTIR VALORES A HEXADECIMAL
        document.forms['frmConversor'].HEX.value=("#"+redRGB+greenRGB+blueRGB);
        //DAMOS VALOR AL INPUT EN HEX
        document.getElementById('tarjetaColorCSS').style.visibility= "visible";
        document.getElementById('colorTarjeta').style.background = document.forms['frmConversor'].HEX.value;
        redRGB = 0;
        greenRGB = 0;
        blueRGB = 0;
    }else if ((document.forms['frmConversor'].RGB.value ==="") && (document.forms['frmConversor'].HEX.value !=="")){
        //ESTE ES EL IF QUE COMPRUEBA EL VALOR DE RGB VACIO PARA TRABAJAR EN HEX
        var HEX = document.forms['frmConversor'].HEX.value;
        document.forms['frmConversor'].RGB.value=HEX;
    }
    // ELEMENTO PARA ENCENDER LA TARJETA PANTONE document.getElementById('tarjetaColorCSS').style.visibility= "visible";
}