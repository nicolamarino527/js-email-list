// Descrizione
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

// scriviamo le varibili input
const endPoint = `https://flynn.boolean.careers/exercises/api/random/mail`;
const emailList = document.getElementById('email-list');
let emailNumber = 10;


// creare una funzione per richiamare un a mail tramie  axios ad un api
function giveEmail() {
    for (let i = 0; i < emailNumber; i++) {
        axios.get(endPoint) 
        // se la risposta è p ositiva
        .then(response => {
            const result = response.data.response; 
            emailList.innerHTML += `<li  id="list">${result}</li>`;
        })
        // se la risposta è negativa
        .catch(error => {
            console.error(error); 
        });
    }
};
    
giveEmail();