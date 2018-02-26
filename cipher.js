// this section is for cipher 1 ceasar ciphers
function encode(isDecode) {
	var textShift = document.getElementById("shift").value;  //to display shift value
	if (!/^-?\d+$/.test(textShift)) {
		alert("these are not number! please enter numbers only");  //alert if user enters characters that are not numbers with the shift box
		return;
	}
	var shift = parseInt(textShift, 10);
	if (shift < 0 || shift >= 26) {
		alert("Shift out of range, try again!");       //stop user from enter numbers that will affect the ascii code below
		return;
	}
	if (isDecode)
		shift = (26 - shift) % 26;
	var textElem = document.getElementById("message");
	textElem.value = shiftCipher(textElem.value, shift);
}
function shiftCipher(text, shift) {
	var result = "";
	for (var i = 0; i < text.length; i++) {
		var c = text.charCodeAt(i);
		if      (65 <= c && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // to displayUppercase
		else if (97 <= c && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // to display Lowercase
		else                          result += text.charAt(i);  
	}
	return result;
}


//this function is for cipher two reverse

function reverseMe(isReverse){
    var str = document.getElementById( "backward" ).value;
    document.getElementById("show").innerHTML = ("" + reverseString(str)); //this display the reverse within the page
   return;
}
 
 
//reverse function 
function reverseString( str ){
    str = str.split(''); //split the the string you enter the textarea
    str = str.reverse(); //reverse the string
    str = str.join(''); // this will join reverse order array values
    return str;
	 // return the string
	 
	 
}


// When the user scrolls down from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn");
    } else {
        document.getElementById("myBtn");
    }
}

// When the user clicks on the button, scroll will go back to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}