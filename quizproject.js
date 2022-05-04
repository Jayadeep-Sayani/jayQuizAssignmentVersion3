
let score = 0;
let numOfHints = 3;


 // 10 second timer

// call the annonymous function every 1000 ms or 1 second



let questions = [

	{
		"question": "What flower is this?",
		"a": "Nether Flower",
		"b": "Nether Rose",
		"c": "Wither Flower",
		"d": "Wither Rose",
		"image": "quizimages/q2.jpg",
		"hint": "It was made from the skulls of the most powerful boss!",
		"answer": "d"
	}, {
		"question": "What kind of mob is this?",
		"a": "Passive",
		"b": "Neutral",
		"c": "Pet",
		"d": "Hostile",
		"image": "quizimages/q3.jpg",
		"hint": "Hostile means that a mob attacks for no reason.",
		"answer": "b"
	}, {
		"question": "How many Iron to make an anvil?",
		"a": "31",
		"b": "33",
		"c": "29",
		"d": "30",
		"image": "quizimages/q4.jpg",
		"answer": "a"
	}, {
		"question": "Which food restores the most health in minecraft?",
		"a": "Golden Apple",
		"b": "Steak",
		"c": "Suspicious Stew",
		"d": "Golden Carrot",
		"image": "quizimages/q5.jpg",
		"answer": "d"
	}, {
		"question": "Which ore is the hardest to find?",
		"a": "Diamond",
		"b": "Emerald",
		"c": "Netherite",
		"d": "Gold",
		"image": "quizimages/q6.jpg",
		"answer": "b"
	}, {
		"question": "What is the most hated mob?",
		"a": "Wither",
		"b": "Pillager",
		"c": "Phantom",
		"d": "Glow Squid",
		"image": "quizimages/q7.jpg",
		"answer": "c"
	}, {
		"question": "Who is this mysterious character?",
		"a": "Entity 303",
		"b": "Null",
		"c": "Herobrine",
		"d": "Steve",
		"image": "quizimages/q8.jpg",
		"answer": "a"
	}, {
		"question": "What does sculk sensor sense for?",
		"a": "Restone",
		"b": "Eye Contact",
		"c": "Hostile nature",
		"d": "Sound",
		"image": "quizimages/q9.jpg",
		"answer": "d"
	}, {
		"question": "Who is this character?",
		"a": "Scotch",
		"b": "Notch",
		"c": "Dinnerbone",
		"d": "jeb_",
		"image": "quizimages/q1.jpg",
		"answer": "b"
	}, {
		"question": "What does a witch drop?",
		"a": "Wooden Shovel",
		"b": "Glass Bottle",
		"c": "Trident",
		"d": "Emerald",
		"image": "quizimages/q10.jpg",
		"answer": "b"
	}
];




var timeleft = 11;

// var downloadTimer = setInterval(timer, 1000);

let currentQuestion = 0;


let timer;




function makeTimer(){ 
    timeleft--;
	
	document.getElementById("countdown").value = timeleft;
	if (timeleft == 0) {
		let message = "";
		message = "Not Quick Enough";
		document.getElementById("lightbox").style.display = "block";
		document.getElementById("message").innerHTML = message;
		currentQuestion++;
		loadQuestion();
		clearInterval(timer);
		timeleft=11;
		timer = setInterval(makeTimer, 1000);
		
	}
};




function loadQuestion() {
	
	
	clearInterval(timer)
	timer = setInterval(makeTimer, 1000);
	

	
	
	

	document.getElementById("FinalScore").innerText = "You got " + score + " Points!";
	document.getElementById("FinalScore").style.color = "white";
	document.getElementById("restart").onclick = function() {
		location.reload();
	};
	closeEndBox();
	closeStartBox();
	// close light box for first question
	if (currentQuestion == 0) {
		closeLightBox();
	}

	// load the image
	let img = document.getElementById("image");
	img.src = questions[currentQuestion].image;
	img.style.maxWidth = "70%";
	img.style.maxHeight = "auto";

	// load the question and answers
	document.getElementById("question").innerHTML = questions[currentQuestion].question;
	document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
	document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
	document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
	document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;


	let hintbutton = document.getElementById("hintbutton");
	hintbutton.addEventListener("click", showHint);
} // loadQuestion


function markIt(ans) {
	clearInterval(timer);
	timeleft = 11;
	timer = setInterval(makeTimer, 1000);
	// clearInterval(downloadTimer);
	
	let message = "";
	let hintbutton = document.getElementById("hintbutton");

	if (ans == questions[currentQuestion].answer) {

		// add 1 to score
		score = score + 1;

		// display score 
		document.getElementById("score").innerHTML = ": " + score;

		message = "Correct!";
	} else {
		document.getElementById("score").innerHTML = ": " + score;
		message = "Wrong";
	} // else


	let hintext = document.getElementById("hint");
	// move to the next question

	currentQuestion++;
	hintbutton.disabled = false;
	hintext.innerText = "You have " + numOfHints + " Hints remaining, Press 'Need Hint?' for a Hint!";
	hintbutton.innerText = "Need a Hint?";
	if (currentQuestion >= questions.length) {
		document.getElementById("endscreen").style.visibility = "visible";
	} else {
		loadQuestion();
	}

	// show the lightbox
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").innerHTML = message;

} // markIt

function closeLightBox() {

	document.getElementById("lightbox").style.display = "none";

} // closeLightbox

function closeStartBox() {
	document.getElementById("startbox").style.display = "none";
} // closeLightbox

function closeEndBox() {
	document.getElementById("endscreen").style.visibility = "hidden";
} // closeLightbox


function showHint() {
	let hintbutton = document.getElementById("hintbutton");
	let hintext = document.getElementById("hint");
	if (numOfHints >= 1) {
		numOfHints--;
		hintbutton.disabled = true;
		hintbutton.innerText = numOfHints + " hints left";
		hintext.innerText = questions[currentQuestion].hint;
	} else {
		hintbutton.disabled = true;
		hintbutton.innerText = "You have no hints left :(";
	}
}


// function timer() {
	// document.getElementById("countdown").innerText = timeleft + " seconds remaining";
	// timeleft -= 1;
	// if(timeleft <= 0){
		
		// currentQuestion++;
	// }
		
// }


		
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}                    
            
