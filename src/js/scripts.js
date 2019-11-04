// Windows 10 calendar effect by Gubb · https://codepen.io/gubb/pen/PdZqKy
const light = document.getElementById('light')
var y = window.scrollY;

document.addEventListener('mousemove', e => {
	y = window.scrollY;
  	light.style.top = e.pageY - y + "px"  
  	light.style.left = e.pageX + "px"  
})

// rich editor formating
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
	    format("header"); // cmd/ctrl + h

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 66){
		key.preventDefault();
		format("bold"); // cmd/ctrl + b

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 85) {
		key.preventDefault();
		format("underline"); // cmd/ctrl + u
	
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 53) {
		key.preventDefault();
		format("strikethrough"); // cmd/ctrl + 5
	
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 69) {
		key.preventDefault();
		format("alignCenter"); // cmd/ctrl + e
	
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 74) {
		key.preventDefault();
		format("justify"); // cmd/ctrl + j
	
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 76) {
		key.preventDefault();
		format("alignLeft"); // cmd/ctrl + l

	// } else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 82) {
	// 	key.preventDefault();
	// 	format("alignRight"); // cmd/ctrl + r

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && event.altKey && key.keyCode == 81) {
		key.preventDefault();
		format("quote"); // cmd/ctrl + alt + q

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && key.keyCode == 75) {
		key.preventDefault();
		format("unorderedList"); // cmd/ctrl + k

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && key.keyCode == 79) {
		key.preventDefault();
		format("orderedList"); // cmd/ctrl + o
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && key.keyCode == 73) {
		key.preventDefault();
		format("link"); // cmd/ctrl + i
	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey) && key.keyCode == 89) {
		key.preventDefault();
		format("unlink"); // cmd/ctrl + y
	}
}, false);

function countWords(str) {
	if (str === "") {
		return 0;
	} else {
		return str.trim().split(/\s+/).length;
	}
}

// words and characters counter
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

// full screen option
document.getElementById("fullscreenButton").onclick = function(){ 
	if (document.fullscreenElement) { 
		document.exitFullscreen() 
		fullscreenButton.classList.remove('fa-close');
		fullscreenButton.classList.add('fa-expand');
	} else { 
		document.documentElement.requestFullscreen()
		fullscreenButton.classList.add('fa-close');
		fullscreenButton.classList.remove('fa-expand');
	} 
};

// open settings button
document.getElementById("openSettings").onclick = function(){
	document.getElementById("settingsPannel").classList.toggle("revealed");
};

//base for all toggles 
function toggleBase(toggling, target) {
	let parent = target.parentElement;
	parent.classList.remove("tgLeft", "tgCenter", "tgRight");

	switch (toggling) {
		case "left":
			parent.classList.add("tgLeft");
			toggle(parent, toggling);
			break;

		case "center":
			parent.classList.add("tgCenter");
			toggle(parent, toggling);
			break;

		case "right":
			parent.classList.add("tgRight");
			toggle(parent, toggling);
			break;
	}
}

// gives toggle a job
function toggle(type, pos) {
	if (type.classList.contains("toolPos") || type === "toolPos") {
		if (pos === "left") {
			console.log("tools à gauche");
		} else if (pos === "right") {
			console.log("tools à droite");
		}

	} else if (type.classList.contains("appearance") || type === "appearance") {
		if (pos === "left") {
			document.body.classList.remove('dark', 'autodark');
		} else if (pos === "center") {
			document.body.classList.add("autodark");
		} else if (pos === "right") {
			document.body.classList.add("dark");
		}

	} else {
		console.log("marche pas");
	}
}

// for toggles to start properly
const toggles = document.getElementsByClassName("toggleContainer");
function initToggle() {
	for(var i = 0; i < toggles.length; i++) {
    	toggles[i].classList.add('tgLeft');
	}
}
initToggle();

// gives checkboxes a job
function checkboxes(check) {

	if (check.checked && check.id === "words") {
		document.getElementById("wordCounter").classList.add("shown");
	} else if (!check.checked && check.id === "words") {
		document.getElementById("wordCounter").classList.remove("shown");

	} else if (check.checked && check.id === "characters") {
		document.getElementById("characterCounter").classList.add("shown");
	} else if (!check.checked && check.id === "characters") {
		document.getElementById("characterCounter").classList.remove("shown");

	} else if (check.checked && check.id === "tools") {
		document.getElementById("toolbox").classList.add("shown");
		document.getElementById("lightContainer").classList.add("shown");
	} else if (!check.checked && check.id === "tools") {
		document.getElementById("toolbox").classList.remove("shown");
		document.getElementById("lightContainer").classList.remove("shown");
	}
}




const selectBtn = document.getElementById("selectBtn");
function select(choice) {
	let fontName;

	// Détermine si select() est appelé avec une string ou un objet par le HTML
	if (typeof choice == 'string' || choice instanceof String) {
		fontName = choice;

	} else if (typeof choice == 'object' || choice instanceof Object) {
		fontName = choice.id;
	} 

	selectBtn.classList.remove("AvenirNext", "HelveticaNeue", "CourierNew");
	selectBtn.classList.add(fontName);

	changeFont(fontName);
}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('#selectBtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

let currentFont;
function changeFont(selectedFont) {

	if (selectedFont === "AvenirNext") {
		currentFont = new FontFace('Courier New', 'url(src/fonts/AvenirNextRegular.woff)', { style: 'normal', weight: 400 });

		currentFont.load().then(function(loaded_face) {
			document.fonts.add(loaded_face);
		  	document.body.style.fontFamily = '"Avenir Next"';
		});
	} else if (selectedFont === "HelveticaNeue") {
		currentFont = new FontFace('Courier New', 'url(src/fonts/HelveticaNeueRoman.woff)', { style: 'normal', weight: 400 });

		currentFont.load().then(function(loaded_face) {
			document.fonts.add(loaded_face);
		  	document.body.style.fontFamily = '"Helvetica Neue"';
		});
	} else if (selectedFont === "CourierNew") {
		currentFont = new FontFace('Courier New', 'url(src/fonts/CourierNew.woff)', { style: 'normal', weight: 400 });

		currentFont.load().then(function(loaded_face) {
			document.fonts.add(loaded_face);
		  	document.body.style.fontFamily = '"Courier New"';
		});
	}
}

// initialise les fonts
select("AvenirNext");

