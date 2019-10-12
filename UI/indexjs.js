function login() {
	//REST API call
	loginAPICall(document.getElementById("username").value, document.getElementById("password").value);

	/* Temporarily Username-admin will route to admin portal
	*  other users will route to student portal i.e drag and drop page
	*/
	/*if(document.getElementById("username").value === 'admin') {
		window.location.href="admin-page";
	} else {
		window.location.href="landing-page";
	}*/
	
}
function loginAPICall(userid, password) {
	var url = "http://127.0.0.1:8080/getUser/" + userid;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
			 if (this.responseText === "") {
				 alert("Invalid username");
				 return false;
			 }
			var response = JSON.parse(this.responseText);
			if (response === "" || password !== response.password) {
				alert("Invalid password");
				return false;
			}

				if (response.role === "admin") {
					window.location.href="admin-page";
				} else {
					window.location.href="landing-page";
				}
			
         }
    };
	xhttp.open("GET", url, false);
	xhttp.send();
}
function logout() {
	if (confirm("Are you sure to logout?")) {
		document.location.href="/UI/";
	}
}