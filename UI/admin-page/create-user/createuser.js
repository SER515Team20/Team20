function checkForStudent() {
    var roles = document.getElementById("selectRole");
    var selectedVal = roles.options[roles.selectedIndex].value;
    if (selectedVal === "student") {
        document.getElementById("labelGrade").style.display = "block";
        document.getElementById("selectGrade").style.display = "block";
    } else {
        document.getElementById("labelGrade").style.display = "none";
        document.getElementById("selectGrade").style.display = "none";
    }

}