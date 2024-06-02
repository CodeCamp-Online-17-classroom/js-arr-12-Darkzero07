const cars = ["volvo", "toyota", "honda", "ford"];
const index = cars.findIndex((value) => value === "honda") +1;
cars.splice(index, 0, "mazda", "bmw", "nissan");
console.log(cars);
