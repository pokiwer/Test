var promise1 = new Promise(function(resolve)
{
    setTimeout(() => {
        resolve([1]);
    }, 1000);
})

var promise2 = new Promise(function(resolve)
{
    setTimeout(() => {
        resolve([2,3])
    }, 2000);
})

Promise.all([promise1,promise2])
    .then(function([result1, result2])
    {
        console.log(result1.concat(result2))
    })