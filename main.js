const validateButton = document.getElementById("validateButton");
const brandNumber = document.getElementById("brandNumber");
const brandName = document.getElementById("brandName");
const brandDescription = document.getElementById("brandDescription");
const contentContainer = document.getElementById("contentContainer");

async function sortBrandById(id) {
  try {
    const response = await fetch("brands.json");
    const data = await response.json();

    for (const brand of data) {
      if (brand.id === id) {
        return brand;
      }
    }

    return null;
  } catch (error) {
    console.error("Erreur lors du chargement des données : ", error);
    return null;
  }
}

function showBrandData() {
  const userValue = document.getElementById("userNumber").value;

  sortBrandById(userValue).then((brandDetails) => {
    if (brandDetails) {
      brandNumber.innerHTML = brandDetails.id;
      brandName.innerHTML = brandDetails.name;

      // Remplace l'image existante
      const existingLogo = contentContainer.querySelector("img");
      if (existingLogo) {
        existingLogo.src = brandDetails.url;
      } else {
        // Ajoute une nouvelle image si aucune n'existe
        const logoContainer = document.createElement("div");
        const logo = document.createElement("img");
        logo.src = brandDetails.url;
        logoContainer.appendChild(logo);
        contentContainer.appendChild(logoContainer);
      }

      brandDescription.innerHTML = brandDetails.description;
    } else {
      console.log(`${userValue} : not found`);
    }
  });
}

validateButton.addEventListener("click", showBrandData);
