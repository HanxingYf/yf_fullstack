var maxProfit = function (prices) {
  let minprice = Number.MAX_VALUE;
  let maxprofit = 0;
  for(let price of prices){
    maxprofit = Math.max(maxprofit,price-minprice);
    minprice = Math.min(price,minprice)
  }
  return maxprofit
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));