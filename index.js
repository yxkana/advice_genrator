const advice_number = document.querySelector("#number");
const advice_text = document.querySelector("#advice_text");
const generate_advice = document.querySelector("#gen_button");
const textDiv = document.getElementById("loader");



const generateAdvice = function(){
	textDiv.classList.add("loader");
	fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
	  textDiv.classList.remove("loader");
      advice_text.textContent = "\""+data.slip.advice+"\"";
      advice_number.textContent = "ADVICE #" + data.slip.id;
    });
}

generateAdvice();

generate_advice.addEventListener("click", function(){

	generateAdvice();
});
