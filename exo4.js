var prenom = prompt("veuillez entrer votre prenom");
var age = parseInt(prompt("veuillez entrer votre age"));


if(age >= 0 && age <= 17 && prenom === 'julie' || prenom === 'elisa'){
    console.log("ce n'est pas pour vous rentrée");
}else if(age >= 0 && age <=17){
    console.log("eclater vous les coupaing");
}else if(age >= 18 && age <= 20 && prenom === 'jean' || prenom === 'pierrot'){
    console.log("Bienvenue patron");
}else if(age >=20 && age <= 70){
    console.log("degagez l'entrer vous est interdit");
}