const lista = [ "francesco@gmail.com", "andrea@gmail.com",  " bonanno@gmail.com", "lorenzo@gmail.com", "pasquale@gmail.com" ];
let emailUtente = prompt("inserisci email")

if (lista.some(e=> e == emailUtente)){
    alert("sei autorizzato")
    let dadoUtente = Math.floor(Math.random()*6)+1
    console.log(dadoUtente)
    let dadoBrowser = Math.floor(Math.random()*6)+1
    console.log(dadoBrowser)
        if(dadoUtente > dadoBrowser){
            alert("hai vinto")
        } else{
            alert("hai perso")
        }
} else{
    alert("non sei autorizzato")
}