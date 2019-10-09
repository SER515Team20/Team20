
function checkForStudent(selectedVal) {
    if (selectedVal.value === "student") {
        document.getElementById("labelGrade").style.display = "block";
        document.getElementById("selectGrade").style.display = "block";
		//document.getElementById("selectGrade").required = true;
    } else {
        document.getElementById("labelGrade").style.display = "none";
        document.getElementById("selectGrade").style.display = "none";
		//document.getElementById("selectGrade").required = false;
    }
}
function register() {
	var reqFields = ["userid","name","psw","psw-repeat","selectRole"];
	var nonNullFields = 0;
	for (nonNullFields=0; nonNullFields<reqFields.length; nonNullFields++) {
		if (document.getElementById(reqFields[nonNullFields]).value === '' || document.getElementById(reqFields[nonNullFields]).value === null) {
			return false;
		}
	}
	if (document.getElementById("email").value !== '' && document.getElementById("email").value !== null) {
		var isValidEmail = validateEmail(document.getElementById("email").value);
		if (!isValidEmail) {
			alert("Invalid e-mail id entered");
			return false;
		}
	}
	if (document.getElementById("psw").value !== document.getElementById("psw-repeat").value) {
		alert("Passwords do not match");
		return false;
	}
	if (nonNullFields===reqFields.length) {
		//call REST API here
		
		alert("User successfully registered!");
		return true;
	} 
}
function regUserAPICall() {
	
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function cancelreg() {
    window.location.href="../";
}