var age = parseInt(prompt("veuillez entrer votre age"));


if(Number.isInteger(age)){

        
            
            if(age >= 6 && age <= 17){
                console.log("Vous êtes mineur")
            }else if( age >18 && age <= 30){
                console.log("Vous etes majeurs");
            }
        }