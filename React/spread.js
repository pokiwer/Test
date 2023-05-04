var arr = ['html','css','js']
var arr1 = ['flutter','dart']
//Toán tử spread dùng để giải phóng một mảng, object,... hoặc phá ngoặc
var arr3 = [...arr,...arr1]
console.log(arr3)


var course =
{
    api: 'https://course',
    content: 'Content'
}

var exercise =
{
    ...course,
    api: 'https://exercise'
}

console.log(exercise)//ouput = { api: 'https://exercise', content: 'Content' }
//Khi trùng key thì sẽ ghi đè bởi key trong object hiện tại

var object = ['long',23,'62kg']

//Dùng toán tử rest để lấy toàn bộ giá trị tham số truyền vào
function print(...rest)
{
    for(var i = 0; i < rest.length; i++)
    {
        console.log(rest[i]);
    }
}
//Dùng toán tử spread để giải mảng và truyền các các giá trị trong mảng thành đối số
print(...object)