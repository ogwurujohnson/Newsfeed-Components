// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());

    // create a close button
    
    this.buttonCreator();
    this.closeButtonAction();

  }

  // initialize TimeLine Method
  initTimeline(target) {
    let timeline = new TimelineMax();
    timeline.to(target, .5, {opacity:0, ease: Power4.easeInOut, x: -500, autoAlpha: 0 });
  }

  // Button creator method
  buttonCreator() {
    this.closeButton = document.createElement('span');
    this.closeButton.classList.add('closeButton');
    this.closeButton.textContent = 'closeX';
    this.domElement.appendChild(this.closeButton);
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.toggleButton();
  }

  // method for manipulating close button
  closeButtonAction() {
    const closeBtn = this.domElement.querySelector('.closeButton');
    closeBtn.addEventListener('click', () => {
      this.initTimeline(this.domElement).hidden = true;
      // this.domElement.hidden = true;

      console.log(this.domElement.classList)
    })
  }

  // toggle button content
  toggleButton() {
    const currentText = 'expand';
    const newText = 'collapse';

    if(this.expandButton.textContent === currentText) {
      this.expandButton.textContent = newText;
    } else {
      this.expandButton.textContent = currentText;
    }
  }
}

// 
/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));