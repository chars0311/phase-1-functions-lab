// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    const distance = Math.abs(street - hqStreet);
  
    return distance;
  }
  
  module.exports = distanceFromHqInBlocks;
  
function distanceFromHqInFeet(street) {
    const blockLength = 264;
    const distanceInBlocks = Math.abs(street - 42)
    const distanceInFeet = distanceInBlocks * blockLength;
    return distanceInFeet

}
module.exports = distanceFromHqInFeet;

function  distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * blockLength;
    return distanceInFeet;
}
module.exports = distanceTravelledInFeet

function calculatesFarePrice(start, destination) {
       const blockLength = 264; 
           const freeDistanceInFeet = 400;
  
        const distanceInFeet = Math.abs(destination - start) * blockLength;
  
    if (distanceInFeet <= freeDistanceInFeet) {
            return 0;
    } else if (distanceInFeet <= 2000) {
            return (distanceInFeet - freeDistanceInFeet) * 0.02;
    } else if (distanceInFeet <= 2500) {
            return 25;
    } else {
            return 'cannot travel that far';
    }
  }
  
  module.exports = calculatesFarePrice;
  