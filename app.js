

// Récupère une liste de collaborateurs (format JSON)
// ********** DÉBUT RÉCUPÉRATION **********
$.ajax({
    type: "GET",
    url: "http://localhost:8080/sgp/api/collaborateurs",
    dataType: "json",
    success: listerCollaborateurs,
    error : function(e) {console.log("request failed",e);}
});

function listerCollaborateurs(data) {

    if(data) { // Si data n'est pas "null/vide/égal à 0/non défini/faux"

        console.log(data)

        for(i=0 ; i<data.length ; i++) {

            var matricule = data[i]["matricule"];
            var nom = data[i]["nom"];
            var prenom = data[i]["prenom"];

            $("#tableJs").find("tbody")
                .append("<tr><td>" 
                    + matricule + "</td><td>" 
                    + nom + "</td><td>" 
                    + prenom 
                + "</td></tr>")


        }
    }


}
// ********** FIN RÉCUPÉRATION **********

