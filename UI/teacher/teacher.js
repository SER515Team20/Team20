/*
    @author: Kunal Sharma
    @description: Create Quiz
    @version: 1.0
    @modified: Kunal Sharma
    @version: 2.0
	@modified: Kunal Sharma
*/

var jsonData;
function initJSON() {
	jsonData = {"grade" : sessionStorage.getItem("gradeForQuiz"), quizzes: []};
}
// Function to save questions.
function saveQuestions() {
	var i=1;
	var question;
	var answer;
	var flag =true;
	initJSON();
	while (i<=10) {
		question = document.getElementById("question"+i).value;
		//answer = document.getElementById("answer"+i).value;
		if (question!==null //&& answer!==null
			&& question!=="" /* && answer!=="" */) {
			flag = evaluateExpression(question);
			if (!flag) {
				alert("Invalid answer given for "+question);
				return false;
			}
		}
		i++;
	}
	saveExpressionAPICall(jsonData);
}
//function to store variables
function storeVariables(question, answer) {
	var parameter = {
		'question' : question,
		'answer' : answer
	};
	jsonData.quizzes.push(parameter);
}
//function to evaluate expression
function evaluateExpression(question) {
	try {
		answer = eval(question).toString(10);
	storeVariables(question, answer);
	}
	catch(err) {
    return false;
	}
	return true;
}
// function to save expression by api call
function saveExpressionAPICall(data) {
		
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
	xhttp.open("POST", "http://127.0.0.1:8080/PostQuiz", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
}
// function to cancel quiz
function cancelQuiz(){
	window.location.href = "../landing-page";
}	