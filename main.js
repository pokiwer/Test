Array.prototype.myMap = function(cb) {
    var output = [], len = this.length;
    for(var i = 0; i < len; ++i)
    {
        var result = cb(this[i],i)
        output.push(result)
    }
    return output;
}


const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]


