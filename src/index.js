
exports.min = function min (array) {
  if (!array) {
    return 0
  }  else if (array.length == 0) {
    return 0
  } else {
  let len = array.length;
  let min = Infinity;
  while (len--) {  //len is bigger then 0
    if (array[len] < min) {
      min = array[len];
    }
  }
  return min;
  }  
}


exports.max = function max (array) {
  if (!array) {
    return 0
  }else  if (array.length == 0) {
    return 0
  } else {
  let len = array.length;
  let max = -Infinity;
  while (len--) {  //len is bigger then 0
    if (array[len] > max) {
      max = array[len];
    }
  }
  return max;
  }  
}

exports.avg = function avg (array) {
  if (!array) {
    return 0
  }else  if (array.length == 0) {
    return 0
  } else {
    let argumentsSum = 0
    for (let i = 0; i < array.length; i++) {
      argumentsSum += array[i]
    } return argumentsSum/array.length
  } 
}
