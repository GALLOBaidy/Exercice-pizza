// necessaire pour certains types d'API (on pourrait mettre les infos d'authentification à l'interieur)
// var requestOptions = {
//     method: "GET",
//     mode: "no-cors",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     redirect: "follow",
// };

//Allons chercher notre fichier json

document.getElementsByClassName("button")[0].addEventListener("click", function () {
    fetch("pizzas.json")
        .then((wrapper) => //une fois que le fichier est chargé
            wrapper.json()) //convertissons le en json
        .then((data) => { //une fois le fiechier converti
            console.log(data);
            affichePizza(data); //appelons notre fonction
        })

})

function affichePizza(_data) {
    let wrapper = document.getElementsByClassName("wrapper")[0];
    let btn = document.getElementsByClassName("button")[0];
    let preview = document.getElementsByClassName("preview")[0];

    wrapper.innerHTML += _data.Name + "<br>"
        + _data.Slogan + "<br>";
        let listPiz ="";
         for (i =0; i<_data.Pizzas.lenght;i++){
            let list = _data.Pizzas[i];
            listPiz += Pizzas.Nom + "<br" + Pizzas.Image;
         };
         preview.innerHTML = listPiz;
}