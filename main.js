const lista = [ "francesco@gmail.com", "andrea@gmail.com",  " bonanno@gmail.com", "lorenzo@gmail.com", "pasquale@gmail.com", "a@gmail.com"];
btn.addEventListener("click", function(){   
    let emailUtente = document.getElementById("emailUtente").value;
    if (lista.some(e=> e == emailUtente)){
        document.getElementById("verificatore").innerHTML = "Sei autorizzato"
        let dadoUtente = Math.floor(Math.random()*6)+1
        document.getElementById("tu").innerHTML ="il tuo risultato  è : " + dadoUtente 
        let dadoBrowser = Math.floor(Math.random()*6)+1
        document.getElementById("computer").innerHTML = "il risultato del computer è : " + dadoBrowser
        
            if(dadoUtente > dadoBrowser){
                document.getElementById("risultato").innerHTML = "Hai vinto"
            } else{
                document.getElementById("risultato").innerHTML = "Hai perso"
            }
    } else{
        document.getElementById("verificatore").innerHTML = "Non sei autorizzato"
    }
})     
        

        