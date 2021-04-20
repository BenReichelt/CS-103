var funRes = String(prompt("Would you like to learn some fun facts about CHINCHILLA? If yes, put 'yes'. If no, put 'no'."));
while (funRes.toLowerCase() != 'yes' && funRes.toLowerCase() != 'no') {
	alert("Your response isn't valid, please enter another!");
		funRes = String(prompt("Would you like to learn some fun facts about CHINCHILLA? If yes, put 'yes'. If no, put 'no'."));
	}
if (funRes.toLowerCase == 'yes') {
	alert("You answered " + funRes + ". Enjoy the funfacts about CHINALLA!");
}
else {
	alert("You answered " + funRes + ". It seems you know all the funfacts about them! Please let us know too!!!");
}