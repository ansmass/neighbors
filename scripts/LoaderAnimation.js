export class LoaderAnimation {
  constructor() {
    this.loaderSection = document.getElementById("loaderSection");
  }

  showLoader() {
    // set the first position of the loader container
    this.loaderSection.classList.remove("hidden");
  }

  hideLoader() {
    // add hiden class
    this.loaderSection.classList.add("hidden");
  }

  initLoader() {
    this.showLoader();

    setTimeout(() => {
      this.hideLoader();
    }, 1500);
  }
}
