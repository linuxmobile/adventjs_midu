/* RESULTADO:
getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100 */

// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//     return solve(giftsCities, maxGifts, maxCities);
// }

// function solve(giftsCities, maxGifts, maxCities, i = 0, countOfGifts = 0, currentCities = 0) {
//     if (currentCities == maxCities || i == giftsCities.length)
//         return countOfGifts;

//     if (countOfGifts + giftsCities[i] <= maxGifts)
//         return Math.max(
//             solve(giftsCities, maxGifts, maxCities, i + 1, countOfGifts + giftsCities[i], currentCities + 1),
//             solve(giftsCities, maxGifts, maxCities, i + 1, countOfGifts, currentCities)
//         );

//     return solve(giftsCities, maxGifts, maxCities, i + 1, countOfGifts, currentCities);
// } 101 pts

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const getSum = (values, gifts, cities, i)=>{
      if(gifts < 0 || cities === 0) return 0
      else if(values[i] <= gifts){
        return Math.max(values[i] + getSum(values, gifts - values[i], cities - 1, i-1), getSum(values, gifts, cities, i - 1))
      }
      return i > 0 ? getSum(values, gifts, cities, i - 1) : 0
    }
    return getSum(giftsCities, maxGifts, maxCities, giftsCities.length - 1)
  }