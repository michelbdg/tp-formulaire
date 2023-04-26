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
      if('password' == $('#password').attr('type') && $('#password2').attr('type')){
         $('#password').prop('type', 'text');
         $('#password2').prop('type', 'text');
      }else{
         $('#password').prop('type', 'password');
         $('#password2').prop('type', 'password');
      }
   });

   //Afficher la valeur numérique 
   $('#customRange1').click(function(){
      $('#customRange1').val('#customRange1');
   });
});