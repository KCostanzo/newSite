
function processData(input) {
    //Enter your code here
    
    var inArr = input.split(" ");
    //console.log(inArr);
    
    var t1 = Number(inArr.splice(0,1).toString());
    var t2 = Number(inArr.splice(0,1).toString());
    var i = Number(inArr.splice(0,1).toString());
    
    //console.log(t1);
    //console.log(t2);
    //console.log(i);
    
    var ansArr = [];
    var j = 0;
    while (j<i) {
        if (j===0) {
            ansArr.push(t1);
        } else if (j===1) {
            ansArr.push(t2);
        } else {
            var tempT = (ansArr[j-1] + ansArr[j-2]);
            console.log(tempT);
            ansArr.push(tempT);
            console.log(ansArr);
        };
        
        j++;
    };
    
    console.log(ansArr);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
