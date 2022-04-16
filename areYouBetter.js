function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  for(let i = 0; i < classPoints.length; i++){
    total += classPoints[i]
  }
  total + yourPoints;
  let avg = total /classPoints.length + 1
  if (yourPoints >= avg){
    return true
  }else{
    return false;
  }
}
