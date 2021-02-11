function controlInputsEjecucion(){
    var contLargoRGB = document.forms['frmConversor'].RGB.value;
    var contRedRGB = Number(contLargoRGB.substr(0,3));
    var contGreenRGB = Number(contLargoRGB.substr(4,3));
    var contBlueRGB = Number(contLargoRGB.substr(8,3));

    if ((document.forms['frmConversor'].RGB.value ==="")&& (document.forms['frmConversor'].HEX.value==="")){
        alert("Both fields empty.\nNo conversion will be done.");
    }else if(contLargoRGB.length ===11 && (contRedRGB >=0 && contRedRGB <=255 ) && (contGreenRGB >=0 && contGreenRGB <=255 ) && (contBlueRGB >=0 && contBlueRGB <=255 )){
        //REVISAR ESTAS CONDICIONES PORQUE SE SIGUE EJECUTANDO AUN CUANDO LOS VALORES RGB SON INCORRECTOS
        convertirValores();
        
    }else{
        alert("Check RGB value");
        document.forms['frmConversor'].RGB.value="";
        cambiaBoton();
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
function tarjetaPantone(_color){
    //ACTIVA TARJETA
    document.getElementById('tarjetaColorCSS').style.visibility= "visible";
    //LE DA COLOR
    document.getElementById('colorTarjeta').style.background = _color;
}
function convertirValores(){
    if((document.forms['frmConversor'].HEX.value ==="") && (document.forms['frmConversor'].RGB.value !=="")){
        //ESTE ES EL IF QUE COMPRUEBA EL VALOR DE HEX VACIO PARA TRABAJAR EN RGB
        var RGB = document.forms['frmConversor'].RGB.value;
        var redRGB = Number(RGB.substr(0,3));
        var greenRGB = Number(RGB.substr(4,3));
        var blueRGB = Number(RGB.substr(8,3));
        //ASIGNACION DE VARIABLES POR SEPARADO PARA OPERAR CON ELLAS. FUNCION NUMBER CONVIERTE EN NUMERO.
        redRGB = redRGB.toString(16).toUpperCase();
        greenRGB = greenRGB.toString(16).toUpperCase();
        blueRGB = blueRGB.toString(16).toUpperCase();
        //FUNCION .toString CONVIERTE NUMERO EN STRING HEXADECIMAL. FUNCION .toUpperCase LO PONE EN MAYUS
        if(redRGB.length === 1){
            redRGB = "0"+redRGB;
        }
        if(greenRGB.length === 1){
            greenRGB = "0"+greenRGB;
        }
        if(blueRGB.length === 1){
            blueRGB = "0"+blueRGB;
        }
        //CONTROLES PARA CUANDO LOS VALORES DE R,G,B SON <=16
        document.forms['frmConversor'].HEX.value=("#"+redRGB+greenRGB+blueRGB);
        //DAMOS VALOR AL INPUT EN HEX
        tarjetaPantone(document.forms['frmConversor'].HEX.value);
        //HACEMOS VISIBLE LA TARJETA Y CAMBIAMOS EL VALOR CON UNA FUNCION POR SEPARADO.
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