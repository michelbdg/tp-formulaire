function donnee(){
    document.getElementById("titre").innerHTML = "<h3> Bonjour  " +
    localStorage.getItem("genre") + " " + localStorage.getItem("nom") + " " +
    localStorage.getItem("prenom") +" vous êtes né(e) le "+ localStorage.getItem("date");
}
