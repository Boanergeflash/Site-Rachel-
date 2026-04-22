let form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    
    event.preventDefault()
   
    // je récupère les informations 

    const nom = document.getElementById("nom").value 
    const prenom = document.getElementById("prenom").value
    const telephone= document.getElementById("telephone").value
    const email= document.getElementById("e-mail").value

    // je récupère le packs selectioné

    let choixpak=document.querySelectorAll(`input[name="pack"]`)
    let choix=""
    for(let i=0; i<choixpak.length;i++){
        if(choixpak[i].checked){
            choix=choixpak[i].value
            break
        }
    }


    // je récupère le message 
    const message = document.getElementById("message").value

    // je crée un message personnalisé 
    let texteafichage=`merci a vous m. ${prenom} 
    vous avez choisi le pack ${choix} 
    je vous contacte sur ce numéro ${telephone}
    pour confirmer la réception de vos données`

    
    let zoneafiche=document.querySelector(".zoneafich em")
    zoneafiche.innerText=texteafichage
    console.log(zoneafiche)



    // envoi vers Google Sheets
    fetch("TON_URL_APPS_SCRIPT", {
        method: "POST",
        body: JSON.stringify({
            nom,
            prenom,
            telephone,
            email,
            choix,
            message
        })
    })
    .then(res => res.text())
    .then(data => console.log("Envoyé :", data))
    .catch(err => console.error("Erreur :", err))
 
})