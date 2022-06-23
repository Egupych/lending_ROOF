"use strict"

document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById("form");
	form.addEventListener("submit", formSend);

	// Запрет на отправку форму
	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll("._req")
	}

	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];
		formRemoveErrror(input);

		if (input.classList.contains("._tel")) {
			
		}
		
	}

	function formAddError(input) {
		input.parentElement.classList.add("_error");
		input.classList.add("error");
	}

	function formRemoveErrror(input) {
		input.parentElement.classList.remove("_error");
		input.classList.remove("error");

	}
})








var knopka = document.getElementById ('push');
knopka.addEventListener('click',func1);
 
function func1() {
  var shadow = document.getElementById ('ts1');
  if (shadow.style.marginTop !== '0px'){
  	shadow.style.marginTop="0px";
  }else{
  	shadow.style.marginTop="-180px";
  }
  
};


var knopkaRotate = document.getElementById ('push');
knopkaRotate.addEventListener('click',func2);
 
function func2() {
  var rotate = document.getElementById ('push');
  if (rotate.style.transform !== 'rotate(90deg)'){
	rotate.style.transform="rotate(90deg)";
  }else{
	rotate.style.transform="rotate(135deg)";
  }
  
};
