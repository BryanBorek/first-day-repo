// When Fact Button is pressed...
$("#factButton").on("click", function() {
	//Generate a random numberbetween 0 and 5(equal to number of facts in Boo Fact Array)
	var number = Math.floor((Math.random() * booFacts.length));
	//Display the fact in the position of the number we created
	$("#factText").text(booFacts[number])
})

//These is the Boo Fact Array
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

// When the textPink button is pressed...
$("#textPink").on("click", function() {
	//change funText to pink
	$("#funText").css("color", "pink")
})

// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
	//change funText to orange
$("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	//change funText to green
	$("#funText").css("color", "green")
})

//When boxGrow button is pressed...
$("#boxGrow").on("click", function() {
	//Increase box size
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//When boxShrink button is pressed...
$("#boxShrink").on("click", function() {
	//Decrease box size
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})