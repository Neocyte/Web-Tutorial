let cards = document.getElementsByClassName("card");

// Fade cards 3 and 4 on scroll
window.onscroll = () => {
    Array.from(cards).slice(2, 4).forEach((card) => {
        let bottom_of_object = card.offsetTop;
        let bottom_of_window = window.scrollY + window.innerHeight;
        if( bottom_of_window > bottom_of_object ){
            card.style.opacity = "1";
        }
    });
};