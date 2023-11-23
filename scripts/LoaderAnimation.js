export class LoaderAnimation {
  constructor() {
    this.loaderSection = document.getElementById("loaderSection");
    this.mainSectionHeader = document.getElementById("mainSectionHeader");
    this.home = document.getElementById("home");

    // Add an event listener for the 'transitionend' event
    this.loaderSection.addEventListener(
      "transitionend",
      this.onTransitionEnd.bind(this)
    );
  }

  onTransitionEnd() {
    // This function will be called when the transition is complete
    this.mainSectionHeader.style.display = "flex";
    this.home.style.display = "flex";
  }

  showLoader() {
    // set the first position of the loader container
    this.loaderSection.classList.remove("hidden");
  }

  hideLoader() {
    // add hidden class
    this.loaderSection.classList.add("hidden");
  }

  initLoader() {
    // Add a class to trigger the transition
    this.showLoader();

    setTimeout(() => {
      this.hideLoader();
    }, 2000);
  }
}
