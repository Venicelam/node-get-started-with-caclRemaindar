// Write your cade below:
function caclRemaindar(a,b) {

var c = a % b;
console.log(c);
return c;
}
function caclSum(numArray1, numArray2) {
var totali = 0;
for (var i = 0; i < numArray1.length; i++){
    totali = totali + numArray1[i];
}
return totali;
var totalj = 0;
for (var j = 0; j < numArray2.length; j++){
    totalj = totalj + numArray2[j];
    }
return totalj;
}

function caclSumInConditon(numArray, a) {
var total = 0;
for (var i = 0; i < numArray.length; i++){
 if (numArray[i] < a){
 total = total + numArray[i];
}
}
return total;
}

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}