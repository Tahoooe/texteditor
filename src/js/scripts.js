// Windows 10 calendar effect by Gubb · https://codepen.io/gubb/pen/PdZqKy
const light = document.getElementById('light')
var y = window.scrollY;

document.addEventListener('mousemove', e => {
	y = window.scrollY;
  	light.style.top = e.pageY - y + "px"  
  	light.style.left = e.pageX + "px"  
})



const editor = document.getElementById("editor");


function mkHeader() {
	document.execCommand('formatBlock',false,'h1');
}

function mkUnderline() {
	document.execCommand('underline',false,'');
}

function mkBold() {
	document.execCommand('bold',false,'');
}

function mkStrikethrough() {
	document.execCommand('strikethrough',false,'');
}

function mkJustify() {
	document.execCommand('justifyFull',false,'');
}

function mkAlignCenter() {
	document.execCommand('justifyCenter',false,'');
}

function mkAlignLeft() {
	document.execCommand('justifyLeft',false,'');
}

function mkAlignRight() {
	document.execCommand('justifyRight',false,'');
}

function mkQuote() {
	document.execCommand('formatBlock',false,'<blockquote>');
}

function mkOrderedList() {
	document.execCommand('insertOrderedList',false,'');
}

function mkUnorderedList() {
	document.execCommand('insertUnorderedList',false,'');
}

function mkLink() {
	document.execCommand('createLink',false,'');
}

function mkUnlink() {
	document.execCommand('unlink',false,'');
}


document.addEventListener("keydown", function(key) {
	if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 72) {
	  	key.preventDefault();
	    mkHeader(); // cmd/ctrl + h

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 66){
		key.preventDefault();
		mkBold(); // cmd/ctrl + b

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 85) {
		key.preventDefault();
		mkUnderline(); // cmd/ctrl + u
	
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 53) {
		key.preventDefault();
		mkStrikethrough(); // cmd/ctrl + 5
	
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 69) {
		key.preventDefault();
		mkAlignCenter(); // cmd/ctrl + e
	
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 74) {
		key.preventDefault();
		mkJustify(); // cmd/ctrl + j
	
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 76) {
		key.preventDefault();
		mkAlignLeft(); // cmd/ctrl + l

	// } else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 82) {
	// 	key.preventDefault();
	// 	mkAlignRight(); // cmd/ctrl + r

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && event.altKey && key.keyCode == 81) {
		key.preventDefault();
		mkQuote(); // cmd/ctrl + alt + q

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && key.keyCode == 75) {
		key.preventDefault();
		mkUnorderedList(); // cmd/ctrl + k

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && key.keyCode == 79) {
		key.preventDefault();
		mkOrderedList(); // cmd/ctrl + o
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && key.keyCode == 73) {
		key.preventDefault();
		mkLink(); // cmd/ctrl + i
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && key.keyCode == 89) {
		key.preventDefault();
		mkUnlink(); // cmd/ctrl + y
	}

}, false);


function countWords(str) {
	if (str === "") {
		return 0;
	} else {
		return str.trim().split(/\s+/).length;
	}
}

const wordCounter = document.getElementById("wordCounter");

let editorContent = editor.textContent;
let editorWords = countWords(editorContent);
let editorLength = editorContent.length;

wordCounter.textContent = editorWords + " mots";

editor.addEventListener("input", function() {
    editorContent = editor.textContent;
    editorWords = countWords(editorContent);
    editorLength = editorContent.length;
    wordCounter.textContent = editorWords + " mots";

}, false);


// function checkFullscreen() {
// 	if (window.fullscreen) {
// 		fullscreenButton.classList.add('fa-close');
// 		fullscreenButton.classList.remove('fa-expand');
// 	} else {
// 		fullscreenButton.classList.remove('fa-close');
// 		fullscreenButton.classList.add('fa-expand');
// 	}
// }
// checkFullscreen();



//joli toggle 
function toggle(toggling, target) {
	let parent = target.parentElement;
	parent.classList.remove("tgLeft", "tgCenter", "tgRight");

	switch (toggling) {
		case "left":
			parent.classList.add("tgLeft");
			break;
		case "center":
			parent.classList.add("tgCenter");
			break;
		case "right":
			parent.classList.add("tgRight");
			break;
	}
}

function initToggle() {
	document.getElementById("togglingTwoCtn").classList.add("tgLeft");
	document.getElementById("togglingThreeCtn").classList.add("tgLeft");
}
initToggle();








var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect); 