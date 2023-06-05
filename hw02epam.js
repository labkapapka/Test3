const tour = {
    name: "Turkey",
    description: "amazing",
    price: 100,
    duration: 10,
    displayinfo: function () {
        return console.log(tour);
    }

}

tour.displayinfo();

function calculateTotalCost (tour1, turists) {
    return console.log(tour1 * turists);
}

calculateTotalCost(tour.price, 5);
// console.log(calculateTotalCost());
