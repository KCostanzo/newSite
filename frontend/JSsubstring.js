function processData(input) {
    //Enter your code here
    let inArr = input.split("\n");
    let arr = inArr.pop().split(" ").map(val => +val);
    
    console.log("woo " + subString(arr));
} 

function subString(arr) {
    //console.log(arr);
    if (arr.length < 1) {
        return(0);
    } else if (arr.length === 1) {
        return(arr[0]);
    }
    
    let v1 = arr.slice(0,1);
    let sub = arr.slice(1);
    
    let total = v1[0] + subString(sub);
    
    return(total);
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
