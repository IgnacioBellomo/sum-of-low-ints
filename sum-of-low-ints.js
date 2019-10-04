const sumTwoSmallestNumbers = someArr => {
    someArr.sort(function(a, b){return a - b});
    let result = someArr[0] + someArr[1];
    return result;
}