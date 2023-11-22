// list of imports
import { LoaderAnimation } from "/scripts/LoaderAnimation.js";
import { ShowBrandInformation } from "/scripts/ShowBrandInformation.js";

// Create an instance of the BrandValidator class
document.addEventListener("DOMContentLoaded", function () {
  const loaderAnimation = new LoaderAnimation();
  loaderAnimation.initLoader();
  const showBrandInformation = new ShowBrandInformation();
});
