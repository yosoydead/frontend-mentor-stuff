// constants
const DATA_RATING_ATTR = "data-rating";
const CARD_FLIP_CSS_CLASS = "flipped";
const RATING_SELECTED_CSS_CLASS = 'selected';
const MAX_RATING_VALUE = 5;

// HTML nodes
const reviewWrapper = document.querySelector("#Review");
const ratingUl = document.querySelector("#Review-Modal--body-rating ul");
const ratingSelects = document.querySelectorAll("#Review-Modal--body-rating .rating-select");
const submit = document.querySelector("#Review-Modal button");
const resultWrapper = document.querySelector("#Review-Result--content div p");

let rating = null;

const resetSelectedState = () => {
    for(const r of ratingSelects) {
        r.classList.remove(RATING_SELECTED_CSS_CLASS);
    }
}

const generateRatingString = (rating, maxRating) => {
    return `You selected ${rating} out of ${maxRating}`;
}

submit.addEventListener("click", () => {
    if (!rating) {
        alert("No rating selected! :)");
        return;
    }
    resultWrapper.textContent = generateRatingString(rating, MAX_RATING_VALUE);
    reviewWrapper.classList.add(CARD_FLIP_CSS_CLASS);
});

for(const r of ratingSelects) {
    r.addEventListener("click", (e) => {
        console.log(e);
        resetSelectedState();
        e.target.classList.add(RATING_SELECTED_CSS_CLASS);
        rating =  e.target.getAttribute(DATA_RATING_ATTR);
    });
}