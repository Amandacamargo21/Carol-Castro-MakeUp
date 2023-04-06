class Carousel {
    constructor(element) {
      // Retrieve every elements needed by the carousel (arrows, dots, ...)
      this.content = element.querySelector(".carousel-content");
      this.arrowLeft = element.querySelector(".carousel-arrow-left");
      this.arrowRight = element.querySelector(".carousel-arrow-right");
      this.dots = element.querySelector(".carousel-navigation").children;
      // The index of the current active element of the carousel
      this.activeElement = 0;
    }
  
    // This function will make the element at index n visible in the carousel
    activateElement(n) {
      // Validate index
      if (n < 0 || n >= this.dots.length)
        return;
      this.activeElement = n;
      // Scroll the content to bring the element into view
      // this.content is the parent container of every elements
      // this.content.children[n] is the targeted element
      // .offsetLeft is the distance between the left of the element and the left border of the window
      // .scrollTo(x, y) scroll the element at x, y offset
      this.content.scrollTo(this.content.children[n].offsetLeft - this.content.offsetLeft, 0);
      // Activate the corresponding dot
      for (let i = 0; i < this.dots.length; i++)
        // .classList is the list of classes on the HTML element
        // .toggle(classes, force) is used to add or remove the given classes according to the boolean
        this.dots[i].classList.toggle("carousel-dot-active", this.activeElement === i);
      // Verify the left and right arrow to disable them if necessary
      // No longer needed because we want to be able to cycle through the carousel entries
      //this.arrowLeft.classList.toggle("carousel-arrow-disabled", this.activeElement === 0);
      //this.arrowRight.classList.toggle("carousel-arrow-disabled", this.activeElement === this.dots.length - 1);
    }
  
    // This function will register and required event listeners
    addEventListeners() {
      // To handle the click on the dots
      for (let i = 0; i < this.dots.length; i++)
        this.dots[i].addEventListener("click", () => this.activateElement(i));
      // And on the left / right arrows
      this.arrowLeft.addEventListener("click", () => this.activateElement((this.activeElement === 0 ? this.dots.length : this.activeElement) - 1)); // If we are on the first element and we go left, then we activate the last one
      this.arrowRight.addEventListener("click", () => this.activateElement(this.activeElement === this.dots.length - 1 ? 0 : this.activeElement + 1)); // If we are on the last element and we go right, then we activate the first one
    }
  }
  
  // Initialize the carousel for every HTML element with class "carousel"
  const carousels = document.getElementsByClassName("carousel");
  for (const carousel of carousels)
    new Carousel(carousel).addEventListeners();