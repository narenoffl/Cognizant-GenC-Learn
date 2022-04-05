// DO NOT CHANGE THIS LINE
let taxRate = (price) => price * 0.15;

//Implement the calculateCarCost function
let totalPrice = 0;
function calculateCarCost(price, taxRate = price * 0.15) {
  totalPrice = price + taxRate;
  return totalPrice;
}

//Implement the calculateResellPrice function
let resellPrice = 0;
function calculateResellPrice(price, carAge = 1) {
  if (carAge == 1) {
    resellPrice = price * 0.8;
  } else if (carAge == 5) {
    resellPrice = price * 0.7;
  } else if (carAge == 10) {
    resellPrice = price * 0.6;
  } else if (carAge == 15) {
    resellPrice = price * 0.5;
  }

  return resellPrice;
}
