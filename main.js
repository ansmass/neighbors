const validateButton = document.getElementById("validateButton");

function sortBrandById(id){
     return fetch('brands.json')
          .then(response => response.json())
          .then(data => {
               for(var i = 0; i < data.length; i++){
                    if(data[i].id ===id){
                         return data[i];
                    }
               }
               return null;
          })
          .catch(error => {
               console.error('Erreur lors du chargement des données : ', error);
               return null;
          })
}

function showBrandData(){
     let userValue = document.getElementById("userNumber").value;

     sortBrandById(userValue)
          .then(brandDetails => {
               if(brandDetails){
                    console.log("Correspondance trouvée : ", brandDetails);
               }else{
                    console.log("Aucune correspondance trouvée pour l'ID : ", userValue);
               }
          })
}

validateButton.addEventListener('click', showBrandData);