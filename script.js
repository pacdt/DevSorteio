const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const winnerNumber = document.querySelector(".winner-number");

firstNumber.focus();

const result = document.querySelector(".resultado");
const form = document.querySelector(".formulario-sorteio");

function sortear() {
	let sortedNumber;

	const min = parseInt(firstNumber.value);
	const max = parseInt(secondNumber.value);

	sortedNumber = Math.floor(Math.random() * (max - min + 1) + min);

	winnerNumber.innerHTML = sortedNumber;

	form.id = "show";
	result.id = "";

	console.log(sortedNumber);
}

function novoSorteio() {
	form.id = "";
	result.id = "show";

	firstNumber.value = "";
	secondNumber.value = "";

    firstNumber.focus();
}
