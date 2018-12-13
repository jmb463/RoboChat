var comprobateInput = false;
var comprobateFormulary = false;

$(document).ready(function(){
	$("#moreArticles").click(function(){loadMoreNews();});
	$("#submitBtn").click(function(){messageRecived();});
	$("#registerBtn").click(function(){comprobateForm();});


}); 

function loadMoreNews(){ 
	$("#moreArticles").text("There aren't more news");
};

function messageRecived(){
	comprobate();
	if(comprobateInput){
		swal({type: "success",
			  title: "Feedback sent.",
			  text: "A head developer will try to solve the issue.",
			  footer: "Thank you for your time."
		});
	}
}

function comprobateForm(){
	checkForms();
	if(comprobateFormulary){
		swal({
			type: "success",
			title: "Register done",
			text: "Scouts will look at your formulary",
			footer: "Good luck"

		});
	}
}


function comprobate(){
	comprobateUsername();
	comprobateCode();
	comprobatePhone();
	comprobateEmail();
}

function checkForms(){
	comprobateFirstName();
	comprobateLastName();
	comprobateUsername();
	comprobateCollege();
	comprobateNationality();
	comprobateCity();
	comprobateCode();
	comprobatePhone();
	comprobateEmail();
	comprobateAptitudes();
}

function comprobateFirstName(){
	var x = document.forms["myForm"]["firstname"].value;
	if (x == "") {
		alert("First Name must be filled out");
		comprobateFormulary = false;
	}

	else{
		comprobateFormulary = true;
	}
}

function comprobateLastName(){
	var x = document.forms["myForm"]["lastname"].value;
	if (x == "") {
		alert("Last Name must be filled out");
		comprobateFormulary = false;
	}

	else{
		comprobateFormulary = true;
	}
}

function comprobateCollege(){
	var x = document.forms["myForm"]["college"].value;
	if (x == "") {
		alert("College must be filled out");
		comprobateFormulary = false;
	}

	else{
		comprobateFormulary = true;
	}
}

function comprobateNationality(){
	var x = document.forms["myForm"]["nationality"].value;
	if (x == "") {
		alert("Nationality must be filled out");
		comprobateFormulary = false;
	}

	else{
		comprobateFormulary = true;
	}
}

function comprobateCity(){
	var x = document.forms["myForm"]["city"].value;
	if (x == "") {
		alert("City must be filled out");
		comprobateFormulary = false;
	}

	else{
		comprobateFormulary = true;
	}
}

function comprobateUsername(){
	var x = document.forms["myForm"]["username"].value;
	if (x == "") {
		alert("Username must be filled out");
		comprobateInput = false;
		comprobateFormulary = false;
	}

	else{
		comprobateInput = true;
		comprobateFormulary = true;
	}
}

function comprobateCode(){
	var x = document.forms["myForm"]["areacode"].value;
	if (x == "") {
		alert("Area code must be filled out");
		comprobateInput = false;
		comprobateFormulary = false;
	}

	else{
		comprobateInput = true;
		comprobateFormulary = true;
	}
}

function comprobatePhone(){
	var x = document.forms["myForm"]["telnum"].value;
	if (x == "") {
		alert("Phone number must be filled out");
		comprobateInput = false;
		comprobateFormulary = false;
	}

	else{
		comprobateInput = true;
		comprobateFormulary = true;
	}
}

function comprobateEmail(){
	var x = document.forms["myForm"]["emailid"].value;
	if (x == "") {
		alert("Email must be filled out");
		comprobateInput = false;
		comprobateFormulary = false;
	}

	else{
		comprobateInput = true;
		comprobateFormulary = true;
	}
}

function comprobateAptitudes(){
	var x = document.forms["myForm"]["aptitudes"].value;
	if (x == "") {
		alert("Aptitudes must be filled out");
		comprobateFormulary = false;
	}

	else{
		comprobateFormulary = true;
	}
}