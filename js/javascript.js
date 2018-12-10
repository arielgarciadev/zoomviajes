//cargar primero el html
// window.onload=function() {

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var recomendado = document.getElementById("recomendado");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
recomendado.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

   var promedio;
   var result;

   function check()

   {

      var question;
      var value1;
      var value2;
      var value3;
      
      question = 1;
      value1 = 0;
      value2 = 0;
      value3 = 0;

      var choice;

     
      
      for (question = 1; question <= 5; question++) {
      
         var q = document.forms['quiz'].elements['q'+question];

            for (var i = 0; i < q.length; i++) {
               if (q[i].checked) {
                  choice = q[i].value;
                  }
            }

            if (choice == "value1") {
               value1++;
            }

            if (choice == "value2") {
               value2++;
            }

            if (choice == "value3") {
               value3++;
            }

         }

      promedio = [(value1 * 1 + value2 * 2 + value3 * 3) / 5 ];

      
      if (promedio < 1.61 && promedio >= 1) {
          result = "lugares-tranquilos";
      }

      else if (promedio < 3.01 && promedio >= 2.4) {
          result = "lugares-festivos";
      }

      else if (promedio < 2.4 && promedio > 1.6) {
          result = "lugares-intermedios";
      }
      else {
         result = "index3";
         alert("Eligue todas las opciones")
      }

      window.location = result + '.html';


   }
// }
