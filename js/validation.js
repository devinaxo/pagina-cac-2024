$(document).ready(function(){
    //Permite ingresar únicamente letras en la casilla de nombre
    $('#name').keypress(function(e){
        if(String.fromCharCode(e.keyCode).match(/[^a-zA-Z áéíóú ÁÉÍÓÚ]/gi)) return false;
    });
    //Permite ingresar únicamente números en la casilla de teléfono
    $('#phone').keypress(function(e){
        if(String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
    });
});