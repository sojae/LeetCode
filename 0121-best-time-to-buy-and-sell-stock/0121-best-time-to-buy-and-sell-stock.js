/**
 * @param {number[]} prices
 * @return {number}
 */
 
var maxProfit = function(prices) {
    let minPrice = prices[0];  // Infinity 대신 첫 값
    let maxProfit = 0;

    for (const price of prices) {
        maxProfit = Math.max(maxProfit, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }

    return maxProfit;
};
 





 