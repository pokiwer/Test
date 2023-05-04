var arr = ['java','c++','html']
//Toán tử rest để lấy ra các phần tử còn lại, không được có phần tử nào đứng sau rest
//Dùng dấu ',' để tách số các phần tử trong mảng
const [a,...rest] = arr
//Phần tử a đã được lấy khỏi mảng
console.log(rest) // output = [ 'c++', 'html' ]
console.log(a) //output = java

var object = 
{
    name: 'Html',
    price: 1000,
    start: '20/10/2024',
    child:{
        name: 'nodejs',
        exp: 3
    }
}  
//toán tử rest dùng với object tương tự như dùng với mảng
var {name,...rest1} = object;
console.log(rest1) //output = { price: 1000, start: '20/10/2024' }

//Để gọi đến một key trong một object con của một object khác 
//Phải đổi tên key nếu có key bị trùng
var {name: parentName,child:{name}} = object;
console.log(parentName,name) //output = Html nodejs

//Để khởi tạo giá trị mặc định cho một key tên là 'Description' không có trong object
var {name: parentName,description = 'default'} = object;
//Khi key description có tồn tại trong object sẽ in ra giá trị của nó, không thì sẽ in ra 'default'
console.log(description) //output = default
