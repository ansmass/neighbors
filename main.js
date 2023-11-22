const validateButton = document.getElementById("validateButton");
const brandNumber = document.getElementById("brandNumber");
const brandName = document.getElementById("brandName");
const brandDescription = document.getElementById("brandDescription");
const contentContainer = document.getElementById("contentContainer");
const errorContainer = document.getElementById("errorContainer");
const errorNumber = document.getElementById("errorNumber");

async function sortBrandById(id) {
  try {
    const response = await fetch("assets/brands.json");
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
  // get the user value in enter in the input
  const userValue = document.getElementById("userNumber").value;

  sortBrandById(userValue).then((brandDetails) => {
    if (brandDetails) {
      contentContainer.style.display = "flex";
      errorContainer.style.display = "none";

      // filled the number and name of brand in the title
      brandNumber.innerHTML = brandDetails.id;
      brandName.innerHTML = brandDetails.name;

      // Replace the brand picture and delete the last
      const existingLogo = contentContainer.querySelector("img");
      if (existingLogo) {
        existingLogo.src = brandDetails.url;
      } else {
        // add new picture if no have before
        const logoContainer = document.createElement("div");
        const logo = document.createElement("img");
        logo.src = brandDetails.url;
        logoContainer.appendChild(logo);
        contentContainer.appendChild(logoContainer);
      }

      brandDescription.innerHTML = brandDetails.description;
    } else {
      // hidden the content container
      contentContainer.style.display = "none";
      // show the error container
      errorContainer.style.display = "flex";
      errorNumber.innerHTML = userValue;
    }
  });
}

validateButton.addEventListener("click", showBrandData);
