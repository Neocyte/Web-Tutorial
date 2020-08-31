const modal = document.getElementsByClassName("modal")[0];
const modal_content = document.getElementsByClassName("modal-content")[0];
const game_button = document.getElementsByClassName("game-button")[0];
const submit_button = document.getElementById("submit-button");
const text_field = document.getElementById("textfield");
const span = document.getElementsByClassName("close")[0];

// Open modal on button click
game_button.onclick = () => {
    modal_content.classList.remove('hidden');

    setTimeout(function () {
        modal_content.classList.remove('visuallyhidden');
    }, 20);

    modal.style.display = "block";
}

// Close modal on "X" click
span.onclick = () => {

    setTimeout(resetModal, 1000); // reset the modal after the fadeout animation
    setTimeout(hideModal, 1000); // hide the modal after the fadeout animation

    // fadeout animation
    if (modal_content.classList.contains('hidden')) {
        modal_content.classList.remove('hidden');
        setTimeout(function () {
            modal_content.classList.remove('visuallyhidden');
        }, 20);
    } else {
        modal_content.classList.add('visuallyhidden');
        modal_content.addEventListener('transitionend', function(e) {
            modal_content.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }
}

// Reset the modal
const resetModal = () => {
    document.getElementsByClassName("modal-text")[0].innerHTML = "Enter an integer from 0-999. " +
        "If you guess the magic number, you get $250! " +
        "Every entry costs 1$."
    document.getElementsByClassName("money2")[0].innerHTML = "250";
    text_field.value = "";
}

// Hide the modal
const hideModal = () => {
    modal.style.display = "none";
}

// Game's submit button function
const changeMoney = () => {
    let input = text_field.value;
    let magicNumber = Math.floor(Math.random() * 1000);
    let money = parseInt(document.getElementsByClassName("money2")[0].innerHTML);

    // Game-over
    if (money === 1) {
        document.getElementsByClassName("modal-text")[0].innerHTML = "Sorry, you ran out of money... Try again."
        money -= 1;
        document.getElementsByClassName("money2")[0].innerHTML = money.toString();
        submit_button.addEventListener("click", function(event) {
            event.preventDefault()
        });
    // Gain money
    } else if (input === magicNumber) {
        money = money + 250 - 1;
        document.getElementsByClassName("money2")[0].innerHTML = money.toString();
    // Lose money
    } else {
        money -= 1;
        document.getElementsByClassName("money2")[0].innerHTML = money.toString();
        document.getElementsByClassName("modal-text")[0].innerHTML = "Sorry, your magic number was: " + magicNumber.toString() + ".";

    }
}
















