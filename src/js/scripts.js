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

	} else if ((window.navigator.platform.match("Mac") ? key.metaKey : key.ctrlKey)  && key.keyCode == 82) {
		key.preventDefault();
		mkAlignRight(); // cmd/ctrl + r

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


function fullScreen() { 
	if (document.fullscreenElement) { 
		document.exitFullscreen() 
	} else { 
		document.documentElement.requestFullscreen() 
	} 
};
