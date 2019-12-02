/*
    @author: Parikshith Kedilaya Mallar 
    @description: Javascript for quiz page
    @version: 1.0
    @modified: Parikshith Kedilaya Mallar
    @version: 2.0
    @modified: Parikshith Kedilaya Mallar
    @version: 3.0
*/

var index = 0;
window.onload = function() {
    //call API to get quiz question
    var question = "3+2-4+7*4";
    var answer = "29";
    var quizList = getQuestionsAPI();
    quizList.forEach(function(element) {
        question = element.question;
        answer = element.answer;
    });
    
    this.document.getElementById("answer").innerHTML=answer;
    this.loadAllBlocks(question);
}

// Function to get the quiz questions from backend and display on frontend
function getQuestionsAPI() {
    var url = "http://127.0.0.1:8080/GetQuiz/" + sessionStorage.getItem("grade");
    var xhttp = new XMLHttpRequest();
    var response = "";
	xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
			 if (this.responseText === "") {
				 alert("Error Occurred.. Try again!");
				 return false;
			 }
            response = JSON.parse(this.responseText);
            
         }
    };
	xhttp.open("GET", url, false);
    xhttp.send();
    return response.quizzes;
}

// Load individual block
function loadBlock(elm) {
    var parent = document.getElementById("blockContainer");
    var newBlock = document.createElement("div");
    newBlock.id = elm;
	if (isNaN(elm)) {
        newBlock.className = "operator";
    } else {
        newBlock.className = "number";
    }
    newBlock.setAttribute("draggable","true");
    newBlock.setAttribute("ondragstart", "drag(event)");
    newBlock.appendChild(this.loadSpan(elm));
    parent.appendChild(newBlock);
}

// FUnction to load span
function loadSpan(elm) {
    var spanTag = document.createElement("span");
    spanTag.className = "numberText";
	if (elm == "*") {
        elm = "x";
    }
    spanTag.innerHTML = elm;
    return spanTag;
}

// Function to load all blocks
function loadAllBlocks(question) {
    if (question!=="" && question!==null) {
        question = shuffle(question);
        for (var i = 0; i < question.length; i++) {
            loadBlock(question.charAt(i));
        }
    }
}

// Function to shuffle the elements from the backend to present on quiz UI
function shuffle(str) {
    var a = str.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}


// Function to evaluate quiz answers
function evaluateQuiz() {
    if (this.document.getElementById("answer").innerHTML === this.calculateResult().toString()) {
        alert("Congratulations! You have answered correctly!");
        
    } else {
        alert("Your answers are incorrect");
        return false;
    }
}

// Function to allow dragging of elements from toolkit to sandbox
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// Function to allow dropping of elements from toolkit to sandbox
function allowDrop(ev) {
    ev.preventDefault();
}


// Function to create new blocks on the sandbox after an element is dropped on sandbox
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
        orgNbr.remove();
	}
}

// Function to calculate the result of the expression formed on the sandbox

function calculateResult() {
    try {
        var items = document.getElementById('sandboxExpression').childNodes;
        var rs = "";
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].childNodes);
            if (items[i].nodeName != "#text") {
                span = items[i].childNodes;
                var item = span[0].innerHTML;
				if (item === "x") {
					item = "*";
				}
                rs += (item);
            }
        }
        console.log(rs);
        var result = eval(rs);
        console.log(result);
        if(isNaN(result)) result = 0;
        document.getElementById("finalResult").value = result;
        return result;
    }
    catch (err) {
        alert("Invalid Expression");
    }

}