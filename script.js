// Ajouter produit
const form = document.getElementById("productForm");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const nom = document.getElementById("nom").value;
        const quantite = document.getElementById("quantite").value;
        const prix = document.getElementById("prix").value;
        const categorie = document.getElementById("categorie").value;

        const produit = {nom, quantite, prix, categorie};

        let produits = JSON.parse(localStorage.getItem("produits")) || [];
        produits.push(produit);

        localStorage.setItem("produits", JSON.stringify(produits));

        alert("Produit ajouté avec succès !");
        form.reset();
    });
}

// Afficher produits
const tableBody = document.getElementById("tableBody");

if(tableBody){
    let produits = JSON.parse(localStorage.getItem("produits")) || [];

    produits.forEach(p => {
        let row = `
            <tr>
                <td>${p.nom}</td>
                <td>${p.quantite}</td>
                <td>${p.prix} FC</td>
                <td>${p.categorie}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


// ================= RAPPORT =================
const nbProduits = document.getElementById("nbProduits");
const quantiteTotale = document.getElementById("quantiteTotale");
const valeurTotale = document.getElementById("valeurTotale");

function genererRapport(){
    let produits = JSON.parse(localStorage.getItem("produits")) || [];

    let totalProduits = produits.length;
    let totalQuantite = 0;
    let totalValeur = 0;

    produits.forEach(p => {
        totalQuantite += p.quantite;
        totalValeur += p.quantite * p.prix;
    });

    if(nbProduits) nbProduits.textContent = totalProduits;
    if(quantiteTotale) quantiteTotale.textContent = totalQuantite;
    if(valeurTotale) valeurTotale.textContent = totalValeur;
}

genererRapport();
