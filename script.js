/**
 * Please note:
 * Most of this code actually comes from Caleb's excellent
 * CalcCheck Indenter program. The original source code for
 * this program can be found at the following GitHub
 * location: https://github.com/calebmech/CalcCheck-Indenter
 * 
 * I got the colours of the Monokai theme from a screenshot of VS Code.
 * The VS code theme is based off a TextMate theme.
 */

function themeCell() {

  // MONOKAI DARK BACKGROUND
  this.style.background = "rgb(39, 40, 34)";

  // MONOKAI COMMENT
  this.style.borderColor = "rgb(117 113 94)";

  // MONOKAI DARK GREEN TEXT
  this.style.color = "rgb(102, 217, 239)";

}

function themeDiv() {

  // MONOKAI DARKER BACKGROUND
  this.style.background = "rgb(30, 31, 28)";

  // MONOKAI COMMENT and GREEN
  this.style.borderColor = "rgb(117 113 94) rgb(117 113 94) rgb(117 113 94) rgb(166 226 46)";

  // MONOKAI COMMENT
  this.style.color = "rgb(117 113 94)";

}

function themeTitle() {

  // MONOKAI PINK
  this.style.color = "rgb(249, 38, 88)";

  // MONOKAI PINK
  this.style.borderColor = "rgb(249, 38, 88)";

  // THICKER BOTTOM BORDER
  this.style.borderBottomWidth = "3px";

}


function handleKeyDown(el, event) {

  // Run only when Ctrl+Enter is pressed
  if (event.keyCode === 13 && event.ctrlKey) {

    // Set a timer with 0.5 seconds delay in order to reset
    //  the backgrounds after the proof check is done
    setTimeout(function() {

      // THEME all the divs
      let divs = document.querySelectorAll("div");
      divs.forEach(el => {
        themeDiv.bind(el)();
      });

      // THEME main body
      themeDiv.bind(document.querySelector("body"))();

    }, 500);

    // Set a timer that will run in 10 seconds for when
    //  CalcCheck is overloaded
    setTimeout(function() {

      // THEME all the divs
      let divs = document.querySelectorAll("div");
      divs.forEach(el => {
        themeDiv.bind(el)();
      });

      // THEME main body
      themeDiv.bind(document.querySelector("body"))();

    }, 10000);

  }

}

// Observe additions/deletions of cells
let bodyObserver = new MutationObserver(() => {

  let cells = document.querySelectorAll("textarea");
  cells.forEach(el => {
    el.addEventListener("keydown", handleKeyDown.bind(null, el));
  });

  cells.forEach(el => {

    let themeThisCell = themeCell.bind(el);
    themeThisCell();
    el.addEventListener("focus", themeThisCell);

  });

  // THEME all the divs
  let divs = document.querySelectorAll("div");
  divs.forEach(el => {
    themeDiv.bind(el)();
  });

  // THEME main body
  themeDiv.bind(document.querySelector("body"))();

  // THEME the titles (h1, h2, h3)
  let titles = document.querySelectorAll("h1");
  titles.forEach(el => {
    themeTitle.bind(el)();
  });
  titles = document.querySelectorAll("h2");
  titles.forEach(el => {
    themeTitle.bind(el)();
  });
  titles = document.querySelectorAll("h3");
  titles.forEach(el => {
    themeTitle.bind(el)();
  });

});

// Run code once body has been populated with cells and re-run code if a cell is added
bodyObserver.observe(document.body, {
  childList: true
});

