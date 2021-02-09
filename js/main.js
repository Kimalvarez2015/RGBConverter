function ControlInputs(){
    if ((document.forms['frmConversor'].RGB.value ==="")&& (document.forms['frmConversor'].HEX.value==="")){
        alert("Both fields empty!");
    }else if (document.forms['frmConversor'].RGB.value ===""){
        alert("RGB empty! HEX IS "+ document.forms['frmConversor'].HEX.value );
    }else if(document.forms['frmConversor'].HEX.value===""){
        alert("HEX empty!")
    }
}
function Convertir(){
    ControlInputs();
}