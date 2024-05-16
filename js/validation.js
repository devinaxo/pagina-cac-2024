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

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
})();