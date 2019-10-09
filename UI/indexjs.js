function login() {
	//REST API call
	//capture response
	/* Temporarily Username-admin will route to admin portal
	*  other users will route to student portal i.e drag and drop page
	*/
	if(document.getElementById("username").value === 'admin') {
		window.location.href="admin-page";
	} else {
		window.location.href="landing-page";
	}
	
}
function logout() {
	if (confirm("Are you sure to logout?")) {
		document.location.href="/UI/";
	}
}