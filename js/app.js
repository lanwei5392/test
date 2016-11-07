
//Clear up the screen
document.body.innerHTML = '';
document.body.style.background = 'white';

//Define the array
var	nums = [1, 2, 3];

	//Loop the numbers into the array
	for (var i = 0; i < nums.length; i++) {

		//This is the number that we are currently on
		var num = nums[i];

		//Create a DOM element for the number
		var elem = document.createElement('div');
		elem.textContent = num;

	
	//onclick, alert the num
	elem.addEventListener('click', (function(numCopy) {
		return function() {
			alert(numCopy);
		};
	})(num));

	
	//Finally, add the element into the DOM
	document.body.appendChild(elem);
	
};


