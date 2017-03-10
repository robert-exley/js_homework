// Add in external javascript file

$("#button").on("click", function (e) {
	e.preventDefault();

	var first = parseInt($("#first").val());
	var second = parseInt($("#second").val());

	$(".x").text(first);
	$(".y").text(second);


	var totalplus = addition(first, second);
	var totalminus = subtraction(first, second);
	var totaltimes = multiply(first, second);
	var totaldiv = divide(first, second);

	$("#addition .z").text(totalplus);
	$("#multiply .z").text(totaltimes);
	$("#subtract .z").text(totalminus);
	$("#divide .z").text(totaldiv);

	$("#answer").val(poop);

	console.log(totalCost);

	$("#totals").text("This is how much caffeine you've had! " + totalCaffeine + " And this is how much it cost! " + totalCost);

});

$("#button2").on("click", function (e) {
	e.preventDefault();

	var d = parseFloat($("#d").val());
	var e = parseFloat($("#e").val());
	var f = parseFloat($("#f").val());

	var poop = quadSolve(d, e, f);

	$("#answer2").val(anything);
});


function addition(x, y) {
	var poop = x + y;
	return poop;
}

function subtraction(x, y) {
	var sub = x - y;
	return sub;
}

function multiply(x, y) {
	var mul = x * y;
	return mul;
}

function divide(x, y) {
	var div = x / y;
	return div;
}
//
// //closes all the functions
//
// // pullin inputs on html page
//
// //function that takes variable 1 and variable 2 and assd them together
//
// // function that takes variable 2 and variable 2 and sub them together
