// Exercice 7

    function PointureAnnee (){

      var pointure  = document.getElementById('pointure').value;  
      var annee 	= document.getElementById('annee').value; 

      var pointure2 = pointure * 2;
      var ajouter5 	= pointure2 + 5;
      var multi50 	= ajouter5 * 50;
      var sousAnnee = multi50 - annee;

      var resultat  = sousAnnee + 1766;

      document.getElementById("result").innerHTML = ("Le résultat est " + resultat);
    	
    }
