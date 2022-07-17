let cusChoice = "";

const ratingState = document.querySelector(".rates");
const appState = document.querySelector(".thank-you");


const ratingsChoices = document.querySelectorAll(".numbers");

ratingsChoices.forEach(choice => {
    let myInnerHtml = choice.innerHTML;
    choice.addEventListener("click", function onClick() {
        cusChoice =+ myInnerHtml;
        if (cusChoice.length > 1) {
            cusChoice.slice()
        }
        console.log(cusChoice)
    });
})



// This code implements after the submit button has been clicked
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function onClick() {
    ratingState.style.display = "none";
    appState.style.display = "block";
    const yourChoice = document.querySelector(".your-choice");
    yourChoice.textContent = `you selected ${cusChoice} out of 5`;
})






