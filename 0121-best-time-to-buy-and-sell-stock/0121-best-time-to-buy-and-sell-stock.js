/**
 * @param {number[]} prices
 * @return {number}
 */
 
var maxProfit = function(prices) {
//  * 전략:
// 최저가와 최대이익값생성
    let minPrice = prices[0];
    let maxProfit = 0;

    for(const price of prices){
        // 최대이익값 갱신
        maxProfit = Math.max(maxProfit, price - minPrice);

        // 최소값 갱신
        minPrice = Math.min(minPrice,price);
    }
    return maxProfit;
};
 





 