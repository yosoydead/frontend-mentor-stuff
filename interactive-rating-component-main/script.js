const ratingUl = document.querySelector("#Review-Modal--body-rating ul");
const ratingSelects = document.querySelectorAll("#Review-Modal--body-rating .rating-select");
const submit = document.querySelector("#Review-Modal button");

const resultWrapper = document.querySelector("#Review-Result--content div p");
const DATA_RATING_ATTR = "data-rating";

let rating = null;

const resetSelectedState = () => {
    for(const r of ratingSelects) {
        r.classList.remove('selected');
    }
}

submit.addEventListener("click", () => {
    // console.log("rating", rating);
    resultWrapper.textContent = `You selected ${rating} out of 5`;
});

for(const r of ratingSelects) {
    r.addEventListener("click", (e) => {
        console.log(e);
        resetSelectedState();
        e.target.classList.add('selected');
        rating =  e.target.getAttribute(DATA_RATING_ATTR);
    });
}