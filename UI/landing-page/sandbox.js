var index = 0;
window.onload = function() {
	init();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	if (!data.includes("sandboxItem")) {
		var copyNbr = document.createElement("div");
		var orgNbr = document.getElementById(data);
		copyNbr.innerHTML = orgNbr.innerHTML;
		var parent = document.getElementById("sandboxExpression");
		var doc = document.createDocumentFragment();
		doc.appendChild(copyNbr);
		copyNbr.setAttribute("draggable","true");
		copyNbr.setAttribute("style","margin:0px");
		copyNbr.id = "sandboxItem" + index++ ;
		parent.appendChild(doc);

		if (orgNbr.className === "number") {
			copyNbr.setAttribute("class", "blockContainer number numberText");
		}
		else if (orgNbr.className === "operator") {
			copyNbr.setAttribute("class", "blockContainer operator numberText");
		}
		else if (orgNbr.className === "number paranthesis") {
			copyNbr.setAttribute("class", "blockContainer number paranthesis numberText");
		}
		else if (orgNbr.className === "variable") {
			copyNbr.setAttribute("class", "blockContainer variable numberText");
		}
		else if (orgNbr.className === "operatorExpression") {
			copyNbr.setAttribute("class", "blockContainer operatorExpression numberText");
		}
		else if (orgNbr.className === "trigExpression") {
			copyNbr.setAttribute("class", "blockContainer trigExpression  numberText");
		}
	}
}

function calculateResult() {
    try {
        var items = document.getElementById('sandboxExpression').childNodes;
        var rs = "";
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].childNodes);

            if (items[i].className === "blockContainer operatorExpression numberText") {

                span = items[i].childNodes;
                rs += "("+(span[1].childNodes[0].value) + (span[3].innerHTML) + (span[5].childNodes[0].value)+")";
            }
            else if (items[i].nodeName != "#text") {
                span = items[i].childNodes;
                rs += (span[1].innerHTML);
            }
        }
        console.log(rs);
        console.log(eval(rs));

        document.getElementById("finalResult").value = eval(rs);
    }
    catch (err) {
        alert("Invalid Expression");
    }

}

function clearForm() {
    document.getElementById("sandboxExpression").innerHTML = null;
    document.getElementById("finalResult").value = 0;

}
function deleteLast() {
	var element = document.getElementById("sandboxItem"+(--index));
	element.parentNode.removeChild(element);
}
function deleteSelected(event) {
	event.preventDefault();
    var element = event.dataTransfer.getData("text");
	if (element.includes("sandboxItem"))
	document.getElementById(element).remove();
}
function toggle(id) {
	var toggleBtn = document.getElementById(id);
	if (toggleBtn.style.display === "none") {
		toggleBtn.style.display = "flex";
	}
	else {
		toggleBtn.style.display = "none";
	}
}

function init() {
	var user = document.getElementById("loginContainer");
	if (sessionStorage.getItem("name") === null 
		|| sessionStorage.getItem("name") === "") {
			var login = document.createElement("BUTTON");
			var link = document.createTextNode("Login"); 
			login.appendChild(link);
			login.name = "Login";
			login.id = "Login";
			login.setAttribute("onclick", "document.getElementById('id01').style.display='block'");
			login.setAttribute("class", "logButton");
			user.appendChild(login);
	} else {
		var logout = document.createElement("BUTTON");
		var link = document.createTextNode("Logout"); 
			logout.appendChild(link);
			logout.name = "Logout";
			logout.id = "Logout";
			logout.setAttribute("onclick","logout();");
			login.setAttribute("class", "logButton");
			user.appendChild(logout);
	}
}
