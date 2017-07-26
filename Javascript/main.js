/*
function subscribeButtonAlert() {
	var apasaButon = confirm("Sorry! This feature is not available yet.\nEnjoy your stay, though!");
	if(apasaButon == true) {
		alert("Have a lovely and productive day!");
	}
	else {
		alert("Thank you for your understanding!");
	} 
}
*/

function subscribeButtonAlert() {
	var apasaButon = prompt('Enter your name');
	while (apasaButon.length < 3) {
		apasaButon = prompt('Please enter a valid name');
	}
	alert('Hi, ' + apasaButon + '! ' + 'Unfortunetly this feature is not available yet.\nEnjoy your stay, though!');
}


function showPages(shown, hidden) {
	var shownn = document.getElementById(shown).style.display = 'block';
	document.getElementById(hidden).style.display = 'none';
	document.location.href = '#body_start';
	return false;
}

var buton_pagina1 = document.querySelector('#buton_pagina1');
var buton_pagina2 = document.querySelector('#buton_pagina2');

buton_pagina1.addEventListener('click', showPageOne);
function showPageOne() {
	buton_pagina1.style.color = "rgba(95, 163, 252, 0.8)";
	buton_pagina2.style.color = "#fff";
}

buton_pagina2.addEventListener('click', showPageTwo);
function showPageTwo() {
	buton_pagina2.style.color = "rgba(95, 163, 252, 0.8)";
	buton_pagina1.style.color = "#fff";
}


