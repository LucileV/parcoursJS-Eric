// Exercice 8
// 
// 
 var chiffre = prompt("Choisi un nombre entre 0 et 100")
      
function majeur(){

    var age  = document.getElementById('age').value;  

	    if( age >= 18 ){

	    document.getElementById("result").innerHTML = ("Vous avez " + age + ", vous êtes donc majeur");

	    }else{

    	document.getElementById("result").innerHTML = ("Vous avez " + age + " ans, vous êtes donc mineur");

    }

}