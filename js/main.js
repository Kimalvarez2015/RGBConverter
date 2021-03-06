function controlInputsEjecucion(){
    var contLargoRGB = document.forms['frmConversor'].RGB.value;
    var contRedRGB = Number(contLargoRGB.substr(0,3));
    var contGreenRGB = Number(contLargoRGB.substr(4,3));
    var contBlueRGB = Number(contLargoRGB.substr(8,3));

    if ((document.forms['frmConversor'].RGB.value ==="")&& (document.forms['frmConversor'].HEX.value ==="")){
        cambiaBoton();
        document.forms['frmConversor'].RGB.value="";
        document.forms['frmConversor'].HEX.value="";
    }else if(contLargoRGB.length ===11 && (contRedRGB >=0 && contRedRGB <=255 ) && (contGreenRGB >=0 && contGreenRGB <=255 ) && (contBlueRGB >=0 && contBlueRGB <=255 )){
        //REVISAR ESTAS CONDICIONES PORQUE SE SIGUE EJECUTANDO AUN CUANDO LOS VALORES RGB SON INCORRECTOS
        convertirValoresRGB();
        
    }else if ((document.forms['frmConversor'].RGB.value ==="") && (document.forms['frmConversor'].HEX.value !=="")){
        convertirValoresHEX();
    }else {
        cambiaBoton();
        document.forms['frmConversor'].RGB.value="";
        document.forms['frmConversor'].HEX.value="";
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
    //LE DA COLOR CON EL VALOR QUE VIENE DEFINIDO EN LA VARIABLE DE CLASE QUE LE DAMOS DESDE convertirValores()
    document.getElementById('colorTarjeta').style.background = _color;
}
function convertirValoresRGB(){
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
        document.forms['frmConversor'].HEX.value = ("#"+redRGB+greenRGB+blueRGB);
        //DAMOS VALOR AL INPUT EN HEX
        tarjetaPantone(document.forms['frmConversor'].HEX.value);
        //HACEMOS VISIBLE LA TARJETA Y CAMBIAMOS EL VALOR CON UNA FUNCION POR SEPARADO.
        redRGB = 0;
        greenRGB = 0;
        blueRGB = 0;
    // ELEMENTO PARA ENCENDER LA TARJETA PANTONE document.getElementById('tarjetaColorCSS').style.visibility= "visible";
}
function convertirValoresHEX(){
    var HEX = document.forms['frmConversor'].HEX.value;
    var redHEX = 0;
    var greenHEX = 0; 
    var blueHEX = 0;
    if(HEX.substr(0,1) !== "#"){
        HEX = "#" + HEX;
        document.forms['frmConversor'].HEX.value = HEX;
    }
    redHEX = parseInt(HEX.substr(1,2),16);
    greenHEX = parseInt(HEX.substr(3,2),16);
    blueHEX = parseInt(HEX.substr(5,2),16);
    //redHEX = HEX.substr(1,2);
    //greenHEX = HEX.substr(3,2);
    //blueHEX = HEX.substr(5,2);
    redHEX = redHEX.toString();
    greenHEX = greenHEX.toString();
    blueHEX = blueHEX.toString();
    if (redHEX.length !== 3){
        switch(redHEX.length){
            case 1: redHEX = "00"+redHEX
            case 2: redHEX = "0"+redHEX
        }
    }else if (greenHEX.length !== 3){
        switch(greenHEX.length){
            case 1: greenHEX = "00"+greenHEX
            case 2: greenHEX = "0"+greenHEX
        }
    }else if (blueHEX.length !== 3){
        switch(blueHEX.length){
            case 1: blueHEX = "00"+blueHEX
            case 2: blueHEX = "0"+blueHEX
        }
    }
    document.forms['frmConversor'].RGB.value =  ( redHEX + "," + greenHEX + "," + blueHEX)
    tarjetaPantone(document.forms['frmConversor'].HEX.value);
}