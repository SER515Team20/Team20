var jsonData = [];
function saveQuestions() {
	var i=1;
	var question;
	var answer;
	while (i<=10) {
		question = document.getElementById("question"+i).value;
		answer = document.getElementById("answer"+i).value;
		if (question!==null && answer!==null
			&& question!=="" && answer!=="") {
			evaluateExpression(question, answer);
		}
		i++;
	}
}
function storeVariables(question, answer) {
	var parameter = {
		'question' : question,
		'answer' : answer
	};
	jsonData.push(parameter);
	saveExpressionAPICall(JSON.stringify(jsonData));
}
function evaluateExpression(question, answer) {
	if (answer === eval(question).toString(10)) {
		storeVariables(question, answer);
	} 
	else {
		alert("Invalid answer given for "+question);
		return false;
	}
}
function saveExpressionAPICall(data) {
	
}