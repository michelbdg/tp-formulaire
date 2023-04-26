function envoyer(){
   localStorage.setItem("genre", document.getElementById('etat').value);
   localStorage.setItem("nom", document.getElementById('name').value);
   localStorage.setItem("prenom", document.getElementById('firstname').value);
   localStorage.setItem("date", document.getElementById('datetime').value);
   localStorage.setItem("mdp", document.getElementById('password').value);
   localStorage.setItem("mdp2", document.getElementById('password2').value);
   window.location = "connexion.html";
};

function annuler(){

};


$(document).ready(function(){
   //Afficher le nom complet 

   $('#nomComplet').val(localStorage.getItem("genre") + 
   " " + 
   localStorage.getItem("nom") +
   " " +
   localStorage.getItem("prenom")
   );


  //Afficher les mots de passe 

   $('#flexCheckDefault').click(function(){
      //le mot de passe apparait
      $('#password').attr('type', 'text').show();
      $('#password2').attr('type', 'text').show();

      //le mot de passe disparait
      $('#password').attr('type', 'text').hide();
   });

   //Afficher la valeur numérique 
   $('#customRange1').click(function(){
      $('#customRange1')
   });
});