var  setupListeners = function () {
    var btn=document.getElementById('btn');
    btn.addEventListener('click',ajoutervente);  
}
window.addEventListener('load',setupListeners);

var ajoutervente=function(){
    //traitement avec DOM pour ajouter une vente dans le tableau
    var produit=document.getElementById('prod').value;
    var qte=document.getElementById('qte').value;
    var prix=document.getElementById('prix').value;
   var total=parseInt(qte)*parseFloat(prix);

    var tbody=document.querySelector('#tabvente tbody');
    var trvente=document.createElement('TR');
    tbody.appendChild(trvente);

    var tbodytr=tbody.lastChild;
    //td1
    var td1=document.createElement('TD');
    tbodytr.appendChild(td1);
//contenu td1
    var txttd1=document.createTextNode(produit); 
    td1.appendChild(txttd1);

    //td2
    var td2=document.createElement('TD');
    tbodytr.appendChild(td2);
//contenu td2
    var txttd2=document.createTextNode(qte); 
    td2.appendChild(txttd2);

     //td3
     var td3=document.createElement('TD');
     tbodytr.appendChild(td3);
 //contenu td3
     var txttd3=document.createTextNode(parseFloat(prix).toFixed(3)); 
     td3.appendChild(txttd3);

      //td4
    var td4=document.createElement('TD');
    tbodytr.appendChild(td4);
//contenu td4
    var txttd4=document.createTextNode(parseFloat(total).toFixed(3)); 
    td4.appendChild(txttd4);
    }
  function Supprimer(produit) {
        if (produit.options.selectedIndex>=0) {
            produit.options[produit.options.selectedIndex]=null;
        } else {
            alert("Suppression impossible : aucune ligne sélectionnée");
        }
    }

function SupprimerTout(produit) {
        produit.options.length=0;
    }
