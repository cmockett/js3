var phone = prompt("What's your phone number?");

if (phone.charAt(3) === "-" && phone.charAt(7) === "-"){
	alert(true);
}
else {
	alert(false);
}

var bday = prompt("What's your birthday in xx/xx/xx format?");
if (bday.charAt(2) === "/" && bday.charAt(5) === "/"){
	alert(true);
}
else{
	alert(false);
}

var zipCode = prompt("What's your zip code?");
if ((zipCode.length === 5) || zipCode.charAt(5) === "-"){
	alert(true);
}
else{
	alert(false);
}

var state = prompt("What's your state in XX format?");
if ((state.length === 2) && (state == state.toUpperCase())){
	alert(true);
}

else{
	alert(false);
}

var married = prompt("Are you married?");
if (married === "YES" || married === "Yes" || married === "yes"){
	alert(true);
}
else{
	alert(false);
}
