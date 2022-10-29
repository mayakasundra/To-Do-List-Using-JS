var addButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function listLength() {
	return item.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	console.log(li);
	ul.appendChild(li);
	input.value = "";


	function crossOut() {
		li.classList.toggle("done");
	}


	li.addEventListener("click", crossOut);



	// delete button start
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem() {
		li.classList.add("delete") // display:none
	}

}


function addListAfterClick() {
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	}
}


addButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

