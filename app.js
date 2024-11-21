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
let wrapper = document.getElementsByClassName("wrapper")[0];
let btn = document.getElementsByClassName("button")[0];
let preview = document.getElementsByClassName("preview")[0];

// document
//   .getElementsByClassName("button")[0]
//   .addEventListener("click", function () {
btn.addEventListener("click", function () {
  fetch("pizzas.json")
    .then(
      (
        wrapper //une fois que le fichier est chargé
      ) => wrapper.json()
    ) //convertissons le en json
    .then((data) => {
      //une fois le fiechier converti
      console.log(data);
      affichePizza(data); //appelons notre fonction
    });
});
//   });

function affichePizza(_data) {
  wrapper.innerHTML += _data.Name + "<br>" + _data.Slogan + "<br>";

  let carte;
  let pizza;
  let nom;
  let image;
  let prix;
  let ingredients;

  for (let i = 0; i < _data.Pizzas.lenght; i++) {
    carte = document.createElement("div");
    carte.setAttribute("class", "carte");

    pizza = document.createElement("div");

    nom = document.createElement("h2");
    nom.setAttribute("class", "nom");
    nom.innerHTML = _data.Pizzas[i].Nom;
    pizza.appendChild(nom);

    prix = document.createElement("h3");
    prix.setAttribute("class", "nom");
    prix.innerHTML = _data.Pizzas[i].Prix;
    pizza.appendChild(prix);

    image = document.createElement("img");
    image.setAttribute("class", "img");
    image.src = _data.Pizzas[i].Image;
    pizza.appendChild(image);

    carte.appendChild(pizza);
  }
  preview.appendChild(carte);
}
