export class ShowBrandInformation {
  constructor() {
    this.validateButton = document.getElementById("validateButton");
    this.brandNumber = document.getElementById("brandNumber");
    this.brandName = document.getElementById("brandName");
    this.brandDescription = document.getElementById("brandDescription");
    this.contentContainer = document.getElementById("contentContainer");
    this.errorContainer = document.getElementById("errorContainer");
    this.errorNumber = document.getElementById("errorNumber");

    this.validateButton.addEventListener(
      "click",
      this.showBrandData.bind(this)
    );
  }

  async sortBrandById(id) {
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

  showBrandData() {
    const userValue = document.getElementById("userNumber").value;

    this.sortBrandById(userValue).then((brandDetails) => {
      if (brandDetails) {
        this.contentContainer.style.display = "flex";
        this.errorContainer.style.display = "none";

        this.brandNumber.innerHTML = brandDetails.id;
        this.brandName.innerHTML = brandDetails.name;

        const existingLogo = this.contentContainer.querySelector("img");
        if (existingLogo) {
          existingLogo.src = brandDetails.url;
        } else {
          const logoContainer = document.createElement("div");
          const logo = document.createElement("img");
          logo.src = brandDetails.url;
          logoContainer.appendChild(logo);
          this.contentContainer.appendChild(logoContainer);
        }

        this.brandDescription.innerHTML = brandDetails.description;
      } else {
        this.contentContainer.style.display = "none";
        this.errorContainer.style.display = "flex";
        this.errorNumber.innerHTML = userValue;
      }
    });
  }
}