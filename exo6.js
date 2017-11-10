// Exercice 6
      
 

    function diviser (){

      var entier = document.getElementById('premier_nombre').value;
      var decimal = document.getElementById('deuxieme_nombre').value; 
      var resultat = parseInt(entier) / decimal;


      document.getElementById("result").innerHTML = ("Les résultat de ce calcule est " + resultat);
    
    }
